import { remoteUrl } from '../constants/RemoteUrl';
import ServerActions from '../actions/ServerActions';

let WebAPI = {
  getProfile() {
    fetch(`http://${remoteUrl}/data/user/profile/`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if(res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        throw new Error({
          badCredentials: res.status === 401,
          unknowError: res.status !== 401
        })
      }
    })
    .then((res) => {
      console.log('Profile', res);
    })
    .catch((err) => {
      console.error(JSON.stringify(err));
    })
  },
  localLogin(data) {
    fetch(`http://${remoteUrl}/data/auth/local/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    .then((res) => {
      if(res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        throw new Error({
          badCredentials: res.status === 401,
          unknowError: res.status !== 401
        })
      }
    })
    .then((res) => {
      ServerActions.authenticateUser(res);
    })
    .catch((err) => {
      console.error(JSON.stringify(err));
    })
  }
}
export default WebAPI;
