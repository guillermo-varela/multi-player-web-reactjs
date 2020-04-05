import { v4 as uuidv4 } from 'uuid';
import User from '../model/User';

const AUTHENTICATION_API_HOST = process.env.REACT_APP_AUTHENTICATION_API_HOST;
const CSRF_KEY = 'MULTI-PLAYER-AUTH-CSRF';

export const signIn = async (formData: FormData): Promise<User> => {
  const parameters = [...formData.entries()]
    .map(entry => encodeURIComponent(entry[0]) + '=' + encodeURIComponent(entry[1].toString()));

  const uuid = uuidv4();

  const response = await fetch(`${AUTHENTICATION_API_HOST}/signIn`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      [CSRF_KEY]: uuid,
    },
    credentials: 'include',
    body: parameters.join('&')
  });

  if (response.ok) {
    const user = await response.json() as User;
    user.sessionExpirationDate = new Date(user.sessionExpirationDate);
    return user
  }
  return Promise.reject(response.status);
}

export const signOut = async (): Promise<void> => {
  const uuid = uuidv4();

  const response = await fetch(`${AUTHENTICATION_API_HOST}/signOut`, {
    method: 'post',
    headers: {
      [CSRF_KEY]: uuid,
    },
    credentials: 'include'
  });

  if (response.ok) {
    return Promise.resolve();
  }
  return Promise.reject();
}

export const checkAuthentication = async (): Promise<User> => {
  const uuid = uuidv4();

  const response = await fetch(`${AUTHENTICATION_API_HOST}/checkAuthentication`, {
    method: 'post',
    headers: {
      [CSRF_KEY]: uuid,
    },
    credentials: 'include'
  });

  if (response.ok) {
    const user = await response.json() as User;
    user.sessionExpirationDate = new Date(user.sessionExpirationDate);
    return user
  }
  return Promise.reject(response.status);
}
