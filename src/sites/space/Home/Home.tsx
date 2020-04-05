import React from 'react';
import { match } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';
import * as routes from '../../../model/routes';

const Home: React.FC<{ match: match }> = (props: { match: match }) => {
  const { match } = props;
  return (
    <div>
      <Alert variant="info">
        <h1>
          <FormattedMessage id='space.hello' />
        </h1>
        <p>
          <FormattedMessage id='space.introduction' />
        </p>
      </Alert>

      <CardGroup>
        <Card>
          <LinkContainer to={`${match.url}${routes.images}`}>
            <Card.Img variant="top" src="https://i.imgur.com/1eReaGn.jpg" />
          </LinkContainer>
          <Card.Body>
            <Card.Title>
              <FormattedMessage id='menu.images' />
            </Card.Title>
            <Card.Text>
              <FormattedMessage id='space.images.introduction' />
            </Card.Text>
            <LinkContainer to={`${match.url}${routes.images}`}>
              <Button variant="primary">
                <FormattedMessage id='menu.images' />
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>

        <Card>
          <LinkContainer to={`${match.url}${routes.videos}`}>
            <Card.Img variant="top" src="https://i.imgur.com/nGh7PTJ.png" />
          </LinkContainer>
          <Card.Body>
            <Card.Title>
              <FormattedMessage id='menu.videos' />
            </Card.Title>
            <Card.Text>
              <FormattedMessage id='space.videos.introduction' />
            </Card.Text>
            <LinkContainer to={`${match.url}${routes.videos}`}>
              <Button variant="primary">
                <FormattedMessage id='menu.videos' />
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Home;
