import login from '../modules/Login/reducers';
import singup from '../modules/singUp/reducers';

module.exports = {
  ...login,
  ...singup
};
