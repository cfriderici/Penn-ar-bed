const express = require('express');

//bcrypt statt bcryptjs ?!?
const bcrypt = require('bcrypt');
// warum jwt als var?
var jwt = require('jsonwebtoken');  

const Bottlepost = require('../models/Post.model');
const User = require('../models/User.model');

const JWT_KEY = process.env.EXPRESS_APP_JWT_KEY;

// Router-Object > definieren
const router = express.Router();




// ----- Middleware ----- //
// wird von Router-Objekt aufgerufen
router.use((req, res, next) => {
    console.log("eine /api wird aufgerufen");
    next();
});




// ----- ROUTEN ----- //

// REGISTER USER
router.post('/api/register', async (req, res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await User.create({
            id: req.body.id,
            email: req.body.email,
            name: req.body.name,
            password: encryptedPassword
        });
        res.status(200).send({ status: 'user created' });
    } catch (error) {
        res.status(400).send({ status: 'user already exits' });
    }
})

// LOGIN USER
router.post('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    
    if (!user) {
        res.status(400).send({ status: 'error', error: 'invalid login' });
        return;
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                email: user.email,
            },
            JWT_KEY
        )
        res.status(200).send({ status: 'ok', access: token });
        return;
    } else {
        res.status(400).send({ status: 'eroor', access: false });
        return;
    }
});


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