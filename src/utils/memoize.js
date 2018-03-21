// https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L10554-L10572

const FUNC_ERROR_TEXT = 'Expected a function';

export const memoize = (fn, resolver) => {
  if (typeof fn !== 'function' || (resolver && typeof resolver !== 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  const memoized = (...args) => {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const { cache } = memoized;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new memoize.Cache();
  return memoized;
};
memoize.Cache = Map;
