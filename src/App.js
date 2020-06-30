import React, { useState } from 'react';
import Search from './Components/Search';
import axios from 'axios'
import Results from './Components/Results'
import Popup from './Components/Popup'

function App() {
  
  const [state, setState] = useState({
    input: '',
    results: [],
    selected: {},
  });
  console.log(state.input)
  const apiKey = '39c6b2a34fe343289a6d1180afb936f7';

  const search = event => {
    if(event.key === 'Enter') {
      axios(`https://api.sportsdata.io/v3/mlb/scores/json/Players/ATL?key=${apiKey}`)
      .then(({ data }) => {
        let results = data
        console.log(results)
        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }

  const handleInput = (event) => {
    let input = event.target.value;

    setState(prevState => {
      return {...prevState, input:input}
    })
  };

  const openPopup = id => {
    axios(`https://api.sportsdata.io/v3/mlb/scores/json/Player/${id}?key=${apiKey}`)
    .then (({ data }) => {
      let result = data
console.log(data)
      setState(prevState => {
        return {...prevState, selected:result}
      })
    })
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected:{}}
    })
  }

  return (
    <div className='App'>
      <header>
        <h1>MLB PLAYER DATABASE</h1>
        <main>
          <Search handleInput={handleInput} search={search}/>
          <Results results={state.results} openPopup={openPopup} />

          {(typeof state.selected.PlayerID != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup} /> : null}
        </main>
      </header>
    </div>
  );
}

export default App;
