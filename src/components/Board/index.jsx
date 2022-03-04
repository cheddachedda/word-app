import './Board.css';
import Row from './Row';
import { useGame } from '../../hooks/useGame';

const Board = () => {
  const { guesses, maxGuesses } = useGame();
  const emptyRows = Array(maxGuesses - guesses.length).fill('');

  return (
    <div className="board">
      { guesses.map((word, key) => <Row key={key} word={word} />)}
      { emptyRows.map((word, key) => <Row key={key} word={word} />)}
    </div>
  );
};

export default Board;