import { expect } from 'chai';
import DefaultClientConfigurationProvider from '@/implementations/providers/DefaultClientConfigurationProvider';

// refer to https://github.com/jsdom/jsdom/issues/1721 for createObjectURL issue
// eslint-disable-next-line @typescript-eslint/no-empty-function
function noOp() {}

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
}

describe('DefaultClientConfigurationProvider', function TestDefaultClientConfigurationProvider() {
  it('should have defaults of', async () => {
    // Setup
    const provider = new DefaultClientConfigurationProvider();
    const defaultValue = 'unknown';

    // SUT
    const configuration = await provider.getClientConfigurationAsync();

    // Assert
    expect(configuration.theme).to.deep.equal({});
    expect(configuration.applicationTitle).to.equal(defaultValue);
    expect(configuration.applicationVersion).to.equal(defaultValue);
    expect(configuration.publisherName).to.equal(defaultValue);
  });
});
