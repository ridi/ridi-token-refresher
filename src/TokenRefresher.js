
import { calcInterval } from './utils';


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
    // request
    const expiresIn = 400;
    const interval = calcInterval(expiresIn);

    this.stop();
    this.timeoutId = setTimeout(this.loop, interval);
  }

  isRunning() {
    return this.timeoutId !== null;
  }
}
