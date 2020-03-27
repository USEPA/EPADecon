import BetaPERT from './BetaPERT';
import Constant from './Constant';
import LogUniform from './LogUniform';
import TruncatedNormal from './TruncatedNormal';
import TruncatedLogNormal from './TruncatedLogNormal';
import Uniform from './Uniform';

type DistributionParameter = BetaPERT | Constant | LogUniform | TruncatedLogNormal | TruncatedNormal | Uniform;

export default DistributionParameter;
