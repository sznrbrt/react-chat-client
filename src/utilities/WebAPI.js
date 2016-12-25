import { remoteUrl } from '../constants/RemoteUrl'

let WebAPI = {
  getProfile() {
    console.log('WebAPI: /getProfile');
  },
  localLogin(data) {
    fetch(`http://${remoteUrl}/data/auth/local/login`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
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
      console.log(res);
    })
    .catch((err) => {
      console.error(JSON.stringify(err));
    })
  }
}
export default WebAPI;
