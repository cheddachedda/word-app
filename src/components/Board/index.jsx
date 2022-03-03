import './Board.css';
import Row from './Row';

// Dummy data
var guesses = [ 'slice', 'worth', 'round', 'mourn' ];
var maxGuesses = 6;

const Board = () => {
  const emptyRows = Array(maxGuesses - guesses.length).fill('');

  return (
    <div className="board">
      { guesses.map((word, key) => <Row key={key} word={word} />)}
      { emptyRows.map((word, key) => <Row key={key} word={word} />)}
    </div>
  );
};

export default Board;