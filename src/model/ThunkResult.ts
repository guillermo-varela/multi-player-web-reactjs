import { ThunkAction } from 'redux-thunk';
import Action from './Action';
import RootState from './RootState';

type ThunkResult = ThunkAction<void, RootState, undefined, Action>;

export default ThunkResult;
