import React from 'react'
import CharacterCard from './Character'
import './App.css'
const word = "Hello";
const x = "test"
class App extends React.Component {
  render() {
    return (
      <div>
        {Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)}
        {Array.from(x).map((c, i) => <CharacterCard value={c} key={i} />)}
      </div>
    );
  }
}

export default App;