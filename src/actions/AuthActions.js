import API from '../utilities/WebAPI';
// import AuthStore from '../stores/AuthStore';

const AuthActions = {
  getAuthStatus(cb) {
    cb(!!localStorage.userid);
  }
}

export default AuthActions;
