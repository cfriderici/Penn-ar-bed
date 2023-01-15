// My components 
import Start from "./components/Start";
import Login from "./components/Login";
import NewLogin from "./components/NewLogin";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Beaches from "./components/Beaches";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
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




// Arrays
// const userArray = [
//   {
//     id: uuidv4(),
//     name: "Christina",
//     mail: "christina@friderici.net",
//     passwort: "geheim"
//   }
  // {
  //   id: uuidv4(),
  //   name: "Tom",
  //   mail: "tom@mot.de"
  // },
// ]





// ------ MAIN COMPONENT ------  //
function App() {

  //useState definieren
  // const [posts, setPosts] = useState(postArray);

const { posts, setPosts, addPost, deletePost, user, setUser } = useSocialAppContext();

  console.log("App.js User:", user );

  // const [user, setUsers] = useState(userArray);
  // const [players, setPlayers] = useState(["a", "b", "c", "d", "e", "f"]);

  // useEffect(() => {
  //   console.log(posts)
  // }, [])

  return (
    <StyledAppWrapper>      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={user ? <Dashboard /> : < Start /> } />

          <Route path="/login" element={user ? <Dashboard /> : <Login /> } />
          <Route path="/register" element={user ? <Dashboard /> : <Register /> } />

          <Route path="/profile" element={user ? <Profile /> : <Start /> } />
          <Route path="/password" element={ <NewLogin /> } />

          <Route path="/dashboard" element={user ? <Dashboard /> : <Start /> } />
          <Route path="/my-beach" element={user ? <Beaches /> : <Start /> } />

          <Route path="/bottle-posts" element={user ? <Posts posts={posts} setPosts={setPosts} /> : <Start /> } />
          <Route path="/create-bottle-post" element={user ? <AddPost posts={posts} setPosts={setPosts} /> : <Start /> } />
          <Route path="/edit-bottle-post/:id" element={user ? <EditPost posts={posts} setPosts={setPosts} /> : <Start /> } />
          
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