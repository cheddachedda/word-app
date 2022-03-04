import './Board.css';
import Tile from './Tile';
import { useGame } from '../../hooks/useGame';

const Row = ({ word }) => {
  const { wordLength } = useGame();
  
  let letters = word.split('');
  while (letters.length < wordLength) {
    letters.push('_');
  }

  return (
    <div className="board-row">
      { letters.map((letter, index) => <Tile key={index} letter={letter} index={index} /> )}
    </div>
  );
};

export default Row;