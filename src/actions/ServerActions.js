import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../constants/ActionTypes";

let ServerActions = {
  authenticateUser(data) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.AUTHENTICATE,
      data
    })
  },
  logoutUser() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.LOGOUT
    })
  }
}

export default ServerActions
