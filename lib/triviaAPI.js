// make request to TRIVA API
var axios = require('axios');

var getQuestions = function(params, callback) {
  // gets questions from API with params category, difficulty, type (MC)
  var url = `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`;
  axios.get(url).then(function(response) {
  	callback(null, response);
  }).catch(function(error) {
  	callback(error, null);
  });
}

module.exports.getQuestions = getQuestions;