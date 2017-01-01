import API from '../utilities/WebAPI';

const UserActions = {
  getProfile() {
    API.getProfile();
  },
  register(data, cb) {
    API.localRegister(data, cb);
  },
  login(data, cb) {
    API.localLogin(data, cb);
  },
  logout() {
    API.localLogout();
  }
}

export default UserActions;
