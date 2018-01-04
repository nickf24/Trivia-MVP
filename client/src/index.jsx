import React from 'react';
import ReactDOM  from 'react-dom';
import TriviaQuestion from './components/TriviaQuestion.jsx';
import CategorySearch from './components/CategorySearch.jsx';
import data from '../../exampleData.js';

const axios = require('axios');

var exampleQuestions = data.data;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: exampleQuestions
    }
  }

  componentDidMount() {
    var instance = this;
    axios.get('/questions/History').then(function(response) {
      console.log(response.data)
      instance.setState({
        questions: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <CategorySearch />
        {this.state.questions.map((question) => <TriviaQuestion question = {question} /> )}
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app'));
	// {this.state.questions.map((question) => <TriviaQuestion question = {question}/> )}
      

// choose a category
// post from API to DB
// get from DB category questions