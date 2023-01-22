const express = require('express');

// sicheres Registrieren  (PW-Verschlüsselung)
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');  

// Bilder
const multer = require('multer');
const cloudinary = require('cloudinary');
const { promisify } = require('util');
const fs = require('fs');


// My Schemas
const Bottlepost = require('../models/Post.model');
const User = require('../models/User.model');




// Cloudinary -----
// später in eigene datei auslager --> modules/cloudinary.js
cloudinary.config({ 
    cloud_name: 'dmlnmekpj', 
    api_key: '584252897641337', 
    api_secret: '5eWEFop4zvFTNzmVfv18z0uxp6Y',
    secure: true
  });

  const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
    //   console.log(result);
      return result.url;
    } catch (error) {
      console.error(error);
    }
};
// helper function sebastion
const writeFilePromise = promisify(fs.writeFile);
const asyncSaveFile = async (fileName, fileBuffer) => {
	try {
		await writeFilePromise(fileName, fileBuffer);
		return "file successfully written";
	} catch (error) {
		return error;
	};
};
// ----- Cloudinary




// Standardconfig für die .env
dotenv.config();

// Upload für die Bilder definieren
var upload = multer();

// ließt die .env wo der jwt-key definiert ist 
const JWT_KEY = process.env.EXPRESS_APP_JWT_KEY;

console.log(JWT_KEY);

// Router-Object > definieren
const router = express.Router();




// ----- Middleware ----- //
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
        res.status(200).send({ status: 'user created' });
    } catch (error) {
        // console.log(error)
        res.status(400).send({ status: 'user already exits' });
    }
})

// LOGIN USER
router.post('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log("user: ", user);    //
    
    if (!user) {
        res.status(401).send({ status: 'error', error: 'invalid login' });  
        return;
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    );
    console.log("isPasswordValid: ", isPasswordValid);  //

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
                avatarImageLink: user.avatarImageLink
            },
            JWT_KEY
        )
        res.status(200).send({ status: 'ok', access: token });   
        console.log("Password valid - token: ", token);  //
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
// uploadResult verschiebt das Bild von dem Zwischenspeicher in die DB
router.post('/api/change-avatar-image', upload.single('file'), async (req, res) => {
    const saveFileResult = await asyncSaveFile(req.file.originalname, req.file.buffer);
    const uploadResult = await uploadImage(req.file.originalname); 
    
    // console.log("api.js 167 saveFileResult: ", req.file);
    console.log("api.js 168 uploadResult: ", uploadResult);
    console.log("api.js 169 userId: ", req.query.userId);

    const user = await User.findOne({ id: req. query.userId });

    user.avatarImageLink = uploadResult;

    const response = await User.updateOne({ id: req.query.userId }, user);

    res.status(200).send("OK");
})




// ----- BOTTLE-POSTS ----- //

// GET - read posts
router.get('/api/posts', async (req, res) => {
    const response = await Bottlepost.find();
    res.status(200).send(response)
});
  
// POST - create post
router.post('/api/post', async (req, res) => {
const bottlepost = req.body;
const response = await Bottlepost.create(bottlepost);
res.status(200).send("Post hinzugefügt")
});
  
// PUT - update post
router.put('/api/toggle-post', async (req, res) => {
    const postId = req.query.id;
    const post = await Bottlepost.findOne({ id: postId })
    post.star = !post.star;
    const response = await Bottlepost.updateOne({ id: postId}, post);
    res.status(200).send("Star getoggled")
});
   
// PUT - update post via object
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
    
// DELETE - delete post
router.delete('/api/delete-post', async (req, res) => {
    const postId = req.query.id;
    const response = await Bottlepost.deleteOne({ id: postId});
    res.status(200).send("Post gelöscht")
});

module.exports = router;