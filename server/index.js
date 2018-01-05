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
  
  var trivCategories = triviaAPI.triviaCategories;
  for (var i = 0; i < trivCategories.length; i++) {
  	// console.log(trivCategories[i].id)
  	var params = {amount: 10, category: trivCategories[i].id, difficulty: 'hard'}
    triviaAPI.getQuestions(params, function(err, results) {
  	  if (err) {
  	    console.log(err);
  	  } else {
  	  	
  	    db.save(params, results.data.results);
  	    res.send(results.data.results);
  	  }
    })
  }
});

// app.get('/load', (req, res) => {
//   console.log('load got');
//   var trivCategories = triviaAPI.triviaCategories;
//   for (var i = 0; i < trivCategories.length; i++) {
//   	// console.log(trivCategories[i].id)
//   	var params = {amount: 10, category: trivCategories[i].id, difficulty: 'hard'}
//     triviaAPI.getQuestions(params, function(err, results) {
//   	  if (err) {
//   	    console.log(err);
//   	  } else {
//   	  	res.send(results.data.results);
//   	    // db.save(params, results.data.results);
//   	  }
//     })
//   }

// })

app.post('/delete', (req, res) => {
  // gets more questions from the DB if the user wants more than 10 Questions
  // remove all posts from DB 
  // fetch more Qs via API
  db.deleteAll(function(err, results) {
  	if (err) {
  		console.log(err);
  	} else {
  		res.send('wiped db');
  	}
  });
  // res.send('wiped db');
});


app.listen(3000, function () { console.log('Trivia app listening on port 3000!') });




