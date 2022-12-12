// External Components 
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

import axios from 'axios';


const LOCAL_STORAGE_KEY = "local_storage_posts"


// ------ MAIN COMPONENT ------  //

//CUSTOM HOOK
const usePosts = () => {
 
    // STATE-HOOK
    const [posts, setPosts] = useState();


    // USE-EFFECT-HOOK --> laden des Arrays
    // Axios-Request Aufbau immer gleich:
        // 1. Objekt (config) definieren
        // 2. Code aus Postman kopieren (dort then + catch statt await + response)
        // 3. mit await die const (config) befüllen
        // 4. mit response.data die const an die Funktion zurückgeben 
    const loadPostsFromBackend = async () => {
        var config = {
            method: 'get',
            url: '/posts',
            headers: { }
        };          
        const response = await axios(config);
        console.log(response)
        return response.data;
    }

    // der Funktion einen Parameter definieren (post) 
    // diesen dem Objekt (data) als string übergeben --> axios kann nur strings 
    // wenn Objekt übergeben wird muss header angegeben werden
    const addPostToBackend = async post => {
        var config = {
        method: 'post',
        url: '/post',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : JSON.stringify(post)
        };
        const response = await axios(config);
        return response.data;
    }
    
    // Hier wird der Parameter (postId) benötigt
    const deletePostFromBackend = async postId => {
        var config = {
            method: 'delete',
            url: '/delete-post?id='+postId,
            headers: { }
          };
        const response = await axios(config);
        return response.data;
    }

    //
    const toggleStarAtBackend = async postId => {
        var config = {
            method: 'put',
            url: '/toggle-post?id='+postId,
            headers: { }
          };
          const response = await axios(config);
          return response.data;
    }



    // EFFECT-HOOK --> speichern eines neuen Elements im LocalStorage
    const savePostsToLocalStorage = postArray => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(postArray));
    }

    // USE-EFFECT wenn bereits Daten in STATE vorhanden (nicht undefined) wird der USE damit befüllt ???
    useEffect( () => {
        if (posts) savePostsToLocalStorage(posts);
    }, [posts] );

    // USE-EFFECT Einmaliges Laden des STATES bei erstem Aufruf der App
    // async-Funktion hier mit then benutzen
    useEffect( () => {
        loadPostsFromBackend().then(res => {
            console.log(res)
            setPosts(res);
        })
    }, [] ); 



    // Funktionen definieren --> in Komponente aufrufen
    // Ein Objekt (post) als const definieren 
    // dieses wird per Setter-Funktion an den State angehangen
    // und per Funktion (addPostToBackend) an die DB übergeben
    
    // add post
    const addPost = (place, title, text) => {
        const post = {
            id: uuidv4(),
            place: place,
            date: new Date().toLocaleDateString(),
            title: title,
            text: text,
            edited: false,
            editingDate: "",
            share: "",
            comments: "", 
            likes: "", 
            star: false
        }
        setPosts([...posts]);
        addPostToBackend(post);
    }

    // toggle star
    const toggleStar = (postId) => {
        setPosts(
            posts.map( e => {
                if (e.id === postId)
                e.star = !e.star;
                return e
            })
        );
        toggleStarAtBackend(postId)
        console.log("Stern getoggled")
    }

    //edit post
    const editPost = (postId) => {
        const heute = new Date();
        setPosts(
            posts.map( e => {
                    if (e.id === postId) 
                    e.edited = !e.edited; 
                    e.editingDate = heute.toLocaleDateString();
                return e 
                })
        );        
        console.log("Flaschen-Post geändert am: " + heute.toLocaleDateString())
    }

    // delete post
    const deletePost = (postId) => {
        let text = "Der Flaschen-Post dümpelt vergnügt vor dir hin und her.\nWillst du ihn wirklich aus dem Wasser fischen?";
        if (window.confirm(text) === true) {
            setPosts(posts.filter(e => e.id !== postId ));
            deletePostFromBackend(postId)
        }    
        console.log("diesen Post gelöscht: " + postId)
    }

    return [posts, setPosts, addPost, toggleStar, editPost, deletePost]
}

export default usePosts;