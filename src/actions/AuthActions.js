import API from '../utilities/WebAPI';
import AuthStore from '../stores/AuthStore';

const AuthActions = {
  getAuthStatus() {
    return AuthStore.getAuthStatus();
  },
  register() {

  },
  login(data) {
    API.localLogin(data);
  },
  logout() {

  }
}

export default AuthActions;
