import login from '../modules/Login/actions';
import singUp from '../modules/singUp/actions';

module.exports = {
  ...login,
  ...singUp
};
