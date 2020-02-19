import { Container } from 'inversify';
import { DefaultClientConfigurationProvider } from '@/implementations/providers'
import { IClientConfigurationProvider } from '@/interfaces/providers/IClientConfigurationProvider';

let container = new Container();

container.bind<IClientConfigurationProvider>(DefaultClientConfigurationProvider);

export default container;
