import axios from 'axios';
import {
  REQUEST_FB_POST,
  REQUEST_FB_POST_SUCCESS,
  REQUEST_FB_POST_FAIL,
  SELECTED_POST,
  REQUEST_FB_SPONSOR_SUCCESS
} from '../../types';

  export const requestFBPost = (pageId, limit) => {
    //redux-thunk calls the dispatch func to dispatch de action for our reducers
      return (dispatch) => {
      dispatch({ type: REQUEST_FB_POST });
      //documentation found in the link bellow
      //https://graph.facebook.com/v2.10/296124937084496posts?field=name,message,picture&access_token=116280978808946|myf0ZbJ9abfBaT_58H-lmUP384g
      axios.get(`https://graph.facebook.com/v2.10/${pageId}/posts?fields=created_time,from,message,permalink_url,full_picture,story,type,link&limit=${limit}&access_token=116280978808946|myf0ZbJ9abfBaT_58H-lmUP384g`)
      .then(response => {
      //  console.log(response.data);
        fbPostSuccess(dispatch, response.data.data);
      })
      .catch(error => fbPostFail(dispatch, error));
    };
  };

  const fbPostSuccess = (dispatch, post) => {
    dispatch({ type: REQUEST_FB_POST_SUCCESS, payload: post });
  };

  const fbPostFail = (dispatch, error) => {
    dispatch({ type: REQUEST_FB_POST_FAIL, error });
  };

  /////////////////////////////////////////////////////////////////////////////////

  export const requestFBSponsor = (pageId, limit) => {
    //redux-thunk calls the dispatch func to dispatch de action for our reducers
      return (dispatch) => {
      dispatch({ type: REQUEST_FB_POST });
      //https://graph.facebook.com/v2.10/296124937084496posts?field=name,message,picture&access_token=116280978808946|myf0ZbJ9abfBaT_58H-lmUP384g

      axios.get(`https://graph.facebook.com/v2.10/${pageId}/posts?fields=created_time,from,message,permalink_url,full_picture,story,type,link&limit=${limit}&access_token=116280978808946|myf0ZbJ9abfBaT_58H-lmUP384g`)
      .then(response => {
      //  console.log(response.data);
        fbSponsorPostSuccess(dispatch, response.data.data);
      })
      .catch(error => fbPostFail(dispatch, error));
    };
  };

  const fbSponsorPostSuccess = (dispatch, sponsor) => {
    dispatch({ type: REQUEST_FB_SPONSOR_SUCCESS, payload: sponsor });
    //actions from react-native-router-flux actions.key to call a scene
  };

/////////////////////////////////////////////////////////////////////////////////

    export const selectedPost = (tourId) => {
      return (dispatch) => {
        console.log('selected post', tourId);
        dispatch({ type: SELECTED_POST, payload: tourId });
      //  Actions.pop();
        // setTimeout(() => {
        //    Actions.refresh({ name: '' });
        // }, 10);
      };
    };
