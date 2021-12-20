import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    aside: asideReducer
});

let store = createStore(reducers);

export default store;
