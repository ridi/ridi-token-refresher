
import { memoize } from '../../utils/memoize';

describe('>> memoize test', () => {
  it('>> memoize not resolver', () => {
    const dummyFn = memoize(() => new Object());

    const obj1 = dummyFn();
    const obj2 = dummyFn();
    const obj3 = dummyFn('new-key');
    expect(obj1).toBe(obj2);
    expect(obj1).not.toBe(obj3);
    expect(obj2).not.toBe(obj3);
  });

  it('>> memoize set resolver', () => {
    const dummyFn = memoize(() => new Object(), () => 'key');

    const obj1 = dummyFn();
    const obj2 = dummyFn();
    const obj3 = dummyFn('new-key');
    expect(obj1).toBe(obj2);
    expect(obj1).toBe(obj3);
    expect(obj2).toBe(obj3);
  });

  it('>> memoize raise', () => {
    expect(() => memoize('string')).toThrow();
    expect(() => memoize(undefined)).toThrow();
    expect(() => memoize(() => 'string', 'string')).toThrow();
    expect(() => memoize(() => 'string', undefined)).not.toThrow();
  });
});
