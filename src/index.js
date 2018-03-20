
import TokenRefresher from './TokenRefresher';


((window) => {
  const tokenRefresher = new TokenRefresher();
  window.run_refresher = () => {
    tokenRefresher.run();
  };

  window.stop_refresher = () => {
    tokenRefresher.stop();
  };
})(this);
