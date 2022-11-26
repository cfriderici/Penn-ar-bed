// My components 
import Start from "./components/Start";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Password from "./components/Password";
import Dashboard from "./components/Dashboard";
import Beaches from "./components/Beaches";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Chats from "./components/Chats";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";

// My Context
import { SocialAppContextProvider } from "./providers/SocialAppContext";

// External Components 
import './App.css';
import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// import ImageUploader from 'react-image-upload'
// import 'react-image-upload/dist/index.css'


// Arrays
const userArray = [
  {
    id: uuidv4(),
    name: "Christina",
    mail: "christina@friderici.net",
    passwort: "geheim"
  }
  // {
  //   id: uuidv4(),
  //   name: "Tom",
  //   mail: "tom@mot.de"
  // },
]

const postArray = [
  {
    id: uuidv4(),
    // userId: 111, 
    // image: "",
    // profileImage: "",
    // userName: "Christina",
    place: "Baie des Trépassés",
    date: "10.09.2020",
    title: "Dies ist ein Typoblindtext",
    text: "An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen. Manchmal Sätze, die alle Buchstaben des Alphabets enthalten - man nennt diese Sätze »Pangrams«. Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog.",
    edited: false,
    editingDate: "",
    // comments: [
    //   {
    //     id: uuidv4(),
    //     count: 1,
    //     comment: "aaaaawesome !!!",
    //     userId: 222,
    //     userName: "Jill"
    //   },
    //   {
    //     id: uuidv4(),
    //     count: 2,
    //     comment: "Danke für den Tip :)",
    //     userId: 444,
    //     userName: "Manuel"
    //   }
    // ],
    // likes: [
    //   {
    //     id: uuidv4(),
    //     count: 1,
    //     userId: 222,
    //     userName: "Jill"
    //   }
    // ],
    star: false
  }
  // {
  //   id: uuidv4(),
  //   userId: 456,
  //   image: "",
  //   profileImage: "",
  //   userName: "Tom",
  //   place: "Pors Theolen",
  //   date: "05.07.2021",
  //   title: "Er hörte leise Schritte hinter sich",
  //   text: "Das bedeutete nichts Gutes. Wer würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen Gasse mitten im übel beleumundeten Hafenviertel? Gerade jetzt, wo er das Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte! Hatte einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um die Früchte seiner Arbeit zu erleichtern? Oder gehörten die Schritte hinter ihm zu einem der unzähligen Gesetzeshüter dieser Stadt, und die stählerne Acht um seine Handgelenke würde gleich zuschnappen?",
  //   edited: false,
  //   editingDate: ""
  //   comments: [],
  //   likes: [
  //     {
  //       id: uuidv4(),
  //       count: 1,
  //       userId: 777,
  //       userName: "Paul"  
  //     },
  //     {
  //       id: uuidv4(),
  //       count: 2,
  //       userId: 999,
  //       userName: "Tom"  
  //     }
  //   ],
  //   star: false
  // }
]



// ------ MAIN COMPONENT ------  //
function App() {

  //useState definieren
  const [posts, setPosts] = useState(postArray);
  const [users, setUsers] = useState(userArray);
  const [players, setPlayers] = useState(["a", "b", "c", "d", "e", "f"]);



  return (
    <StyledAppWrapper>      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <Start /> } />
          <Route path="/login" element={ <Login users={users} setUsers={setUsers} /> } />
          <Route path="/register" element={ <Register users={users} setUsers={setUsers} /> } />

          <Route path="/profile" element={ <Profile users={users} setUsers={setUsers} /> } />
          <Route path="/password" element={ <Password /> } />

          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/my-beach" element={ <Beaches /> } />
          <Route path="/bottle-posts" element={ <Posts posts={posts} setPosts={setPosts} players={players} setPlayers={setPlayers} /> } />
          <Route path="/create-bottle-posts" element={ <AddPost posts={posts} setPosts={setPosts} /> } />
          {/* hier route edit post --> adpost kopieren */}
          <Route path="/chats" element={ <Chats /> } />
          <Route path="/events" element={ <Events /> } />
          <Route path="/impressum" element={ <Impressum /> } />

          <Route path="/test" element={ <div>Test-Route</div> } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </StyledAppWrapper>
  );
}

export default App;



// ------ STYLED COMPONENTS ------  //
const StyledAppWrapper = styled.div `
    background-color: rgba(250, 250, 0, 0.2);
    /* height: 100vh; */
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
`