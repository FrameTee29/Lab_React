import React from 'react'
import CharacterCard from './Character'
import './App.css'
import _ from 'lodash';



const word = "Hello";

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
  word,
  chars,
  attempt: 1,
  guess: [],
  completed: false
  }
 }
 

class App extends React.Component {

  state= prepareStateFromWord(word); 

  activationHandler= (value) =>{
    console.log(value);
  }

  render() {
    return (
      <div>
        {Array.from(this.state.chars).map((item, index) => <CharacterCard value={item} key={index}  activationHandler= {this. activationHandler}/>)}
        
      </div>
    );
  }
}

export default App;