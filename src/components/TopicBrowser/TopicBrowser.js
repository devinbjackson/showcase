import React, { Component } from 'react';
import FilterObject from './../Topics/FilterObject.js';
import FilterString from './../Topics/FilterString.js';
import Palindrome from './../Topics/Palindrome.js';
import Sum from './../Topics/Sum.js';
import EvenAndOdd from './../Topics/EvenAndOdd.js';

class TopicBrowser extends Component {
    render() {
      return(
     <div>
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
        <EvenAndOdd />
     </div>
      )
    }
  }
  
  export default TopicBrowser;