import { combineReducers } from 'redux';
// import reducers here
import profile from './modules/profile'
import location from './modules/location';

export default combineReducers({
  // combine reducers here, which are imported
  profile,
  location
});