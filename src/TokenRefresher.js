
import { calcInterval, getExpiresIn } from './utils';


export default class TokenRefresher {
  constructor() {
    this.timeoutId = null;

    this.loop = this.loop.bind(this);
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

  loop() {
    this.stop();

    let expiresIn = null;
    try {
      expiresIn = getExpiresIn();
    } catch (e) {
      return;
    }

    const interval = calcInterval(expiresIn);
    this.timeoutId = setTimeout(this.loop, interval);
  }

  isRunning() {
    return this.timeoutId !== null;
  }
}
