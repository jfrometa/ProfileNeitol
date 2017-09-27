import { combineReducers } from 'redux';
import PeopleReducer from './PeopleReducer';
import FacebookReducer from '../../publicProfile/reducers/FacebookReducer';

//combine all reducers docs. http://redux.js.org/docs/api/combineReducers.html
 export default combineReducers({
   person: PeopleReducer,
   facebook: FacebookReducer
 });
