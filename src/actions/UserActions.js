import API from '../utilities/WebAPI';

const UserActions = {
  getProfile() {
    API.getProfile();
  },
  register() {

  },
  login(data) {
    API.localLogin(data);
  },
  logout() {

  }
}

export default UserActions;
