import User from '../model/User';
import * as service from './authenticationService';

describe('authenticationService', () => {
  const sampleUser: User = {
    username: 'test-username',
    roles: [],
    sessionExpirationDate: new Date()
  };
  const CSRF_KEY = 'MULTI-PLAYER-AUTH-CSRF';

  describe('signIn()', () => {
    const formData = new FormData();
    formData.append('username', 'test-username');
    formData.append('password', 'test-password');

    it('signs in a user successfully', () => {
      const fetchMock = buildFetchMock();
      const result = service.signIn(formData);

      assertFetchCall(fetchMock, '/signIn', 'username=test-username&password=test-password',
        'application/x-www-form-urlencoded');
      return expect(result).resolves.toBe(sampleUser);
    });

    it('handles a failed sign in attempt', () => {
      const fetchMock = buildFetchMock(503);
      const result = service.signIn(formData);

      assertFetchCall(fetchMock, '/signIn', 'username=test-username&password=test-password',
        'application/x-www-form-urlencoded');
      return expect(result).rejects.toBe(503);
    });
  });

  describe('signOut()', () => {
    it('signs out a user successfully', () => {
      const fetchMock = buildFetchMock();
      const result = service.signOut();

      assertFetchCall(fetchMock, '/signOut');
      return expect(result).resolves.toBe(undefined);
    });

    it('handles a failed sign out attempt', () => {
      const fetchMock = buildFetchMock(503);
      const result = service.signOut();

      assertFetchCall(fetchMock, '/signOut');
      return expect(result).rejects.toBe(undefined);
    });
  });

  describe('checkAuthentication()', () => {
    it('checks a user currently authenticated by backend', () => {
      const fetchMock = buildFetchMock();
      const result = service.checkAuthentication();

      assertFetchCall(fetchMock, '/checkAuthentication');
      return expect(result).resolves.toBe(sampleUser);
    });

    it('handles an unauthenticated user on backend', () => {
      const fetchMock = buildFetchMock(503);
      const result = service.checkAuthentication();

      assertFetchCall(fetchMock, '/checkAuthentication');
      return expect(result).rejects.toBe(503);
    });
  });

  const buildFetchMock = (status = 200) => {
    const mock = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: status,
        ok: status == 200,
        json: () => sampleUser
      })
    );
    window.fetch = mock;
    return mock;
  };

  const assertFetchCall = (fetchMock: jest.Mock, apiPath: string, body?: string, contentType?: string) => {
    expect(fetchMock).toBeCalledTimes(1);
    const mockArguments = fetchMock.mock.calls[0];
    expect(mockArguments[0]).toContain(apiPath);

    const expectedRequestConfiguration: any = {
      credentials: 'include',
      method: 'post'
    };
    if (body) {
      expectedRequestConfiguration.body = body;
    }
    expect(mockArguments[1]).toStrictEqual(
      expect.objectContaining(expectedRequestConfiguration)
    );

    const expectedHeaders: any = {
      [CSRF_KEY]: expect.any(String)
    };
    if (contentType) {
      expectedHeaders['Content-Type'] = contentType;
    }
    expect(mockArguments[1].headers).toStrictEqual(
      expect.objectContaining(expectedHeaders)
    );
  };
});
