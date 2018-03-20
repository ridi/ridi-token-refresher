
import TokenRefresher from './TokenRefresher';


((window) => {
  const tokenRefresher = new TokenRefresher();
  window.runRefresher = () => {
    tokenRefresher.run();
  };

  window.stopRefresher = () => {
    tokenRefresher.stop();
  };
})(this);
