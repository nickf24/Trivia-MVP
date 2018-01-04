let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trivia', { useMongoClient: true })

let questionSchema = mongoose.Schema({
  question: string,
  answer: string,
  category: string,
  difficulty: string,
});

let Questions = mongoose.model('Questions', questionSchema);

let save = function(arr) {
	// inserts data to DB
}

let getQuestions = function() {
	// fetches questions from DB
}

module.exports.save = save;
module.exports.getQuestions = getQuestions;