
const DEFAULT_INTERVAL_MARGIN = 60 * 10; // 10분 마진
const MICROSECONDS = 1000;

export const calcInterval = (expiresIn, margin = DEFAULT_INTERVAL_MARGIN) => {
  const miscExpiresIn = expiresIn * MICROSECONDS;
  const miscMargin = margin * MICROSECONDS;

  return miscExpiresIn - miscMargin;
};
