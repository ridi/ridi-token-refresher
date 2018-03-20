
import TokenRefresher from './TokenRefresher';


((window) => {
  let isRunning = false;

  window.run_refresher = () => {
    if (isRunning) {
      return;
    }
    isRunning = true;

    const tokenRefresher = new TokenRefresher();
    tokenRefresher.run();
  };
})(this);
