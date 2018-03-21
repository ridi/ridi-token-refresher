
import TokenRefresher from '../TokenRefresher';

describe('>> TokenRefresher Js Test', () => {
  it('>> TokenRefresher Constructor', () => {
    const refresher = new TokenRefresher();
    expect(refresher.isRunning()).toEqual(false);
  });

  it('>> TokenRefresher Start & Stop', () => {
    const refresher = new TokenRefresher();

    refresher.start();
    expect(refresher.isRunning()).toEqual(true);

    refresher.stop();
    expect(refresher.isRunning()).toEqual(false);
  });
});
