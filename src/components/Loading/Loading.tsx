import React from 'react';
import Spinner, { SpinnerProps } from 'react-bootstrap/Spinner';
import { FormattedMessage } from 'react-intl';

type Variant = {
  variant?: SpinnerProps['variant']
}

const Loading: React.FC<Variant> = ({ variant }) => {
  return (
    <Spinner animation="border" variant={variant} role="status">
      <span className="sr-only">
        <FormattedMessage id='root.loading' />
      </span>
    </Spinner>
  );
}

export default Loading;
