// make request to TRIVA API
var axios = require('axios');

var getQuestions = function(params) {
  // gets questions from API with params category, difficulty, type (MC)
  var url = `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`;
  axios.get(url).then(function(response) {
  	console.log(response);
  }).catch(function(error) {
  	console.log(error);
  });
}

module.exports.getQuestions = getQuestions;