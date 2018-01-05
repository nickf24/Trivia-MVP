import React from 'react';
import TriviaQuestionEntry from './TriviaQuestionEntry.jsx';

class TriviaQuestion extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  correct: 'neither',
  	  shuffled: false,
  	  answers: []
  	}
  }

  onAnswerClick(answersArr, value) {
  	if (value === this.props.question.correct_answer) {
  		console.log('answer is correct!');
  	  this.setState({
  	  	correct: 'yes',
  	  	shuffled: true,
  	  	answers: answersArr
  	  });
  	} else {
  		console.log('answer is wrong!');
  	  this.setState({
  	    'correct': 'no',
  	     shuffled: true,
  	     answers: answersArr
  	  })
  	}
  }



  render() {
  	if (this.state.answers[1] === undefined) {  	
    var answersArr = [];
    // push correct answer into the list of answers to be displayed

    answersArr.push(this.props.question.correct_answer);
    // push incorrect answers into list of answers to be displayed
    for (var i = 0; i < this.props.question.incorrect_answers.length; i++) {
      answersArr.push(this.props.question.incorrect_answers[i]);
    }

    // define a shuffle function so the answers are in a random order
    var shuffle = function (array) {
  	  var currentIndex = array.length, temporaryValue, randomIndex;
   		while (0 !== currentIndex) {
       	  randomIndex = Math.floor(Math.random() * currentIndex);
    	  currentIndex -= 1;
		  
		  temporaryValue = array[currentIndex];
    	  array[currentIndex] = array[randomIndex];
    	  array[randomIndex] = temporaryValue;
  		}
      return array;
    }

    var correctAnswer = this.props.question.correct_answer;
    var shuffleArr = shuffle(answersArr);	
    } else {
      var shuffleArr = this.state.answers;
    }
    var tick = <div className = 'placeholder'> Placeholder </div>
    if (this.state.correct === 'yes') {
      tick = <div className = 'correctAnswer'> Correct! </div> 
    }

    if (this.state.correct === 'no') {
      tick = <div className = 'incorrect'> Incorrect! </div>
    }
     // this.props.question.question = this.props.question.question.replace(/&quot;/g, '\\"');
  	return (
  		<div> 
  		  	<span className = 'questions'> {this.props.question.question} </span>
          {tick}
  		  	<div className = 'options'>
  		  	  {shuffleArr.map((answer) => <TriviaQuestionEntry clickFn = {this.onAnswerClick.bind(this)} answer = {answer} answersArr = {shuffleArr} correct = {this.state.correct} />)}
  		  	</div>
          <div className = 'placeholder'> place </div>
  		</div> 

  	)
  }


}










export default TriviaQuestion;