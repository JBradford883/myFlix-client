import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_USER, DELETE_USER } from '../actions/actions';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      console.log('SET_FILTER reducer reached')
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      console.log('SET_MOVIES reducer reached')
      return action.value;
    default:
      return state;
  }
}

function user(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.value;
    case DELETE_USER:
      console.log('DELETE_USER reducer reached')
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  user
});

export default moviesApp;