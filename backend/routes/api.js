const express = require('express');
const Bottlepost = require('../models/Post.model');

// Router-Object > definieren
const router = express.Router();

// Middleware > wird von Router-Objekt aufgerufen
router.use((req, res, next) => {
    console.log("eine /api wird aufgerufen");
    next();
});



// ROUTEN

// GET - read
router.get('/api/posts', async (req, res) => {
    const response = await Bottlepost.find();
    res.status(200).send(response)
});
  
// POST - create
router.post('/api/post', async (req, res) => {
const bottlepost = req.body;
const response = await Bottlepost.create(bottlepost);
res.status(200).send("Post hinzugefügt")
});
  
// PUT - update
router.put('/api/toggle-post', async (req, res) => {
    const postId = req.query.id;
    const post = await Bottlepost.findOne({ id: postId })
    post.star = !post.star;
    const response = await Bottlepost.updateOne({ id: postId}, post);
    res.status(200).send("Star getoggled")
});
   
// PUT - update via object
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
    
// DELETE - delete
router.delete('/api/delete-post', async (req, res) => {
    const postId = req.query.id;
    const response = await Bottlepost.deleteOne({ id: postId});
    res.status(200).send("Post gelöscht")
});

module.exports = router;