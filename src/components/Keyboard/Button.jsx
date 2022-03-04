import { MdBackspace } from 'react-icons/md';

import './Keyboard.css';
import { useGame } from '../../hooks/useGame';

const Button = ({ letter }) => {
  const { answer, guesses } = useGame();

  let className = "keyboard-button";
  let label = letter.toUpperCase();
  
  if (guesses.join('').includes(letter)) {
    if (guesses.some((word) => word.indexOf(letter) === answer.indexOf(letter) && word.indexOf(letter) >= 0)) {
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

  return (
    <button className={ className }>
      { label }
    </button>
  );
};

export default Button;