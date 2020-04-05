import React, { useState, useEffect, useRef } from 'react';
import { match } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import useTypedSelector from '../../hooks/useTypedSelector';
import { signOutAction } from '../../actions/authenticationActions';
import { signIn } from '../../model/routes';

const AuthenticationMenuItem: React.FC<{ match: match }> = (props: { match: match }) => {
  const [showErrorSignOut, setErrorSignOut] = useState(false);
  const authenticationState = useTypedSelector(state => state.authentication);
  const dispatch = useDispatch();
  const signOutRef = useRef<HTMLButtonElement>(null);
  const { match } = props;

  useEffect(() => {
    setErrorSignOut(authenticationState.isErrorSignOut);
    if (authenticationState.isErrorSignOut) {
      setTimeout(() => setErrorSignOut(false), 5000);
    }
  }, [authenticationState.isErrorSignOut]);

  return (
    <Nav>
      {
        authenticationState.user ?
          <Navbar.Text>
            <span className="align-middle">
              {authenticationState.user.username.substr(0, authenticationState.user.username.indexOf('@'))}:&nbsp;
            </span>
            {authenticationState.isPendingSignOut ?
              <Spinner animation="border" size="sm" variant="light" />
              :
              <Button variant="link" className="menu-link" ref={signOutRef as any}
                onClick={() => { dispatch(signOutAction()) }}>
                <FormattedMessage id='menu.signOut' />
              </Button>
            }
          </Navbar.Text>
          :
          <LinkContainer to={`${match.url}${signIn}`}>
            <Nav.Link active={false}>
              <FormattedMessage id='menu.signIn' />
            </Nav.Link>
          </LinkContainer>
      }
      {
        signOutRef.current &&
        <Overlay
          placement="bottom"
          show={showErrorSignOut}
          target={signOutRef.current}>
          <Popover id="popover-sign-out">
            <Popover.Title as="h3">
              <FormattedMessage id='menu.signOut.error.title' />
            </Popover.Title>
            <Popover.Content>
              <FormattedMessage id='menu.signOut.error.message' />
            </Popover.Content>
          </Popover>
        </Overlay>
      }
    </Nav>
  );
}

export default AuthenticationMenuItem;
