import { expect } from 'chai';

describe('Example', () => {
  it('passes', () => {
    const msg = 'new message';
    expect('new message').to.include(msg);
  });
});
