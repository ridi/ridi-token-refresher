
import { calcInterval, getExpiresIn } from './utils';

const MAX_RETRY_COUNT = 3;
const RETRY_INTERVAL = 5000;


export default class TokenRefresher {
  constructor() {
    this.timeoutId = null;

    this.loop = this.loop.bind(this);
    this.retryCount = 0;
  }

  start() {
    if (this.isRunning()) {
      return;
    }

    this.timeoutId = setTimeout(this.loop, 0);
  }

  stop() {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }

  async loop() {
    this.stop();

    let expiresIn = null;
    try {
      expiresIn = await getExpiresIn();
    } catch (e) {
      if (this.retryCount < MAX_RETRY_COUNT) {
        this.retryCount += 1;
        this.timeoutId = setTimeout(this.loop, RETRY_INTERVAL);
      }
      return;
    }

    const interval = calcInterval(expiresIn);
    this.retryCount = 0;
    this.timeoutId = setTimeout(this.loop, interval);
  }

  isRunning() {
    return this.timeoutId !== null;
  }
}
