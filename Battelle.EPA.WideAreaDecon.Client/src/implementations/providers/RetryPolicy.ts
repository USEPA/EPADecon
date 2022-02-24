import { IRetryPolicy, RetryContext } from '@microsoft/signalr';

export default class RetryPolicy implements IRetryPolicy {
  // eslint-disable-next-line class-methods-use-this
  nextRetryDelayInMilliseconds(retry: RetryContext): number | null {
    const delay = [0, 1000, 5000, 5000, 10000];
    const ans = delay[retry.previousRetryCount] ? delay[retry.previousRetryCount] : 10000;
    return ans;
  }
}
