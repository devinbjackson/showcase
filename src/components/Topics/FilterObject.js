import React, { Component } from 'react';


class FilterObject extends Component {
    constructor(){
        super()
        this.state ={
            unfilteredArray: [{name: "Firion", age: 25, weapon: "sword"},
            {name: "Maria", hair: "purple", weapon: "Bow"},
            {name: "Guy", language: "beaver", age:"unknown", size:"largest"},
            {name: "Leon", element: "dark", age: 26}],
            userInput: '',
            filteredArray: [],
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
      }
    assignFilter(input){
        var arr = this.state.unfilteredArray.filter(function(element){
            return element[input]
        });
       this.setState({filteredArray: arr
        
     })
    }
    render() {
      return(
      <div className="puzzleBox filterObjectPB">
      <h4>
       Filter Object
      </h4>
      <span className="puzzleText" >Original: { JSON.stringify(this.state.unfilteredArray) } </span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
      <button className="confirmationButton" onClick={ () => {this.assignFilter(this.state.userInput) }}> Filter </button>
      <span className="resultsBox filterObjectRB" >Filtered: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
      )
    }
  }
  
  export default FilterObject;