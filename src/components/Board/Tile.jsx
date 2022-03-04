import './Board.css';
import { useGame } from '../../hooks/useGame';

const Tile = ({ letter, index }) => {
  const { answer } = useGame();

  let className = 'tile';
  if (letter && answer.includes(letter)) className += ' nearly';
  if (answer[index] === letter) className += ' correct';

  return (
    <div className={className}>
      <p>{ letter.toUpperCase() }</p>
    </div>
  );
};

export default Tile;