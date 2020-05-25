import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from './useTypedSelector';
import { checkAuthenticationAction, checkAuthenticationForTooLongAction, simpleSignOutAction } from '../actions/authenticationActions';

const useAuthentication = () => {
  const authenticationState = useTypedSelector(state => state.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticationAction());

    setTimeout(() => {
      dispatch(checkAuthenticationForTooLongAction());
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authenticationState.user
      && !authenticationState.isPendingSignOut
      && !authenticationState.isErrorSignOut
      && new Date() >= authenticationState.user.sessionExpirationDate) {
      dispatch(simpleSignOutAction());
    }
  });
};

export default useAuthentication;
