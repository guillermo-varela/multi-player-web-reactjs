import React from 'react';
import { match } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';
import * as routes from '../../../model/routes';

const Home: React.FC<{ match: match }> = (props: { match: match }) => {
  const { match } = props;
  return (
    <div>
      <Jumbotron>
        <h1>
          <FormattedMessage id='nature.hello' />
        </h1>
        <p>
          <FormattedMessage id='nature.introduction' />
        </p>
        <p>
          <LinkContainer to={`${match.url}${routes.images}`}>
            <Button variant="success">
              <FormattedMessage id='menu.images' />
            </Button>
          </LinkContainer>
        </p>
        <p>
          <LinkContainer to={`${match.url}${routes.videos}`}>
            <Button variant="success">
              <FormattedMessage id='menu.videos' />
            </Button>
          </LinkContainer>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
