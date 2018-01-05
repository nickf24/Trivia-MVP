import React from 'react';


class TriviaQuestionEntry extends React.Component {

  constructor(props) {
  	super(props);
  }


  render() {
    
      // this.props.answer = this.props.answer.replace(/&quot;/g, '\\"');
    
  	return (
  	  <div onClick = {() => {this.props.clickFn(this.props.answersArr, this.props.answer)}}> 
  	  	{this.props.answer} 
  	  </div>
  	)
  }


}










export default TriviaQuestionEntry;

// <div onClick = {() => this.props.clickFn(document.getElementById('solution').innerHTML)}> <div id = 'solution'> {this.props.answer} </div> </div>