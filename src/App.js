import React from 'react'
import CharacterCard from './Character'
const word = "Hello";
class App extends React.Component {
  render() {
    return (
      <div>
        {Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)}
      </div>
    );
  }
}

export default App;