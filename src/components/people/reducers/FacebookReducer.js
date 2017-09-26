import { REHYDRATE } from 'redux-persist/constants';
import {
    REQUEST_FB_POST,
    REQUEST_FB_POST_SUCCESS,
    REQUEST_FB_POST_FAIL,
    SELECTED_POST
} from '../../types';

  //all states this reducer contains.
  const INITIAL_STATE = {
    post: null,
    postId: '',
    error: '',
    loading: false
   };

   export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
       case REHYDRATE:
       return action.payload.facebook || [];

       case REQUEST_FB_POST:
       return { ...state, loading: true, error: '' };

       //...INITIAL_STATE takes all the defaults and calendar: overrides the initial value
       case REQUEST_FB_POST_SUCCESS:
       return { ...state, loading: false, post: action.payload };

       case SELECTED_POST :
       return { ...state, postId: action.payload };

       case REQUEST_FB_POST_FAIL:
       return { ...state,
         error: 'Failed to Fetch Facebook Post',
         loading: false };

       default:
       return state;
     }
   };
