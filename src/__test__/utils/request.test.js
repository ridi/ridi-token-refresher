
jest.mock('../../utils/request');
global.fetch = require('jest-fetch-mock');

import { getExpiresIn } from '../../utils/request';

describe('>> request test', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(() => {
      JSON.stringify({ expires_in: 1100 });
    });
  });

  it('>> getExpiresIn test', () => {
    getExpiresIn().then(expiresIn => {
      expect(expiresIn).toEqual(1100);
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://account.ridibooks.com/ridi/token/');
  });
});
