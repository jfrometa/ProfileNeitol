import firebase from 'firebase';
import {
  REQUEST_PERSONAL_INFO,
  REQUEST_PERSONAL_INFO_SUCCESS
} from '../../types';

export const requestPersonalInfo = () => {
//redux-thunk calls the dispatch func to send de action to our reducers
   return (dispatch) => {
   dispatch({ type: REQUEST_PERSONAL_INFO });

   firebase.database()
   .ref('/Informacion_personal')
   .on('value', snapshot => {
     console.log(snapshot);
     requestPersonalInfoSuccess(dispatch, snapshot);
    });
  };
};
  const requestPersonalInfoSuccess = (dispatch, personalInfo) => {
    dispatch({ type: REQUEST_PERSONAL_INFO_SUCCESS, payload: personalInfo.val() });
};
