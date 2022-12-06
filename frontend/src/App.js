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
import { useSocialAppContext } from "./providers/SocialAppContext";

// External Components 
import './App.css';
import { useEffect, useState } from "react";
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





// ------ MAIN COMPONENT ------  //
function App() {

  //useState definieren
  // const [posts, setPosts] = useState(postArray);

const { posts, setPosts, addPost, deletePost } = useSocialAppContext;

  const [users, setUsers] = useState(userArray);
  const [players, setPlayers] = useState(["a", "b", "c", "d", "e", "f"]);

  useEffect(() => {
    console.log(posts)
  }, [])

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