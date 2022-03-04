import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [ answer, setAnswer ] = useState('');
  const [ guesses, setGuesses ] = useState([]);
  const [ wordLength, setWordLength ] = useState(5);
  const [ maxGuesses, setMaxGuesses ] = useState(6);
  const [ error, setError ] = useState('');

  const values = {
    answer,
    guesses,
    maxGuesses,
    wordLength
  };

  return (
    <GameContext.Provider value={values}>
      { children }
    </GameContext.Provider>
  )
};