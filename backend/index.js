const express = require('express');
const mongoose = require('mongoose');

// die Routen aus api.js einladen
const apiRoutes = require("./routes/api");

// helperFUnktions
// const showHelloWorldInConsole = require('./modules/helperFunctions');
const {showHelloWorldInConsole, showHelloWorldInConsole2} = require('./modules/helperFunctions');

const app = express()
const port = 3001




// ----- MIDDLEWARE ----- //
// Hier werden Regeln für die ganze App definiert

// in req und res soll immer mit json gearbeitet werden
app.use(express.json());

// Zu Beginn mit Mongoose-DB verbinden > für alle Routen diese Verbindung nutzen
app.use(async function (req, res, next) {
  await mongoose.connect('mongodb://localhost:27017/penn-ar-bed');
  next();
});

// Routen aus api.js der Middlewarte übergeben
app.use(apiRoutes);




// mongodb+srv://cfriderici:<password>@cluster0.cfgd3zr.mongodb.net/?retryWrites=true&w=majority
// app.use(async function (req, res, next) {
//   await mongoose.connect(MONGO_URI);
//   next();
// });




// ----- ROUTEN ----- //

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/health-check', (req, res) => {
  showHelloWorldInConsole();
  showHelloWorldInConsole2();
  res.status(200).send("Healt check passed. Status 200")
});




// ----- SERVER STARTEN  ----- //
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

