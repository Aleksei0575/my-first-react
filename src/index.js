import state, {listener} from "./redax/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewMessageText, updateNewPostText} from "./redax/state";
import { addMessage } from "./redax/state";

import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={ state } addPost={ addPost } addMessage={ addMessage }
                     updateNewPostText={ updateNewPostText } updateNewMessageText={updateNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);
listener(rerenderEntireTree);


reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
