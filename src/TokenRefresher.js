
import { calcInterval, getExpiresIn } from './utils';

const MAX_RETRY_COUNT = 3;
const RETRY_INTERVAL = 5000;


export default class TokenRefresher {
  constructor() {
    this.timeoutId = null;
    this.retryCount = 0;

    this._loop = this._loop.bind(this);
  }

  start() {
    if (this.isRunning()) {
      return;
    }

    this.timeoutId = setTimeout(this._loop, 0);
  }

  stop() {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }

  isRunning() {
    return this.timeoutId !== null;
  }

  async _loop() {
    let expiresIn = null;
    try {
      expiresIn = await getExpiresIn();
    } catch (e) {
      if (this.retryCount < MAX_RETRY_COUNT) {
        this.retryCount += 1;
        this.timeoutId = setTimeout(this._loop, RETRY_INTERVAL);
      } else {
        this.stop();
      }
      return;
    }

    const interval = calcInterval(expiresIn);
    this.retryCount = 0;
    this.timeoutId = setTimeout(this._loop, interval);
  }
}
