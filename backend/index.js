
const express = require('express')
const app = express()
const port = 3001


// ----- MIDDLEWARE ----- //
app.use(express.json());


// mongodb+srv://cfriderici:<password>@cluster0.cfgd3zr.mongodb.net/?retryWrites=true&w=majority
// app.use(async function (req, res, next) {
//   await mongoose.connect(MONGO_URI);
//   next();
// });


// ----- ARRAY ----- //
var postArray = [
  {
    id: "111",
    place: "Strandname",
    date: "10.09.1976",
    title: "Flaschen-Post-Titel",
    text: "Hier steht ein schöner Text",
    edited: false,
    editingDate: "",
    share: "",
    comments: [
      {
          id: "112",
          count: 1,
          comment: "aaaaawesome !!!",
          userId: 113,
          userName: "Jill"
      }
    ], 
    likes: [{ }], 
    star: false
  }
]



// ----- ROUTEN ----- //

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// GET - read
app.get('/posts', (req, res) => {
  res.status(200).send(postArray)
});

// POST - create
app.post('/post', (req, res) => {
  //hier später mondo-db-methode
  const post = req.body;
  postArray.push(post)
  res.status(200).send("Post hinzugefügt")
});

// PUT - update
app.put('/toggle-post', (req, res) => {
  const postId = req.query.id;
  postArray.map(e => {
    if (e.id === postId) {
      e.star = !e.star;
    }
  });
  res.status(200).send("Post geändert")
});

// DELETE - delete
app.delete('/delete-post', (req, res) => {
  const postId = req.query.id;
  postArray = postArray.filter(e => e.id != postId);
  res.status(200).send("Post gelöscht")
});

app.get('/health-check', (req, res) => {
  res.status(200).send("Healt check passed. Status 200")
});




// SERVER STARTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

