import logo from "./logo.svg";
import "./App.css";

import Main from "./components/main/Main";
import Card from "./components/card/Card";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Header />
      <div className="cardContainer">
        <Card
          name="Rahul Sharma"
          bgColor="lightgreen"
          image="https://media.istockphoto.com/photos/creative-confidence-picture-id623274458?k=6&m=623274458&s=612x612&w=0&h=X-JkfEtgkdFWhaQ6tqTY89v3AV3WmKXNpUtHip-Q3Us="
        />

        <Card
          bgColor="lightblue"
          name="Aditya Verma"
          image="https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg"
        />

        <Card
          bgColor="lightcoral"
          name="Arjun Singh"
          image="https://th.bing.com/th/id/R.75e489bb751d9979851e30104bfc1fe2?rik=3vMvBlHR%2b427FQ&riu=http%3a%2f%2fmahmutinsaat.com%2fwp-content%2fuploads%2f2015%2f06%2fteam-big-1.jpg&ehk=dkhc8%2byURP%2fDwPiI1wR7PX8Vs%2fyOvLIyrxwUW%2fKovJA%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </div>
  );
}

export default App;
