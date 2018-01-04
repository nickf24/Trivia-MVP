import React from 'react';
import ReactDOM  from 'react-dom';
import TriviaQuestion from './components/TriviaQuestion.jsx';
import data from '../../exampleData.js';

var exampleQuestions = data.data;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: exampleQuestions
    }
  }

  render() {
    return (
      <div>
        {this.state.questions.map((question) => <TriviaQuestion question = {question} /> )}
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app'));
	// {this.state.questions.map((question) => <TriviaQuestion question = {question}/> )}
      