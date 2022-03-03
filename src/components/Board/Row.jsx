import './Board.css';
import Tile from './Tile';

var wordLength = 5;

const Row = ({ word }) => {
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