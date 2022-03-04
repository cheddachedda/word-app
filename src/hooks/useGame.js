import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import randomWord from 'random-word-by-length';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [ answer, setAnswer ] = useState('');
  const [ previousAttempts, setPreviousAttempts ] = useState([]);
  const [ currentAttempt, setCurrentAttempt ] = useState('');
  const [ wordLength, setWordLength ] = useState(5);
  const [ maxAttempts, setMaxAttempts ] = useState(6);
  const [ error, setError ] = useState('');

  useEffect(() => {
    generateWord();
  }, [])

  const generateWord = () => {
    let word = randomWord(wordLength);

    // randomWord() only takes a max length argument, so it could be shorter than the required length
    while (word.length !== wordLength && validateWord(answer)) {
      word = randomWord(wordLength);
    }

    setAnswer(word);
  };

  const validateWord = (word) => {
    return axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${ word }`)
      .then(() => true)
      .catch(() => false);
  };

  const addLetter = (letter) => {
    if (currentAttempt.length <= wordLength) {
      setCurrentAttempt(currentAttempt + letter);
    }
  };

  const values = {
    addLetter,
    answer,
    currentAttempt,
    maxAttempts,
    previousAttempts,
    wordLength
  };

  return (
    <GameContext.Provider value={values}>
      { children }
    </GameContext.Provider>
  )
};