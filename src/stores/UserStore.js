import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../constants/ActionTypes";
import {EventEmitter} from "events";

let _user = {};

class UserStore extends EventEmitter {
  constructor(props) {
    super(props);
      AppDispatcher.register(action => {
          switch(action.actionType) {
            case ActionTypes.RECEIVE_PROFILE:
                _user = action.profileData;
                this.emit("change");
                break;
            default:
              break;
          }
      })
    }

  getUser() {
    return _user;
  }

  startListening(cb) {
    this.on('change', cb)
  }

  stopListening(cb) {
    this.removeListener('change', cb)
  }
}

export default new UserStore();
