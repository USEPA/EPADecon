import { expect } from 'chai';
import types from '@/dependencyInjection/types';
import container from '@/dependencyInjection/inversify.config';
import INavigationItemProvider from '@/interfaces/providers/INavigationItemProvider';

describe('SomeTest', function SomeTest() {
  it('should pass', () => {
    const provider = container.get<INavigationItemProvider>(types.NavigationItemProvider);
    const items = provider.getNavigationItems();
    const result = 50;
    expect(result).to.be.equal(50);
  });
});
