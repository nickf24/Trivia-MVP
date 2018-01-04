const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const triviaAPI = require('../lib/triviaAPI.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/questions', (req, res) => {
  // get questions from DB, serves to client
  var params = {};
  triviaAPI.getQuestions()
});

app.post('/questions', (req, res) => {
  // post questions to DB from client
});


app.listen(3000, function () { console.log('Trivia app listening on port 3000!') });




