var expect = require('chai').expect
  , EventEmitter = require('../').EventEmitter
  , sinon = require('sinon');

describe('EventEmitter', function(){
  describe('#on', function(){
    it('is aliased as addListener', function(){
      expect(EventEmitter.prototype.on).to.equal(EventEmitter.prototype.addListener);
    });

    it('adds a handler for a specified event', function(){
      var emitter = new EventEmitter
        , fn = function(){};

      emitter.on('some:event', fn);

      expect(!!~emitter.listeners('some:event').indexOf(fn)).to.be.true;
      expect(!!~emitter.listeners('another:event').indexOf(fn)).to.be.false;
      expect(EventEmitter.listenerCount(emitter, 'some:event')).to.equal(1);
    });
  });

  describe('#emit', function(){
    it('invokes all handlers for a given event', function(){
      var emitter = new EventEmitter
        , spy1 = sinon.spy()
        , spy2 = sinon.spy()
        , spy3 = sinon.spy();

      emitter.on('some:event', spy1);
      emitter.on('some:event', spy2);
      emitter.on('another:event', spy3);

      emitter.emit('some:event');

      expect(spy1.callCount).to.equal(1);
      expect(spy2.callCount).to.equal(1);
      expect(spy3.callCount).to.equal(0);
    });
  });

  describe('#removeListener', function(){
    it('removes a given handler for a given event', function(){
      var emitter = new EventEmitter
        , spy1 = sinon.spy()
        , spy2 = sinon.spy();

      emitter.on('some:event', spy1);
      emitter.on('some:event', spy2);

      emitter.removeListener('some:event', spy1);
      emitter.emit('some:event');

      expect(spy1.callCount).to.equal(0);
      expect(spy2.callCount).to.equal(1);
    });
  });


  describe('#removeAllListeners', function(){
    it('removes all listeners for a given event', function(){
      var emitter = new EventEmitter
        , spy1 = sinon.spy()
        , spy2 = sinon.spy()
        , spy3 = sinon.spy();

      emitter.on('some:event', spy1);
      emitter.on('some:event', spy2);
      emitter.on('another:event', spy3);

      emitter.removeAllListeners('some:event');
      emitter.emit('some:event');
      emitter.emit('another:event');

      expect(spy1.callCount).to.equal(0);
      expect(spy2.callCount).to.equal(0);
      expect(spy3.callCount).to.equal(1);
    });

    it('removes all listeners bound to the emitter', function(){
      var emitter = new EventEmitter
        , spy1 = sinon.spy()
        , spy2 = sinon.spy()
        , spy3 = sinon.spy();

      emitter.on('some:event', spy1);
      emitter.on('some:event', spy2);
      emitter.on('another:event', spy3);

      emitter.removeAllListeners();
      emitter.emit('some:event');
      emitter.emit('another:event');

      expect(spy1.callCount).to.equal(0);
      expect(spy2.callCount).to.equal(0);
      expect(spy3.callCount).to.equal(0);
    });
  });
});
