import './Board.css';
import { useGame } from '../../hooks/useGame';

const Tile = ({ letter, index, current }) => {
  const { answer } = useGame();

  let className = 'tile';
  if (!current) {
    if (letter && answer.includes(letter)) className += ' nearly';
    if (answer[index] === letter) className += ' correct';
  }

  return (
    <div className={className}>
      <p>{ letter.toUpperCase() }</p>
    </div>
  );
};

export default Tile;