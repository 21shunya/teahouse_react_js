import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsCreators from '../store/action-creators/index';

export const useActions = () => {
  const dispatch = useDispatch();
  console.log(ActionsCreators);
  return bindActionCreators(ActionsCreators, dispatch);
};
