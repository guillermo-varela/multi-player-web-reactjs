import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import useTypedSelector from '../../hooks/useTypedSelector';
import { changeLocaleAction } from '../../actions/localeActions';

const LocaleSelectorMenuItem: React.FC = () => {
  const locale = useTypedSelector(state => state.locale);
  const dispatch = useDispatch();
  const intl = useIntl();

  return (
    <NavDropdown id='dropdownLocale' className='menu-link'
      title={`${intl.formatMessage({ id: 'root.locale.label' })}: ${locale}`} >
      <NavDropdown.Item as='button' onClick={() => dispatch(changeLocaleAction('en'))}>
        English
      </NavDropdown.Item>
      <NavDropdown.Item as='button' onClick={() => dispatch(changeLocaleAction('es'))}>
        Espa&ntilde;ol
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default LocaleSelectorMenuItem;
