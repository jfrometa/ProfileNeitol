import { REHYDRATE } from 'redux-persist/constants';
import {
  REQUEST_TOURNAMENT_SUCCESS,
  REQUEST_TOURNAMENT,
  SELECTED_TOURNAMENT,
  SELECTED_TOURNAMENT_NAME,
  REQUEST_CALENDAR,
  REQUEST_CALENDAR_SUCCESS,
  REQUEST_CALENDAR_FAIL,
  REQUEST_DIVISIONS,
  REQUEST_DIVISIONS_SUCCESS,
  REQUEST_TOURNAMENT_DIVISIONS,
  REQUEST_TOURNAMENT_DIVISIONS_SUCCESS,
  SELECTED_DIVISION,
  SELECTED_DIVISION_NAME } from '../../types';

  //all states this reducer contains.
  const INITIAL_STATE = {
    tournaments: null,
    calendar: null,
    divisions: null,
    error: '',
    loading: false,
    tournament: 'tournamentKey',
    division: 'divisionKey',
    tournamentName: 'torneo',
    divisionName: 'division',
    isModalOpen: false,
    tourAndDiv: null
   };

   export default (state = INITIAL_STATE, action) => {
    // console.log(action.type);
     switch (action.type) {

       case REHYDRATE:
       return action.payload.calendarInfo || [];

       case REQUEST_TOURNAMENT:
       return { ...state, loading: true, error: '' };

       //...INITIAL_STATE takes all the defaults and calendar: overrides the initial value
       case REQUEST_TOURNAMENT_SUCCESS:
       return { ...state, loading: false, tournaments: action.payload };

       case SELECTED_TOURNAMENT:
       return { ...state, tournament: action.payload };

       case SELECTED_TOURNAMENT_NAME:
       return { ...state, tournamentName: action.payload };

       case REQUEST_DIVISIONS:
       return { ...state, loading: true, error: '' };

       //...INITIAL_STATE takes all the defaults and calendar: overrides the initial value
       case REQUEST_DIVISIONS_SUCCESS:
       //[action.payload.prop]: action.payload.value
       return { ...state, loading: false, divisions: action.payload };

       case SELECTED_DIVISION:
       return { ...state, division: action.payload };

       case SELECTED_DIVISION_NAME:
       return { ...state, divisionName: action.payload };

       case REQUEST_TOURNAMENT_DIVISIONS :
       return { ...state, loading: true };

       case REQUEST_TOURNAMENT_DIVISIONS_SUCCESS :
       return { ...state, loading: false, tourAndDiv: action.payload };

       //controlls any action i want to perform before starting to Fetch de Calendar
       case REQUEST_CALENDAR:
       return { ...state, loading: true, error: '' };

       case REQUEST_CALENDAR_SUCCESS:
       return { ...state, loading: false, calendar: action.payload };

       case REQUEST_CALENDAR_FAIL:
       return { ...state,
         error: 'Failed to Fetch Calendar',
         loading: false };

       default:
       return state;
     }
   };
