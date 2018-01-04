let mongoose = require('mongoose');
const triviaAPI = require('../lib/triviaAPI.js')
mongoose.connect('mongodb://localhost/trivia');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MONGO connection error!'));
db.once('open', function() { 

	console.log('connected to DB!');

});



let questionSchema = mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array
});


let Question = mongoose.model('Questions', questionSchema);

let save = function(params, results) {

	for (var i = 0; i < results.length; i++) {
		// console.log(results[i].incorrect_answer)
  	  	var questionInst = new Question({category: results[i].category, type: results[i].type, difficulty: results[i].difficulty, 
  	  		question: results[i].question, correct_answer: results[i].correct_answer, incorrect_answers: results[i].incorrect_answers});
  	
  	    questionInst.save(function(err) {
  	      if (err) {
  	      	return handleError(err);
  	      }
  	    });
  	}
}

let getQuestions = function(category, callback) {
	// fetches questions from DB
  Question.find({category: category}).limit(10).exec(callback)
  
}

module.exports.save = save;
module.exports.getQuestions = getQuestions;