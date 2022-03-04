import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import randomWord from 'random-word-by-length';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [ answer, setAnswer ] = useState('');
  const [ guesses, setGuesses ] = useState([]);
  const [ wordLength, setWordLength ] = useState(5);
  const [ maxGuesses, setMaxGuesses ] = useState(6);
  const [ error, setError ] = useState('');

  useEffect(() => {
    generateWord();
  }, [])

  const generateWord = () => {
    let word = randomWord(wordLength);

    // randomWord() only takes a max length argument, so it could be shorter than the required length
    while (answer.length !== wordLength && validateWord(answer)) {
      word = randomWord(wordLength);
    }

    setAnswer(word);
  };

  const validateWord = (word) => {
    return axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${ word }`)
      .then(() => true)
      .catch(() => false);
  };

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