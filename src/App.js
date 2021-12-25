import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {Routes, Route} from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import AsideContainer from "./components/Aside/AsideContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <div className="container">
                <Header/>
                <main>
                    <div className="content-wrapper">
                        <AsideContainer />

                        <section className={"content-wrapper__block"}>
                            <h1 className='visually-hidden'>Page title</h1>
                            <Routes>
                                <Route path='/'
                                       element={<Profile />} />
                                <Route path='/dialogs/*'
                                       element={<DialogsContainer />} />
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
