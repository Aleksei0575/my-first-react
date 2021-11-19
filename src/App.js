// import logo from "./logo.svg";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <main>
          <div className="content-wrapper">
            <Aside />

            <Profile />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
