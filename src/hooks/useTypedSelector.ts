import { useSelector, TypedUseSelectorHook } from 'react-redux'
import RootState from '../model/RootState';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default useTypedSelector;
