// External Components 
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import axios from 'axios';



const LOCAL_STORAGE_KEY = "local_storage_posts"



// ------ MAIN COMPONENT ------  //

//CUSTOM HOOK
const usePosts = () => {
 
    // STATE-HOOK der Flaschen-Posts
    const [posts, setPosts] = useState();
    console.log("useStateHook - alle Flaschen-Posts: ", posts)


    // USE-EFFECT-HOOK --> laden des Arrays
    // Axios-Request Aufbau immer gleich:
        // 1. Objekt (config) definieren
        // 2. Code aus Postman kopieren (dort then + catch statt await + response)
        // 3. mit await die const (config) befüllen
        // 4. mit response.data die const an die Funktion zurückgeben 
    const loadPostsFromBackend = async () => {
        var config = {
            method: 'get',
            url: '/api/posts',
            headers: { }
        };          
        const response = await axios(config);
        console.log('useEffektHook - alle Flaschen-Posts aus DB:', response)
        return response.data;
    }

    // der Funktion einen Parameter definieren (post) 
    // diesen dem Objekt (data) als string übergeben --> axios kann nur strings 
    // wenn Objekt übergeben wird muss header angegeben werden
    const addPostToBackend = async (post, imageFile) => {
        var config = {
            method: 'post',
            url: '/api/post',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(post)
        };
        const response = await axios(config);
        console.log(response);
        changePostImageInBackend(imageFile, post.id);
        return response.data;
    }

    // POST IMAGE
    const changePostImageInBackend = async (imageFile, postId) => {
        var formData = new FormData();
        formData.append('file', imageFile);

        var config = {
            method: 'post',
            url: '/api/change-post-image?postId='+postId,
            headers: { 
              'Content-Type': 'multipart/form-data'
            },
            data : formData
          };
          const response = await axios(config);
          console.log(response);
    }





    
    // Hier wird der Parameter (postId) benötigt
    const deletePostFromBackend = async postId => {
        var config = {
            method: 'delete',
            url: '/api/delete-post?id='+postId,
            headers: { }
          };
        const response = await axios(config);
        return response.data;
    }

    // toggle star
    const toggleStarAtBackend = async postId => {
        var config = {
            method: 'put',
            url: '/api/toggle-post?id='+postId,
            headers: { }
          };
          const response = await axios(config);
          return response.data;
    }

    // edited post as url
    // const editPostAtBackend = async (postId, date, place, title, text) => {
    //     var config = {
    //         method: 'put',
    //         url: '/edit-post?id='+postId+'&date='+date+'&place='+place+'&title='+title+'&text='+text,
    //         headers: { }
    //         };
    //         const response = await axios(config);
    //         return response.data;
    // }


    // edited post as object
    const editPostAtBackend = async (postId, date, place, title, text) => {
        const editPostObject = {
            id: postId,
            place: place,
            title: title,
            text: text,
            date: date
        }
        var config = {
            method: 'put',
            url: '/edit-post',
            headers: { 
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(editPostObject)
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
            console.log('mein Post-useState: ', res)
            setPosts(res);
        })
    }, [] ); 



    // Funktionen definieren --> in Komponente aufrufen
    // Ein Objekt (post) als const definieren 
    // dieses wird per Setter-Funktion an den State angehangen
    // und per Funktion (addPostToBackend) an die DB übergeben
    
    // add post
    const addPost = (place, title, text, imageFile) => {
        const post = {
            id: uuidv4(),
            place: place,
            date: new Date(),
            title: title,
            text: text,
            edited: null,
            share: "",
            comments: "", 
            likes: "", 
            star: false
        }
        setPosts([...posts, post]);
        addPostToBackend(post, imageFile);
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
        toggleStarAtBackend(postId);
        console.log("Stern getoggled")
    }

    //edit post 
    const editPost = (postId, place, title, text) => {
        const heute = new Date();
        setPosts(
            posts.map( e => {
                if (e.id === postId) { 
                    e.edited = heute;
                    e.place = place;
                    e.title = title;
                    e.text = text;
                }
                return e 
            })
        );    
        editPostAtBackend(postId, heute, place, title, text);
        console.log("Flaschen-Post geändert am: " + heute.toLocaleDateString());
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

    // date --> Funktion für Datumsformat
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = mm + '/' + dd + '/' + yyyy;
    // document.write(today);


    return [posts, setPosts, addPost, toggleStar, editPost, deletePost]
}

export default usePosts;