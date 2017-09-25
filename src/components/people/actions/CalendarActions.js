import firebase from 'firebase';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import {
  REQUEST_TOURNAMENT_DIVISIONS,
  REQUEST_TOURNAMENT_DIVISIONS_SUCCESS,
  REQUEST_CALENDAR,
  REQUEST_CALENDAR_SUCCESS,
  REQUEST_DIVISIONS,
  REQUEST_DIVISIONS_SUCCESS,
  REQUEST_TOURNAMENT,
  REQUEST_TOURNAMENT_SUCCESS,
  SELECTED_TOURNAMENT,
  SELECTED_TOURNAMENT_NAME,
  SELECTED_DIVISION,
  SELECTED_DIVISION_NAME
} from '../../types';

  export const requestCalendar = (tournament, division) => {
    //redux-thunk calls the dispatch func to dispatch de action for our reducers
      return (dispatch) => {
      dispatch({ type: REQUEST_CALENDAR });
      firebase.database()
      .ref(`/Tournaments/${tournament}/${division}/calendar`)
      .on('value', snapshot => {
        calendarSuccess(dispatch, snapshot);
      });
    };
  };

  const calendarSuccess = (dispatch, calendar) => {
    dispatch({ type: REQUEST_CALENDAR_SUCCESS, payload: calendar.val() });
    //actions from react-native-router-flux actions.key to call a scene
  };
/////////////////////////////////////////////////////////////////////////////////


    export const requestTournament = () => {
        return (dispatch) => {
        dispatch({ type: REQUEST_TOURNAMENT });

        firebase.database()
        .ref('/Tournaments/available')
        .on('value', snapshot => {
          tournamentSuccess(dispatch, snapshot);
        });
      };
    };

    const tournamentSuccess = (dispatch, tournament) => {
      dispatch({ type: REQUEST_TOURNAMENT_SUCCESS, payload: tournament.val() });
    };

    export const selectedTournament = (tourId) => {
      return (dispatch) => {
        dispatch({ type: SELECTED_TOURNAMENT, payload: tourId });
      };
    };
    export const selectedTournamentName = (tourName) => {
      return (dispatch) => {
        dispatch({ type: SELECTED_TOURNAMENT_NAME, payload: tourName });
      };
    };

/////////////////////////////////////////////////////////////////////////////////

export const requestDivisions = (tournament) => {
    return (dispatch) => {
      dispatch({ type: REQUEST_DIVISIONS });

      firebase.database()
      .ref(`/Tournaments/${tournament}/divisions`)
      .on('value', snapshot => {
        divisionsSuccess(dispatch, snapshot);
      });
    };
 };

const divisionsSuccess = (dispatch, divisions) => {
    dispatch({ type: REQUEST_DIVISIONS_SUCCESS, payload: divisions.val() });
};

export const selectedDivision = (divId) => {
  return (dispatch) => {
    dispatch({ type: SELECTED_DIVISION, payload: divId });
  };
};

export const selectedDivisionName = (divName) => {
  return (dispatch) => {
    Actions.pop();
    dispatch({ type: SELECTED_DIVISION_NAME, payload: divName });
    // setTimeout(() => {
    //    Actions.refresh({ name: '' });
    // }, 10);
  };
};

/////////////////////////////////////////////////////////////////////////////////
//holds the combined array of tournmanets and divisions for a client
    this.tournamentAndDivs = [];

    export const requestTournamentsAndDivisions = () => {
        return (dispatch) => {
          dispatch({ type: REQUEST_TOURNAMENT_DIVISIONS });
          firebase.database()
          .ref('/Tournaments/available')
          .on('value', snapshot => {
          this.tournamentAndDivs = tournamentForDivisionsSuccess(
            dispatch, snapshot.val());
          });
        };
    };

    //variables yo store the default tournament and division
    let counter = 0;
    let firstTournamentAndDiv;

    const tournamentForDivisionsSuccess = (dispatch, tournament) => {
      const tournaments = _.map(tournament, (val, uid) => {
         return { ...val, uid };
       });

       Object.keys(tournaments).forEach(key => {
         requestDivisionsForTornaments(dispatch, tournaments[key].node);
       });

       return tournaments;
    };

     const requestDivisionsForTornaments = (dispatch, tournament) => {
          dispatch({ type: REQUEST_DIVISIONS });

          firebase.database()
          .ref(`/Tournaments/${tournament}/divisions`)
          .on('value', snapshot => {
            const divisions = _.map(snapshot.val(), (val, uid) => {
               return { ...val, uid };
             });

              //add the division to the propper tournmanent
              Object.keys(this.tournamentAndDivs).forEach(key => {
                if (_.includes(snapshot.ref.toString(), this.tournamentAndDivs[key].node)) {
                  //saves first tournament and division of that tournament to set as default
                  if (counter === 0) {
                    const divisionsArr = Object.values(divisions);

                    this.firstTournamentAndDiv = {
                      tournament: this.tournamentAndDivs[key].node,
                      tournamentName: this.tournamentAndDivs[key].name,
                      division: divisionsArr[0].node,
                      divisionName: divisionsArr[0].name
                    };
                  }
                  counter++;
                   this.tournamentAndDivs[key].divisions = divisions;
                }
              });
                  tournamentForCompleteSuccess(dispatch);
          });
        };

    const tournamentForCompleteSuccess = (dispatch) => {
      if (counter <= 1) {
      dispatch({ type: SELECTED_TOURNAMENT, payload: this.firstTournamentAndDiv.tournament });
      dispatch({ type: SELECTED_DIVISION, payload: this.firstTournamentAndDiv.division });
      dispatch({ type: SELECTED_TOURNAMENT_NAME, payload: this.firstTournamentAndDiv.tournamentName });
      dispatch({ type: SELECTED_DIVISION_NAME, payload: this.firstTournamentAndDiv.divisionName });
      }
    dispatch({ type: REQUEST_TOURNAMENT_DIVISIONS_SUCCESS, payload: this.tournamentAndDivs });
    };
