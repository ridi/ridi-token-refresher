

export default class TokenRefresher {
  constructor() {
    this.timeoutId = null;
  }

  run() {
    if (this.isRunning()) {
      return;
    }

    this.timeoutId = setTimeout(() => {});
  }

  stop() {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }

  isRunning() {
    return this.timeoutId !== null;
  }
}
