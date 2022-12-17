
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3001




// ----- ARRAY ----- //
// var postArray = [
//   {
//     id: "111",
//     place: "Strandname",
//     date: "10.09.1976",
//     title: "Flaschen-Post-Titel",
//     text: "Hier steht ein schöner Text",
//     edited: false,
//     editingDate: "",
//     share: "",
//     comments: "", 
//     likes: "", 
//     star: false
//   }
// ]




// ----- MIDDLEWARE ----- //
app.use(express.json());

app.use(async function (req, res, next) {
  await mongoose.connect('mongodb://localhost:27017/penn-ar-bed');
  next();
});

// mongodb+srv://cfriderici:<password>@cluster0.cfgd3zr.mongodb.net/?retryWrites=true&w=majority
// app.use(async function (req, res, next) {
//   await mongoose.connect(MONGO_URI);
//   next();
// });




// ----- MONGOOSE SCHEMA + MODEL definieren ----- //
const bottlepostSchema = new mongoose.Schema({
  id: String,
  place: String,
  date: Date,
  title: String,
  text: String,
  edited: Date,
  share: String,
  comments: String,
  likes: String, 
  star: Boolean
});

const Bottlepost = mongoose.model("bottlepost", bottlepostSchema);




// ----- ROUTEN ----- //
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// GET - read
app.get('/posts', async (req, res) => {
  const response = await Bottlepost.find();
  res.status(200).send(response)
});

// POST - create
app.post('/post', async (req, res) => {
  const bottlepost = req.body;
  const response = await Bottlepost.create(bottlepost);
  res.status(200).send("Post hinzugefügt")
});

// PUT - update
app.put('/toggle-post', async (req, res) => {
  const postId = req.query.id;
  const post = await Bottlepost.findOne({ id: postId })
  post.star = !post.star;
  const response = await Bottlepost.updateOne({ id: postId}, post);
  res.status(200).send("Star getoggled")
});

// PUT - update
app.put('/edit-post', async (req, res) => {
  console.log(req.query);
  const postId = req.query.id;
  const postEdited = req.query.date;
  const post = await Bottlepost.findOne({ id: postId })
  post.edited = postEdited;
  const response = await Bottlepost.updateOne({ id: postId}, post);
  res.status(200).send("Post geändert")
});

// DELETE - delete
app.delete('/delete-post', async (req, res) => {
  const postId = req.query.id;
  const response = await Bottlepost.deleteOne({ id: postId});
  res.status(200).send("Post gelöscht")
});

app.get('/health-check', (req, res) => {
  res.status(200).send("Healt check passed. Status 200")
});




// SERVER STARTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

