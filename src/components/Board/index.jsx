import './Board.css';
import Row from './Row';
import { useGame } from '../../hooks/useGame';

const Board = () => {
  const { currentAttempt, maxAttempts, previousAttempts } = useGame();
  const emptyRows = Array(maxAttempts - previousAttempts.length - 1).fill('');

  return (
    <div className="board">
      { previousAttempts.map((word, key) => <Row key={key} word={word} />)}
      <Row word={currentAttempt} current />
      { emptyRows.map((word, key) => <Row key={key} word={word} />)}
    </div>
  );
};

export default Board;