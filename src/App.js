import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {Routes, Route} from "react-router";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <div className="container">
                <Header/>
                <main>
                    <div className="content-wrapper">
                        <Aside state={ props.appState.aside } />

                        <section className={"content-wrapper__block"}>
                            <h1 className='visually-hidden'>Page title</h1>
                            <Routes>
                                <Route path='/'
                                       element={<Profile
                                           state={ props.appState.profilePage } />
                                       }/>
                                <Route path='/dialogs/*'
                                       element={<Dialogs
                                           state={ props.appState.dialogsPage } />
                                       }/>
                                <Route path='/news/*' element={<News/>} />
                                <Route path='/music/*' element={<Music/>} />
                                <Route path='/settings/*' element={<Settings/>} />
                            </Routes>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
