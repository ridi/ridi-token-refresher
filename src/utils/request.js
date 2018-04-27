
import { memoize } from './memoize';


const domainWhitelist = [
  'ridibooks.com',
  'dev.ridi.io',
  'dev.ridi.com',
];

const getAccountDomain = memoize(() => {
  const { host } = window.location;
  for (let i = 0; i < domainWhitelist.length; i += 1) {
    if (host.includes(domainWhitelist[i])) {
      return domainWhitelist[i];
    }
  }

  throw new Error('This site not allowed');
}, () => 'account-domain');

export const getExpiresIn = async () => {
  const response = await fetch(`https://account.${getAccountDomain()}/ridi/token/`, { method: 'POST', credentials: 'include' });
  const data = await response.json();
  return data.expires_in;
};
