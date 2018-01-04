const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const triviaAPI = require('../lib/triviaAPI.js');
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/questions', (req, res) => {
  // get questions from DB, serves to client
  
  res.send('hello world');
});

app.post('/questions', (req, res) => {
  // post questions to DB from client
  // sends questions to DB with params
  // triggered on category change
  var params = {amount: 10, category: '23', difficulty: 'medium'};

  triviaAPI.getQuestions(params, function(err, results) {
  	if (err) {
  	  console.log(err);
  	} else {
  	  db.save(params, results.data.results);
  	  res.send('Successfully saved to the database!');
  	}
  })
});


app.listen(3000, function () { console.log('Trivia app listening on port 3000!') });




