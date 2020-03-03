/* eslint-disable @typescript-eslint/no-var-requires */
const tsNode = require('ts-node');

tsNode.register({
  project: 'tests/settings/tsconfig.json',
});
