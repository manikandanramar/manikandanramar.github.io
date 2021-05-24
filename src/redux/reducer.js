import { combineReducers } from 'redux';
// import reducers here
import profile from './modules/profile'
import location from './modules/location';
import youtube from './modules/youtube';

export default combineReducers({
  // combine reducers here, which are imported
  profile,
  location,
  youtube
});