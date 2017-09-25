import {
  REQUEST_LEADERS,
  REQUEST_GOAL_LEADERS_SUCCESS,
  REQUEST_GOAL_LEADERS_FAIL,
  REQUEST_YELLOW_CARD_LEADERS_SUCCESS,
  REQUEST_YELLOW_CARD_LEADERS_FAIL,
  REQUEST_RED_CARD_LEADERS_SUCCESS,
  REQUEST_RED_CARD_LEADERS_FAIL,
  REHYDRATE
} from '../../types';

  //all states this reducer contains.
  const INITIAL_STATE = {
    goalLeaders: null,
    redCardLeaders: null,
    yellowCardLeaders: null,
    error: '',
    loading: false
   };

   export default (state = INITIAL_STATE, action) => {
     switch (action.type) {

       case REHYDRATE:
       return action.statsTable || [];

       case REQUEST_LEADERS:
       return { ...state, loading: true };

       case REQUEST_GOAL_LEADERS_SUCCESS:
       return { ...state, goalLeaders: action.payload, loading: false };

       case REQUEST_GOAL_LEADERS_FAIL:
       return { ...state, loading: false };

       case REQUEST_YELLOW_CARD_LEADERS_SUCCESS:
       return { ...state, yellowCardLeaders: action.payload, loading: false };

       case REQUEST_YELLOW_CARD_LEADERS_FAIL:
       return { ...state, loading: false };

       case REQUEST_RED_CARD_LEADERS_SUCCESS:
       return { ...state, redCardLeaders: action.payload, loading: false };

       case REQUEST_RED_CARD_LEADERS_FAIL:
       return { ...state, loading: false };

       default:
       return state;
     }
   };
