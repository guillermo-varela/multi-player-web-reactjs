import React from 'react';
import { IntlProvider } from 'react-intl';
import en from './translations/en.json';
import es from './translations/es.json';
import useTypedSelector from './hooks/useTypedSelector';
import RootRouter from './sites/root/RootRouter';

import './App.scss';

const messages = { en, es };

const App: React.FC = () => {
  const locale = useTypedSelector(state => state.locale);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <RootRouter />
    </IntlProvider>
  );
}

export default App;
