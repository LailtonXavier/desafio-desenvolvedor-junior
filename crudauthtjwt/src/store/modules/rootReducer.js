import { combineReducers } from 'redux';
// ele vai combinar varios reducers

import auth from './auth/reducer';

export default combineReducers({
  auth,
});
