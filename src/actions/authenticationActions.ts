import ThunkResult from '../model/ThunkResult';
import Action from '../model/Action';
import ActionType from '../model/ActionType';
import { signIn, signOut, checkAuthentication } from '../services/authenticationService';

export const signInAction = (formData: FormData): ThunkResult => (dispatch) => {
  dispatch({ type: ActionType.SIGN_IN_PENDING });

  return signIn(formData)
    .then(user => dispatch({ type: ActionType.SIGN_IN_SUCCESS, payload: user }))
    .catch(error => dispatch({ type: ActionType.SIGN_IN_ERROR, payload: error }));
}

export const checkAuthenticationAction = (): ThunkResult => (dispatch) => {
  dispatch({ type: ActionType.CHECK_AUTHENTICATION_PENDING });

  return checkAuthentication()
    .then(user => dispatch({ type: ActionType.SIGN_IN_SUCCESS, payload: user }))
    .catch(() => dispatch({ type: ActionType.SIGN_OUT_SUCCESS }));
}

export const signOutAction = (): ThunkResult => (dispatch) => {
  dispatch({ type: ActionType.SIGN_OUT_PENDING });

  return signOut()
    .then(() => dispatch({ type: ActionType.SIGN_OUT_SUCCESS }))
    .catch(() => dispatch({ type: ActionType.SIGN_OUT_ERROR }));
}

export const simpleSignOutAction = (): Action => {
  return { type: ActionType.SIGN_OUT_SUCCESS };
}
