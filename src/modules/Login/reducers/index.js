import {
  GET_GREETING
} from '../actionTypes';

function login(state = [], action) {
  switch(action.type) {
    case GET_GREETING:
      return action.result.data.greetings;
    default:
      return state;
  }
}

module.exports = {
  login,
};
