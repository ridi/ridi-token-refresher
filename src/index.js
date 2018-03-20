
import TokenRefresher from './TokenRefresher';


((window) => {
  const tokenRefresher = new TokenRefresher();
  window.run_refresher = () => {
    tokenRefresher.run();
  };
})(this);
