
import { calcInterval, DEFAULT_INTERVAL_MARGIN, MICROSECONDS } from '../../utils/interval';

describe('>> interval test', () => {
  it('>> calcInterval', () => {
    const expiresIn = 1000;
    expect(calcInterval(expiresIn)).toEqual((expiresIn - DEFAULT_INTERVAL_MARGIN) * MICROSECONDS);
    expect(calcInterval(expiresIn, 200)).toEqual((expiresIn - 200) * MICROSECONDS);
  });

  it('>> calcInterval expiresIn < margin', () => {
    const expiresIn = 1000;
    expect(calcInterval(expiresIn, 1100)).toEqual(0);
    expect(calcInterval(expiresIn, 1300)).toEqual(0);
  })
});
