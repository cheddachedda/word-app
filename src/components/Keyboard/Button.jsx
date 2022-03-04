import { MdBackspace } from 'react-icons/md';

import './Keyboard.css';
import { useGame } from '../../hooks/useGame';

const Button = ({ letter }) => {
  const { addLetter, answer, deleteLetter, previousAttempts } = useGame();

  let className = "keyboard-button";
  let label = letter.toUpperCase();
  
  if (previousAttempts.join('').includes(letter)) {
    if (previousAttempts.some((word) => word.indexOf(letter) === answer.indexOf(letter) && word.indexOf(letter) >= 0)) {
      className += ' correct';
    } else if (answer.includes(letter)) {
      className += ' nearly';
    } else {
      className += ' incorrect';
    }
  }

  if (letter === 'Enter') {
    className += ' big';
    label = '⮐';
  } else if (letter === 'Backspace') {
    className += ' big';
    label = <MdBackspace />;
  }

  const handleClick = (e) => {
    const key = e.target.name;
    if (key === 'Enter') {
      console.log('Pressed Enter');
    } else if (key === 'Backspace') {
      deleteLetter();
    } else {
      addLetter(key);
    }
  };

  return (
    <button className={className} name={letter} onClick={handleClick}>
      { label }
    </button>
  );
};

export default Button;