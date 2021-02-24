const SET_LOCATION = 'location/SET_LOCATION';

// initial state goes here
const initialState = {
  hash: '',
  pathname: '',
  search: ''
};

// reducers go here
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOCATION:
    return {
      ...state,
      ...action.location
    };
    default:
      return state;
  }
}

export function setLocation({ pathname, search, hash }) {
  return {
    type: SET_LOCATION,
    location: { pathname, search, hash }
  }
}
