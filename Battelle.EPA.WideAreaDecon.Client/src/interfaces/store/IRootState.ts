import IRunSettings from './runSettings/IRunSettings';
import IAppSettings from './appSettings/IAppSettings';
import IClientConfiguration from '../configuration/IClientConfiguration';

export default interface IRootState extends IClientConfiguration, IAppSettings, IRunSettings {}
