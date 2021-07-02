import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_FAVORITE, DELETE_FAVORITE, SET_USER, UPDATE_USER, DELETE_USER } from '../actions/actions';

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

function favorite(state = [], action) {
  switch (action.type) {
    case SET_FAVORITE:
      console.log('SET_FAVORITE reducer reached');
    case DELETE_FAVORITE:
      console.log('DELETE_FAVORITE reducer reached')
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      console.log('SET_USER reducer reached');
    case UPDATE_USER:
      console.log('UPDATE_USER reducer reached');
    case DELETE_USER:
      console.log('DELETE_USER reducer reached')
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  favorite,
  user
});

export default moviesApp;