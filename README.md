# node-event-emitter

Direct port of node's EventEmitter with no dependencies. Available for CommonJS and browser environments.

This module was taken from node's source and altered to remove the logic regarding [domains](http://nodejs.org/api/domain.html) and all dependencies. This way it is dependency free, lighter weight and still has the exact same API (minus the domain stuff), making it ideal for those wishing to share code on client and server that depend on EventEmitter.

[Documentation](http://nodejs.org/api/events.html)

## Why

I needed an event system for my client side code and since I'm using node on the backend I wanted to make sure I'm not using two modules and two APIs for the same functionality. In addition, the code in question is being shared on both the client and server so I wanted to make use of EventEmitter on the server and browserify it for the client. The problem is, node's EventEmitter has two dependencies, which each have their own dependencies and an abundance of functionality which I do not need. I wanted something that removed the dependencies and any other code that was specific to node's environment while keeping the same interface and functionality.

I looked for other modules out there that aimed to solve this problem but everything I found was less than ideal. The libraries I came across added additional functionality or changed the API in some way. These libraries were also more lines of code. Given that I'm using the same code on client and server, I cannot have the same module implement two different interfaces depending on the environment. Hence this library.

## Obtainage

`npm install node-event-emitter`

Or if you're interested in using it just in browser environments, you can grab either the [minified](https://github.com/benjreinhart/node-event-emitter/blob/master/event_emitter.min.js) or [non minified](https://github.com/benjreinhart/node-event-emitter/blob/master/event_emitter.js) vesions in the root of this repo.

## LICENSE

[MIT](https://github.com/phriendlyinfo/skyskraper/blob/master/LICENSE.txt)
