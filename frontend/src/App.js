// My components 
import Start from "./components/Start";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Password from "./components/Password";
import Dashboard from "./components/Dashboard";
import Beaches from "./components/Beaches";
import Posts from "./components/Posts";
import Chats from "./components/Chats";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";




// External Components 
import './App.css';
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// ------ MAIN COMPONENT ------  //
function App() {
  return (

      <StyledAppWrapper>      
        <BrowserRouter>
          <Routes>

            <Route path="/" element={ <Start /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />

            <Route path="/profile" element={ <Profile /> } />
            <Route path="/password" element={ <Password /> } />

            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route path="/my-beach" element={ <Beaches /> } />
            <Route path="/bottle-posts" element={ <Posts /> } />
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