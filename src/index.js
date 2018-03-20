
import TokenRefresher from './TokenRefresher';


((window) => {
  const tokenRefresher = new TokenRefresher();
  window.startRefresher = () => {
    tokenRefresher.start();
  };

  window.stopRefresher = () => {
    tokenRefresher.stop();
  };
})(window);
