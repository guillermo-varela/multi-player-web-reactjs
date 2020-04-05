import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FormattedMessage } from 'react-intl';

const About: React.FC = () => {
  return (
    <Jumbotron>
      <h1>
        <FormattedMessage id='component.about.hello' />
      </h1>
      <br />
      <p>
        <FormattedMessage id='component.about.introduction' />
      </p>
      <ul>
        <li>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">
            Hooks
          </a>
        </li>
        <li>
          <a href="https://reacttraining.com/react-router/web/" target="_blank" rel="noopener noreferrer">
            React Router
          </a>
        </li>
        <li>
          <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
            React Bootstrap
          </a>
        </li>
        <li>
          <a href="https://github.com/react-bootstrap/react-router-bootstrap" target="_blank"
            rel="noopener noreferrer">
            react-router-bootstrap
          </a>
        </li>
        <li>
          <a href="https://sass-lang.com/" target="_blank"
            rel="noopener noreferrer">
            SASS
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/docs/code-splitting.html#route-based-code-splitting" target="_blank"
            rel="noopener noreferrer">
            <FormattedMessage id='component.about.codeSplit' />
          </a>
        </li>
        <li>
          <a href="https://redux.js.org/recipes/usage-with-typescript/" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id='component.about.redux.typescript' />
          </a>
        </li>
        <li>
          <a href="https://jaredpalmer.com/formik" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id='component.about.forms.formik' />
          </a>
        </li>
        <li>
          <a href="https://github.com/formatjs/react-intl" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id='component.about.internationalization' />
          </a>
        </li>
        <li>
          <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"
            target="_blank" rel="noopener noreferrer">
            <FormattedMessage id='component.about.rest.webflux' />
          </a>
        </li>
        <li>
          <a href="https://connect2id.com/products/nimbus-jose-jwt" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id='component.about.jwt' />
          </a>
        </li>
        <li>
          <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#use-of-custom-request-headers"
            target="_blank" rel="noopener noreferrer">
            <FormattedMessage id='component.about.csrf' />
          </a>
        </li>
      </ul>
      <p>
        <FormattedMessage id='component.about.code' />
      </p>
      <ul>
        <li>
          Backend:&nbsp;
            <a href="https://github.com/guillermo-varela/multi-player-auth" target="_blank" rel="noopener noreferrer">
              https://github.com/guillermo-varela/multi-player-auth
            </a>
        </li>
        <li>
          Frontend:&nbsp;
            <a href="https://github.com/guillermo-varela/multi-player-web-reactjs" target="_blank" rel="noopener noreferrer">
              https://github.com/guillermo-varela/multi-player-web-reactjs
            </a>
        </li>
      </ul>
      <p>
        <FormattedMessage id='component.about.pixabay'
          values={{
            link:
              <a href="https://pixabay.com/api/docs" target="_blank" rel="noopener noreferrer">
                <FormattedMessage id='component.about.pixabay.name' />
              </a>
          }} />
      </p>
    </Jumbotron>
  );
}

export default About;
