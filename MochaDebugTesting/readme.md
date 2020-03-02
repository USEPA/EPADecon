# VS Code. Debug mocha tests written in TypeScript

## Debug Tasks

- **Debug Mocha Test (ts-node)** - allows you debug typescript files using ts-node.
- **Debug Mocha Test Current File (ts-node)** - allows you debug current typescript file using ts-node.
- **Debug Mocha Test (transpiled-code)** - allows you debug typescript files by transpiled code. Before run this task, typescript files will transpile to js with source-map.

## Usage
- Press **Ctrl+Shift+D** and choose debug task to debug test.
- Press **Ctrl+Shift+B** to build the project.
- Press **Ctrl+Shift+P** and choose "Run test task" to run test.
- ```npm test``` or ```npm run test:ts``` or ```npm run test:ts:watch```.
- ```npm run test:js```.

## Dependencies
- [typescript](https://github.com/Microsoft/TypeScript)
- [ts-node](https://github.com/TypeStrong/ts-node) - typeScript execution environment and REPL for node.
- [tsconfig-paths](https://github.com/dividab/tsconfig-paths) - load modules.
- [comment-json](https://github.com/kaelzhang/node-comment-json) - parse JSON strings with comments into JavaScript objects.
- [mocha](https://mochajs.org/) - test runner.
- [chai](http://chaijs.com/) - assertion library.

## Information
- [Node.js versions >= 6.3 support "V8 Inspector Protocol"](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [VS Code does't support dynamically generated source maps](https://github.com/Microsoft/vscode/issues/5728#issuecomment-214278351) - [using "inspector"](https://github.com/Microsoft/vscode/issues/5728#issuecomment-336346128).
