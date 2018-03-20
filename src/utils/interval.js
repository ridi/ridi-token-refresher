
const DEFAULT_INTERVAL_MARGIN = 60 * 10; // 10분 마진

export const calcInterval = (expiresIn, margin = DEFAULT_INTERVAL_MARGIN) => expiresIn - margin;
