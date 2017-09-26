import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../components/people/reducers';

//thunk allow us to write action creators that return a function instead of an action.
//https://github.com/gaearon/redux-thunk
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
    autoRehydrate()
  )
);

//https://github.com/rt2zz/redux-persist
persistStore(
  store,
  { storage: AsyncStorage,
  //whitelist array keys (read: reducers) to persist, if set all other keys will be ignored.
   whitelist: [
     'leadsInfo',
     'calendarInfo']
   }).purge();

export default store;
