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

import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="container">
                    <Header/>
                    <main>
                        <div className="content-wrapper">
                            <Aside/>

                            <section className={"content-wrapper__block"}>
                                <Routes>
                                    <Route path='/profile' element={<Profile />} />
                                    <Route path='/dialogs' element={<Dialogs />} />
                                    <Route path='/news' element={<News />} />
                                    <Route path='/music' element={<Music />} />
                                    <Route path='/settings' element={<Settings />} />
                                </Routes>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
