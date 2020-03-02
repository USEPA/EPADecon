// TODO:: Can't get this working with ES6
// import { expect } from 'chai';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { expect } = require('chai');

describe('Example Test', () => {
  it('will pass', () => {
    const val = 4;
    expect(val).to.equal(4);
  });
});
