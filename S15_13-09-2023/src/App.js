import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import State from "./components/state/State";
import Counter from "./components/counter/Counter";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import Form from "./components/form/Form";
import ReactComp from "./components/redux/ReactComp";
import Data from "./components/redux/Data";
function App() {
  return (
    <div className="App">
      <ReactComp />
      <Data />
      {/* <Form /> */}
      {/* <Register /> */}
      {/* <Profile />
      <Profile />
      <Profile /> */}
      {/* <Counter /> */}
      {/* <State /> */}
      {/* <Header />
      <Main /> */}
    </div>
  );
}

export default App;
