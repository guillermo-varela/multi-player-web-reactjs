import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FormattedMessage, useIntl } from 'react-intl';
import * as routes from '../../../model/routes';

import './RootHome.scss';

const RootHome: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <Carousel pause={false} className="carouselRoot">
        <Carousel.Item>
          <LinkContainer to={routes.nature}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/117186/pexels-photo-117186.jpeg?cs=srgb&dl=cabana-cambio-descendente-campo-117186.jpg&fm=jpg"
              alt={intl.formatMessage({ id: 'nature.title' })}
            />
          </LinkContainer>
          <Carousel.Caption>
            <LinkContainer to={routes.nature}>
              <h3>
                <FormattedMessage id='nature.title' />
              </h3>
            </LinkContainer>
            <p>
              <FormattedMessage id='root.nature.description' />
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <LinkContainer to={routes.space}>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/1eReaGn.jpg"
              alt={intl.formatMessage({ id: 'space.title' })}
            />
          </LinkContainer>
          <Carousel.Caption>
            <LinkContainer to={routes.space}>
              <h3>
                <FormattedMessage id='space.title' />
              </h3>
            </LinkContainer>
            <p>
              <FormattedMessage id='root.space.description' />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default RootHome;
