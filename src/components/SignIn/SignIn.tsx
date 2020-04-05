import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button, { ButtonProps } from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import { signInAction } from '../../actions/authenticationActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import './SignIn.scss';

type Variant = {
  variant: ButtonProps['variant']
}

const SignIn: React.FC<Variant> = ({ variant }) => {
  const authenticationState = useTypedSelector(state => state.authentication);
  const intl = useIntl();
  const dispatch = useDispatch();
  const location = useLocation();
  const { referrer } = (location.state as any) || {
    referrer: {
      pathname: location.pathname.substring(0, location.pathname.lastIndexOf('/'))
    }
  };

  if (authenticationState.user) {
    return <Redirect to={referrer} />
  }

  return (
    <Formik
      initialValues={{
        username: 'user@test.com',
        password: 'user@test.com'
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .email(intl.formatMessage({ id: 'component.signin.invalid.email' }))
          .required(intl.formatMessage({ id: 'component.signin.empty.email' })),
        password: Yup.string()
          .required(intl.formatMessage({ id: 'component.signin.invalid.password' }))
      })}
      onSubmit={async (values) => {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => formData.append(key, value));
        return dispatch(signInAction(formData));
      }}
    >
      {formik => (
        <Form noValidate onSubmit={formik.handleSubmit} className="loginForm">
          <Form.Group controlId="formUsername">
            <Form.Label>
              <FormattedMessage id='component.signin.label.email' />
            </Form.Label>
            <Form.Control type="email" name="username" autoFocus
                          isValid={formik.touched.username && !formik.errors.username}
                          isInvalid={formik.touched.username && !!formik.errors.username}
                          {...formik.getFieldProps('username')} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              <FormattedMessage id='component.signin.credentials.hint' />
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>
              <FormattedMessage id='component.signin.label.password' />
            </Form.Label>
            <Form.Control type="password" name="password"
                          isValid={formik.touched.password && !formik.errors.password}
                          isInvalid={formik.touched.password && !!formik.errors.password}
                          {...formik.getFieldProps('password')} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant={variant} type="submit" size="lg"
                  disabled={formik.isSubmitting || authenticationState.isPendingSignIn} block>
                  {formik.isSubmitting || authenticationState.isPendingSignIn ?
              <div>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                &nbsp;<FormattedMessage id='component.signin.button.sending' />
              </div>
              : <FormattedMessage id='component.signin.button.submit' />
            }
          </Button>

          {authenticationState.isErrorSignIn &&
            <div>
              <br />
              <ErrorAlert message={authenticationState.isBadCredentials ?
                intl.formatMessage({ id: 'component.signin.incorrect.credentials' })
                : ''} />
            </div>
          }
        </Form>
      )}
    </Formik>
  );
}

export default SignIn;
