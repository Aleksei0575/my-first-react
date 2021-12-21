import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({ // Комбайним наши редьюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    aside: asideReducer
});

let store = createStore(reducers); // создаем redux-овский store

export default store;
