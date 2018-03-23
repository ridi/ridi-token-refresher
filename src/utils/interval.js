
export const DEFAULT_INTERVAL_MARGIN = 60 * 5; // 10분 마진
export const MICROSECONDS = 1000;

export const calcInterval = (expiresIn, margin = DEFAULT_INTERVAL_MARGIN) => {
  if (expiresIn < margin) {
    return 0;
  }

  const miscExpiresIn = expiresIn * MICROSECONDS;
  const miscMargin = margin * MICROSECONDS;

  return miscExpiresIn - miscMargin;
};
