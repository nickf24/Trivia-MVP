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
      questions: [],
      category: 'General Knowledge'
    }
  }

  componentDidMount() {
    var instance = this;
    axios.get(`/questions/${this.state.category}`).then(function(response) {
      console.log('current category', instance.state.category);
      console.log('mounted with', response.data)

      instance.setState((prevState) => {
        return {questions: response.data, category: prevState.category}
      })
    }).catch(function(error) {
      console.log(error);
    })
  }

  handleCategoryChange(category) {
    
    var instance = this;
    var category = category;
    console.log(category)
    axios.get(`/questions/${category}`).then(function(response) {
      //console.log('in handle category change', response.data)
      instance.setState({
        questions: response.data, 
        category: category
      })
    }).catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <CategorySearch changeFn = {this.handleCategoryChange.bind(this)} />
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