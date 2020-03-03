import { Container } from 'inversify';
import 'reflect-metadata';
import providersContainer from './providers/providers.config';

const container = new Container();

container.load(providersContainer);

export default container;
