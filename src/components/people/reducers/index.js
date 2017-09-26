import { combineReducers } from 'redux';
import FacebookReducer from './FacebookReducer';
import PeopleReducer from './PeopleReducer';

//combine all reducers docs. http://redux.js.org/docs/api/combineReducers.html
 export default combineReducers({
   facebook: FacebookReducer,
   person: PeopleReducer,
 });
