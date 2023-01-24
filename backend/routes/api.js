const express = require('express');

// npm packages --> sicheres Registrieren (PW-Verschlüsselung)
const dotenv = require('dotenv');  
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// npm packages --> Bilder in Blob-Storage speichern
// zwei weitere packeges (cloudinary + util) in Helper-Dateien in modules erstellt
const multer = require('multer');
const fs = require('fs');

// My modules
const asyncSaveFile = require('../modules/helperFunctions')
const uploadImage = require('../modules/cloudinary');

// My models
const Bottlepost = require('../models/Post.model');
const User = require('../models/User.model');




// Standardconfig für die .env
// ließt die .env, wo der jwt-key definiert ist 
dotenv.config();
const JWT_KEY = process.env.EXPRESS_APP_JWT_KEY;
console.log(JWT_KEY);

// Upload für die Bilder definieren
var upload = multer();




// Router-Object definieren
const router = express.Router();

// Middleware 
// wird von Router-Objekt aufgerufen
router.use((req, res, next) => {
    console.log("eine /api wird aufgerufen");
    next();
});




// ---------- ROUTEN ---------- //

// ----- USERS ----- //

// USERS
router.get('/api/users', async (req, res) => {
    const response = await User.find();
    res.status(200).send(response)
});

// REGISTER USER
router.post('/api/register', async (req, res) => {
// console.log(req.body)
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await User.create({
            id: req.body.id,
            email: req.body.email,
            name: req.body.name,
            password: encryptedPassword,
        });
        res.status(200).send({ status: 'user created 70' });
    } catch (error) {
        // console.log(error)
        res.status(400).send({ status: 'user already exits' });
    }
})

// LOGIN USER
router.post('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log("api.js 122 user: ", user);    
    
    if (!user) {
        res.status(401).send({ status: 'error', error: 'invalid login' });  
        return;
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    );
    // console.log("isPasswordValid: ", isPasswordValid); 

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
                avatarImageLink: user.avatarImageLink,
                registerDaten: user.registerDate,
                numberOfPosts: user.numberOfPosts,
                numberOfLikes: user.numberOfLikes,
                numberOfFriends: user.numberOfFriends
            },
            JWT_KEY
        )
        res.status(200).send({ status: 'ok', access: token });   
        console.log("Password valid - token 108: ", token);  //
        return;
        
    } else {
        res.status(401).send({ status: 'error', access: false });
        console.log("Password not valid - token: ", token);  //
        return;
    }
});


// AVATAR
// Bei Bildern muss die Middleware (Multer) als zweites Argument in die Route gepackt werden
// Multer greift auf das FormData-Objekt aus Profile.js zu
// asyncSaveFile-Funktion speicher Datei im Backen-Order zwischen (irgendein Zauber von Sebastian ...)
// cloudinaryURL verschiebt das Bild von dem Zwischenspeicher nach Cloudinary
router.post('/api/change-avatar-image', upload.single('file'), async (req, res) => {
    const saveFileResult = await asyncSaveFile(req.file.originalname, req.file.buffer);
    const cloudinaryURL  = await uploadImage(req.file.originalname); 
    
    // console.log("api.js 167 saveFileResult: ", req.file);
    // console.log("api.js 168 cloudinaryURL : ", cloudinaryURL );
    // console.log("api.js 169 userId: ", req.query.userId);

    // was macht es?
    fs.unlink(req.file.originalname, () => {});

    const user = await User.findOne({ id: req. query.userId });
    user.avatarImageLink = cloudinaryURL ;
    const response = await User.updateOne({ id: req.query.userId }, user);

    res.status(200).send("OK");
})




// ----- BOTTLE-POSTS ----- //

// ALL POSTS 
router.get('/api/posts', async (req, res) => {
    const response = await Bottlepost.find();
    res.status(200).send(response)
});
  
// CREATE POST
router.post('/api/post', async (req, res) => {
const bottlepost = req.body;
const response = await Bottlepost.create(bottlepost);
res.status(200).send(response)
});

// POST IMAGE
router.post('/api/change-post-image', upload.single('file'), async (req, res) => {
    const saveFileResult = await asyncSaveFile(req.file.originalname, req.file.buffer);
    const cloudinaryURL  = await uploadImage(req.file.originalname); 
    
    // console.log("api.js 167 saveFileResult: ", req.file);
    // console.log("api.js 168 cloudinaryURL : ", cloudinaryURL );
    // console.log("api.js 169 userId: ", req.query.userId);

    fs.unlink(req.file.originalname, () => {});

    const post = await Bottlepost.findOne({ id: req.query.postId });
    post.postImageLink = cloudinaryURL ;
    const response = await Bottlepost.updateOne({ id: req.query.postId }, post);

    res.status(200).send("OK");
})

  
// UPDATE POST
router.put('/api/toggle-post', async (req, res) => {
    const postId = req.query.id;
    const post = await Bottlepost.findOne({ id: postId })
    post.star = !post.star;
    const response = await Bottlepost.updateOne({ id: postId}, post);
    res.status(200).send("Star getoggled")
});
   
// UPDATE POST via object
router.put('/api/edit-post', async (req, res) => {
    const postId = req.body.id;
    const postEdited = req.body.date;
    const post = await Bottlepost.findOne({ id: postId })
    post.edited = postEdited;
    post.place = req.body.place;
    post.title = req.body.title;
    post.text = req.body.text;
    const response = await Bottlepost.updateOne({ id: postId}, post);
    res.status(200).send("Post geändert")
});
    
// DELETE POST
router.delete('/api/delete-post', async (req, res) => {
    const postId = req.query.id;
    const response = await Bottlepost.deleteOne({ id: postId});
    res.status(200).send("Post gelöscht")
});

module.exports = router;