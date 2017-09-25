import { combineReducers } from 'redux';
import CalendarReducer from './CalendarReducer';
import LeadersReducer from './LeadersReducer';

 export default combineReducers({
   calendarInfo: CalendarReducer,
   leadsInfo: LeadersReducer,
 });
