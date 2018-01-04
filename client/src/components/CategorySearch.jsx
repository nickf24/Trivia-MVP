import React from 'react';

const triviaAPI = require('../../../lib/triviaAPI.js')
class CategorySearch extends React.Component {


  constructor(props) {
  	super(props);
  }

  render() {
  	var categoryList = [];
  	for (var i = 0; i < triviaAPI.triviaCategories.length; i++) {
  	  categoryList.push(triviaAPI.triviaCategories[i].name)
  	}
  	return (
  	  <div>
  		<select>
  		  {categoryList.map((category) => <option> {category} </option>)}
  		</select>
  	  </div>
    )
  }












}


export default CategorySearch;

