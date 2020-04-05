import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FormattedMessage } from 'react-intl';

type Message = {
  message?: String;
}

const ErrorAlert: React.FC<Message> = ({ message }) => {
  return (
    <Alert variant="danger">
      {message ?
        message
        :
        <span>
          <FormattedMessage id='component.error.message' />
        </span>
      }

    </Alert>
  );
}

export default ErrorAlert;
