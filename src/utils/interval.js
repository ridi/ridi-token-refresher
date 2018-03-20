
const DEFAULT_INTERVAL_MARGIN = 300;

export const calcInterval = (expiresIn, margin = DEFAULT_INTERVAL_MARGIN) => expiresIn - margin;
