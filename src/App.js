// import logo from "./logo.svg";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Profile from "./components/Profile";

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
