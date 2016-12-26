import API from '../utilities/WebAPI';
// import AuthStore from '../stores/AuthStore';

const AuthActions = {
  getAuthStatusFromLocalStorage(cb) {
    try {
      let user = JSON.parse(localStorage.user);
      cb(user);
    } catch(err) {
      cb(false)
    }
  }
}

export default AuthActions;
