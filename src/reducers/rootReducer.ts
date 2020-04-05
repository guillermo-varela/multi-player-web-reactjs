import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import localeReducer from './localeReducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  locale: localeReducer
});

export default rootReducer;
