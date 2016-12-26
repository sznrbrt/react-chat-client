import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../constants/ActionTypes";
import {EventEmitter} from "events";

let _isLoggedin = false;

class AuthStore extends EventEmitter {
  constructor(props) {
    super(props);
      AppDispatcher.register(action => {
          switch(action.actionType) {
            case ActionTypes.AUTHENTICATE:
                if(action.data._id) {
                  _isLoggedin = true;
                  localStorage.userid = action.data._id
                }
                this.emit("change");
                break;
            default:
              return;
          }
      })
    }

  getAuthStatus() {
    return _isLoggedin;
  }

  startListening(cb) {
    this.on('change', cb)
  }

  stopListening(cb) {
    this.removeListener('change', cb)
  }
}

export default new AuthStore();
