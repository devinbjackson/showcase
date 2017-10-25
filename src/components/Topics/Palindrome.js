import React, { Component } from 'react';


class Palindrome extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: '',
          palindrome: ''
        };
      }
      handleChange(val) {
        this.setState({ userInput: val });
      }
      isPalindrome(userInput) {
        var str = this.state.userInput;
        var pal;
            if(str.split('').reverse().join('')===userInput){
                pal = true;
            }
            else pal = false
        this.setState({palindrome: JSON.stringify(pal)})
     }
          render() {
            return (
              <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
              </div>
            )
          }
    }
  
  export default Palindrome;