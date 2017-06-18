import axios from 'axios';
let hostname='http://localhost:3000'; 
export function userLoginRequest(userData) {
  

  return dispatch => {
       return axios.post(hostname+'/api/auth/singin',userData)
  };
}
