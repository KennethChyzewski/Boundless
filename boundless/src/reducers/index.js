import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import settingsReducer from "./settingsReducer";
import messageReducer from './messageReducer'


const rootReducer = combineReducers({
  loginReducer: loginReducer,
  settingsReducer: settingsReducer,
  messageReducer: messageReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
