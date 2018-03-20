
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};


const parseJSON = response => response.json();


export const getExpiresIn = async () => {
  const data = await fetch('https://account.ridibooks.com/ridi/token/').then(checkStatus).then(parseJSON);
  return data.expires_in;
};
