default: test

BIN = node_modules/.bin
CJSIFY = $(BIN)/cjsify --no-node
MOCHA = $(BIN)/mocha

.PHONY: test

all: test bundle

test:
	@$(MOCHA) --reporter spec --recursive --colors

bundle:	browserify browserify-min

browserify:
	$(CJSIFY) --export EventEmitter index.js -o event_emitter.js

browserify-min:
	$(CJSIFY) --minify --export EventEmitter index.js -o event_emitter.min.js
