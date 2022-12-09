// External Components 
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

import axios from 'axios';


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
        comments: [
            {
                id: uuidv4(),
                count: 1,
                comment: "aaaaawesome !!!",
                userId: 222,
                userName: "Jill"
            }
        ], 
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

//CUSTOM HOOK
const usePosts = () => {
    const LOCAL_STORAGE_KEY = "local_storage_posts"
 
    // STATE-HOOK
    const [posts, setPosts] = useState(postArray);

    // USE-EFFECT-HOOK --> laden des Arrays
    const loadPostsFromBackend = async () => {
        var config = {
            method: 'get',
            url: '/posts',
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
            setPosts(res);
        })
    }, [] ); 




    // Funktion definieren --> per return übergeben --> in Komponente aufrufen
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

    const toggleStar = (postId) => {
        setPosts(
            posts.map( e => {
                if (e.id === postId)
                e.star = !e.star;
                return e
            })
        );
        console.log("Stern getoggled")
    }

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

    const deletePost = (postId) => {
        let text = "Der Flaschen-Post dümpelt vergnügt vor dir hin und her.\nWillst du ihn wirklich aus dem Wasser fischen?";
        if (window.confirm(text) === true) {
            setPosts(posts.filter(e => e.id !== postId ))
        }    
        console.log("diesen Post gelöscht: " + postId)
    }




    return [posts, setPosts, addPost, toggleStar, editPost, deletePost]
}

export default usePosts;