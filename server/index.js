const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const triviaAPI = require('../lib/triviaAPI.js');
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/questions/:catId', (req, res) => {
  // get questions from DB, serves to client
  var category = req.params.catId;
  // e.g. 'History'
  db.getQuestions(category, function(err, data) {
  	if (err) {
  	  console.log(err);
  	} else {
  	  res.send(data);
  	}
  });


  // send files from DB where category matches;
});

app.post('/load', (req, res) => {
  // post questions to DB from client
  // sends questions to DB with params
  // triggered on category change
  // load in lots of params
  var trivCategories = triviaAPI.triviaCategories;
  for (var i = 0; i < trivCategories.length; i++) {
  	var params = {amount: 10, category: trivCategories[i].id, difficulty: 'hard'}
    triviaAPI.getQuestions(params, function(err, results) {
  	  if (err) {
  	    console.log(err);
  	  } else {
  	    db.save(params, results.data.results);
  	    res.send('Successfully saved to the database!');
  	  }
    })
  }
});

app.post('/questions', (req, res) => {
  // gets more questions from the DB if the user wants more than 10 Questions;
});


app.listen(3000, function () { console.log('Trivia app listening on port 3000!') });




