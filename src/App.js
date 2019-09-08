import React from 'react'
import CharacterCard from './Character'
import './App.css'
const word = "Hello";

class App extends React.Component {

  activationHandler= (value) =>{
    console.log(value);
  }

  render() {
    return (
      <div>
        {Array.from(word).map((item, index) => <CharacterCard value={item} key={index}  activationHandler= {this. activationHandler}/>)}
        
      </div>
    );
  }
}

export default App;