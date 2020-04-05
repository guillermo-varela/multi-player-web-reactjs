import React from 'react';
import { match } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import * as routes from '../../../model/routes';
import AuthenticationMenuItem from '../../../components/AuthenticationMenuItem/AuthenticationMenuItem';
import LocaleSelectorMenuItem from '../../../components/LocaleSelectorMenuItem/LocaleSelectorMenuItem';

const Header: React.FC<{ match: match }> = (props: { match: match }) => {
  const { match } = props;
  const intl = useIntl();

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <LinkContainer to={`${match.url}`} exact={true}>
          <Navbar.Brand>
            <FormattedMessage id='nature.title' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to={`${match.url}`} exact={true}>
              <Nav.Link active={false}>
                <FormattedMessage id='menu.home' />
              </Nav.Link>
            </LinkContainer>
            <NavDropdown id="collasible-nav-dropdown" title={intl.formatMessage({ id: 'menu.sections' })}>
              <LinkContainer to={`${match.url}${routes.images}`}>
                <NavDropdown.Item active={false}>
                  <FormattedMessage id='menu.images' />
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={`${match.url}${routes.videos}`}>
                <NavDropdown.Item active={false}>
                  <FormattedMessage id='menu.videos' />
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item
                target="_blank"
                href={`https://pixabay.com/photos/search/${intl.formatMessage({ id: 'nature.title' })}/?cat=nature`}
                rel="noopener noreferrer"
                active={false}>
                <FormattedMessage id='menu.more' />
            </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to={`${match.url}${routes.about}`}>
              <Nav.Link active={false}>
                <FormattedMessage id='menu.about' />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <LocaleSelectorMenuItem />
        <AuthenticationMenuItem match={match} />
      </Navbar>
    </header>
  );
}

export default Header;
