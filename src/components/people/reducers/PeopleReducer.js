import { REHYDRATE } from 'redux-persist/constants';
import {
  REQUEST_PERSONAL_INFO,
  REQUEST_PERSONAL_INFO_SUCCESS,
  REQUEST_PERSONAL_INFO_FAIL,
} from '../../types';

  //all states this reducer contains.
  const INITIAL_STATE = {
    personalInfo: null,
    error: '',
    loading: false
   };

   export default (state = INITIAL_STATE, action) => {
     console.log(action);
     switch (action.type) {

       case REHYDRATE:
       return action.person || [];

       case REQUEST_PERSONAL_INFO:
       return { ...state, loading: true };

       case REQUEST_PERSONAL_INFO_SUCCESS:
       return { ...state, personalInfo: action.payload, loading: false };

       case REQUEST_PERSONAL_INFO_FAIL:
       return { ...state, loading: false };

       default:
       return state;
     }
   };
