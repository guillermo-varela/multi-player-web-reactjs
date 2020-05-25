import Action from '../model/Action';
import ActionType from '../model/ActionType';
import User from '../model/User';

type State = {
  isPendingSignIn: boolean,
  isErrorSignIn: boolean,
  isBadCredentials: boolean,
  isPendingSignOut: boolean,
  isErrorSignOut: boolean,
  isPendingCheckAuthentication: boolean,
  isPendingCheckAuthenticationTooLong: boolean,
  user?: User
}

const initialState: State = {
  isPendingSignIn: false,
  isErrorSignIn: false,
  isBadCredentials: false,
  isPendingSignOut: false,
  isErrorSignOut: false,
  isPendingCheckAuthentication: false,
  isPendingCheckAuthenticationTooLong: false
};

const authenticationReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SIGN_IN_PENDING:
      return { ...initialState, isPendingSignIn: true };
    case ActionType.SIGN_IN_SUCCESS:
      return { ...initialState, user: action.payload };
    case ActionType.SIGN_IN_ERROR:
      return { ...initialState, isErrorSignIn: true, isBadCredentials: action.payload === 401 };
    case ActionType.SIGN_OUT_PENDING:
      return { ...state, isPendingSignOut: true, isErrorSignOut: false };
    case ActionType.SIGN_OUT_ERROR:
      return { ...state, isPendingSignOut: false, isErrorSignOut: true };
    case ActionType.SIGN_OUT_SUCCESS:
      return initialState;
    case ActionType.CHECK_AUTHENTICATION_PENDING:
      return { ...state, isPendingCheckAuthentication: true };
    case ActionType.CHECK_AUTHENTICATION_PENDING_TOO_LONG:
      return { ...state, isPendingCheckAuthenticationTooLong: state.isPendingCheckAuthentication };
    default:
      return state;
  }
};

export default authenticationReducer;
