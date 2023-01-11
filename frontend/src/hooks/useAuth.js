// // External Components 
// import { useState, useEffect } from 'react';
// import jwt_decode from "jwt-decode";

// const useAuth = () => {

//     const LOCAL_STORAGE_KEY = "token";

//     const [user, setUser] = useState();
//     const [token, setToken] = useState();
//     // const [userData, setUserData] = useState();

//     // Erstes Rendern der App ruft den Custom Hook aus
//     useEffect(() => {
//         const ls = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//         try {
//             var decodedJwt = jwt_decode(ls.access);
//             console.log("decodedJwt: ", decodedJwt);

//             setUser(decodedJwt.email);
//             setToken(ls.access);
//             // setUserData(decodedJwt);
//         } catch (error) {
//             console.log(error);
//         }
//     }, [])

// }

// export default useAuth;