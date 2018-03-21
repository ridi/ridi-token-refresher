
const getAccountDomain = () => 'ridibooks.com';

export const getExpiresIn = async () => {
  const response = await fetch(`https://account.${getAccountDomain()}/ridi/token/`);
  const data = await response.json();
  return data.expires_in;
};
