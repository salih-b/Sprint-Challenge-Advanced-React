import React, {useState} from 'react';
import GetPlayers from './components/GetPlayers';
import {useInput} from './hooks/useInput';
import './App.css';

function App() {

  const [playerText, setPlayerText, handleChangePlayerText] = useInput("");
  const [players, setPlayers, handlePlayers] = useInput([]);
  return (
    <div className="App">
      <GetPlayers 
      playerText={playerText} 
      setPlayerText={setPlayerText} 
      players={players}
       setPlayers={setPlayers}
       handleChangePlayerText={handleChangePlayerText}
       handlePlayers={handlePlayers} />
    </div>
  );
}

export default App;
