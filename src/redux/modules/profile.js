import endpoints from '../../config/api';

// action types go here
const GET_PROFILE_DATA = 'profile/GET_PROFILE_DATA';
const GET_REPOS = 'profile/GET_REPOS';
const GET_REPOS_SUCCESS = 'profile/GET_REPOS_SUCCESS';
const GET_REPOS_FAIL = 'profile/GET_REPOS_FAIL';

// initial state goes here
const initialState = {
  gotData: false,
};

// reducers go here
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
        gotData: true,
      };
    case GET_REPOS:
      return {
        ...state,
        calling: 'started',
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.result,
        calling: 'success',
      };
    case GET_REPOS_FAIL:
      return {
        ...state,
        calling: 'failed',
        error: action.error
      };
    default:
      return state;
  }
}

//  actions go here
export function getProfileData() {
  return {
    type: GET_PROFILE_DATA,
  };
}

export function getRepos() {
  return {
    types: [GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAIL],
    promise: fetch => fetch.get(endpoints.repoUrl),
  }
}
