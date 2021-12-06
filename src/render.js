import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewMessageText, updateNewPostText} from "./redax/state";
import { addMessage } from "./redax/state";

import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree = (state) => {
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

reportWebVitals();
