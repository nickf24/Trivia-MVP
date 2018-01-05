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

var triviaCategories = [
        {
            "id": 9,
            "name": "General Knowledge"
        },
        {
            "id": 10,
            "name": "Entertainment: Books"
        },
        {
            "id": 11,
            "name": "Entertainment: Film"
        },
        {
            "id": 12,
            "name": "Entertainment: Music"
        },
        {
            "id": 14,
            "name": "Entertainment: Television"
        },
        {
            "id": 15,
            "name": "Entertainment: Video Games"
        },
        {
            "id": 16,
            "name": "Entertainment: Board Games"
        },
        {
            "id": 17,
            "name": "Science & Nature"
        },
        {
            "id": 18,
            "name": "Science: Computers"
        },
        {
            "id": 22,
            "name": "Geography"
        },
        {
            "id": 23,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Animals"
        },
        {
            "id": 28,
            "name": "Vehicles"
        },
        {
            "id": 31,
            "name": "Entertainment: Japanese Anime & Manga"
        },
        {
            "id": 32,
            "name": "Entertainment: Cartoon & Animations"
        }
    ]


module.exports.getQuestions = getQuestions;
module.exports.triviaCategories = triviaCategories;