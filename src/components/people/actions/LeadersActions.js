import firebase from 'firebase';
//import { Actions } from 'react-native-router-flux';
import {
REQUEST_LEADERS,
REQUEST_GOAL_LEADERS_SUCCESS,
REQUEST_YELLOW_CARD_LEADERS_SUCCESS,
REQUEST_YELLOW_CARD_LEADERS_FAIL,
REQUEST_RED_CARD_LEADERS_SUCCESS,
REQUEST_RED_CARD_LEADERS_FAIL
} from '../../types';

  export const requestGoalsLeaders = (tournament, division) => {
    //redux-thunk calls the dispatch func to dispatch de action for our reducers
      return (dispatch) => {
      dispatch({ type: REQUEST_LEADERS });

        // firebase.database()
        // .ref(`/Tournaments/${tournament}/${division}/players`)
        // .orderByChild('goals')
        // .limitToLast(25)
        // .on('value')
        // .then(snapshot => {
        //   requestGoalsSuccess(dispatch, snapshot);
        // })
        // .catch(() => requestGoalsFail(dispatch));

  firebase.database()
  .ref(`/Tournaments/${tournament}/${division}/players`)
  .orderByChild('goals')
  .limitToLast(24)
  .on('value', snapshot => {
    requestGoalsSuccess(dispatch, snapshot);
  });
};
};
  const requestGoalsSuccess = (dispatch, goalLeaders) => {
    dispatch({ type: REQUEST_GOAL_LEADERS_SUCCESS, payload: goalLeaders.val() });
  };

  // const requestGoalsFail = (dispatch) => {
  //   dispatch({ type: REQUEST_GOAL_LEADERS_FAIL });
  // };

////////////////////////   YELLOW CARDS

  export const requestYellowCardLeaders = (tournament, division) => {
    //redux-thunk calls the dispatch func to dispatch de action for our reducers
      return (dispatch) => {
      dispatch({ type: REQUEST_LEADERS });
      try {
        firebase.database()
        .ref(`/Tournaments/${tournament}/${division}/players`)
        .orderByChild('yellow_cards')
        .limitToLast(24)
        .on('value', snapshot => {
          requestYellowCardSuccess(dispatch, snapshot);
        });
      } catch (e) {
          requestYellowCardFail(dispatch);
    }
  };
};
  const requestYellowCardSuccess = (dispatch, yellowCardLeaders) => {
    dispatch({ type: REQUEST_YELLOW_CARD_LEADERS_SUCCESS, payload: yellowCardLeaders.val() });
  };

  const requestYellowCardFail = (dispatch) => {
    dispatch({ type: REQUEST_YELLOW_CARD_LEADERS_FAIL });
  };

  /////////////////////// RED CARS

  export const requestRedCardLeaders = (tournament, division) => {
    //redux-thunk calls the dispatch func to dispatch de action for our reducers
      return (dispatch) => {
      dispatch({ type: REQUEST_LEADERS });
      try {
        firebase.database()
        .ref(`/Tournaments/${tournament}/${division}/players`)
        .orderByChild('red_cards')
        .limitToLast(24)
        .on('value', snapshot => {
          requestRedCardSuccess(dispatch, snapshot);
        });
      } catch (e) {
          requestRedCardFail(dispatch);
    }
  };
};
  const requestRedCardSuccess = (dispatch, redCardLeaders) => {
    dispatch({ type: REQUEST_RED_CARD_LEADERS_SUCCESS, payload: redCardLeaders.val() });
  };

  const requestRedCardFail = (dispatch) => {
    dispatch({ type: REQUEST_RED_CARD_LEADERS_FAIL });
  };
