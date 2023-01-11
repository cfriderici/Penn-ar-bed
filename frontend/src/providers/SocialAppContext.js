// My components 
import usePosts from '../hooks/usePosts';
// import useAuth from '../hooks/useAuth';


// External Components 
import { createContext, useContext } from "react";


//CONTEXT erstellen
const SocialAppContext = createContext();


//HOOK-FUNCTION (das ist der CUSTOM-HOOK)
const useSocialAppContext = () => useContext (SocialAppContext)


//CONTEXT-PROVIDER schreiben
//CUSTOM-HOOCK deklarieren --> alle props für die Komponenten 
const SocialAppContextProvider = ({ children }) => {
    const [ posts, setPosts, addPost, toggleStar, editPost, deletePost ] = usePosts();
    // const [ user, setUser ] = useAuth();

    return (
        <SocialAppContext.Provider 
            value={
                {
                    posts, setPosts, addPost, toggleStar, editPost, deletePost,
                    // user, setUser
                }
            } 
        >
            {children}
        </SocialAppContext.Provider>
    )
}

export { SocialAppContextProvider, useSocialAppContext }