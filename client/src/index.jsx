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
    this.reload()
  }

  handleCategoryChange(category) {
    
    var instance = this;
    var category = category;
    console.log(category)
    axios.get(`/questions/${category}`).then(function(response) {
      instance.setState({
        questions: response.data, 
        category: category
      })
    }).catch(function(error) {
      console.log(error);
    });
  };

  reload() {
    var instance = this;
    axios.post('/load').then(function(response) {
      instance.setState((prevState) => {
          return {questions: response.data, category: prevState.category}
        })
    }).catch(function(error) {
      console.log(error);
    })
  }

  delete() {
    axios.post('/delete').then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    })
    this.reload();
  }
  render() {
    // if (this.state.questions.length === 0) {
    //   return (
    //       <div> 
    //       <h1> Welcome To Trivia </h1>
    //       <button onClick = {() => this.reload()}> Begin </button>
    //       </div>

    //     )
    // }
    return (
      <div>
        <h1> {this.state.category} </h1>
        <CategorySearch changeFn = {this.handleCategoryChange.bind(this)} />
        <button onClick = {() => this.delete()}> Refresh Questions </button>
        {this.state.questions.map((question) => <TriviaQuestion question = {question} /> )}
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app'));


// choose a category
// post from API to DB
// get from DB category questions