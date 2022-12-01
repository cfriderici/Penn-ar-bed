// External Components 
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';




// ------ MAIN COMPONENT ------  //

//CUSTOM HOOK
const usePosts = () => {
    const LOCAL_STORAGE_KEY = "local_storage_posts"
 
    // STATE-HOOK
    const [posts, setPosts] = useState();

    // EFFECT-HOOK --> laden des Arrays
    const loadPostsFromLocalStorage = () => {
        if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null)
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        else return [];
    } 

    // EFFECT-HOOK --> speichern eines neuen Elements
    const savePostsToLocalStorage = postArray => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(postArray));
    }

    // wenn bereits Daten in STATE vorhanden (nicht undefined) wird der USE damit befüllt ???
    useEffect( () => {
        if (posts) savePostsToLocalStorage(posts);
    }, [posts] );

    //Einmaliges Laden des STORAGE bei erstem Aufruf
    useEffect( () => {
        const storage = loadPostsFromLocalStorage();
        setPosts(storage);
    }, [] ); 



    // Post hinzufügen
    const addPost = (place, title, text) => {
        setPosts([
            {
                id: uuidv4(),
                place: place,
                date: new Date().toLocaleDateString(),
                title: title,
                text: text,
                edited: false,
                editingDate: "",
            },
            ...posts
        ])
    }

    //Post löschen
    const deletePost = id => {
        setPosts(posts.filter(e => e.id !== id))
    }

    return [posts, setPosts, addPost, deletePost]
}



export default usePosts;