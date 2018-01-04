import React from 'react';

const triviaAPI = require('../../../lib/triviaAPI.js')
class CategorySearch extends React.Component {


  constructor(props) {
  	super(props);
  	this.state = {
  	  value: 'Sports'
  	}
  	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  	this.setState({value: event.target.value});
  }


  render() {
  	var categoryList = [];
  	for (var i = 0; i < triviaAPI.triviaCategories.length; i++) {
  	  categoryList.push(triviaAPI.triviaCategories[i].name)
  	}
  	return (
  	  <div>
  		<select value = {this.state.value} onChange = {this.handleChange}>
  		  {categoryList.map((category) => <option value = {category}> {category} </option>)}
  		</select>
  	  </div>
    )
  }












}


export default CategorySearch;

