
export const getExpiresIn = async () => {
  const response = await fetch('https://account.ridibooks.com/ridi/token/');
  const data = await response.json();
  return data.expires_in;
};
