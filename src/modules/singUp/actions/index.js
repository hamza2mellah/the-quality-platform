import axios from 'axios';
let hostname='http://localhost:3000'; 
export function userSingupRequest(userData) {
  

  return dispatch => {
       return axios.post(hostname+'/api/auth/signup',userData)
  };
}
