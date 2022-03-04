import './Board.css';
import Row from './Row';
import { useGame } from '../../hooks/useGame';

const Board = () => {
  const { attempts, maxAttempts } = useGame();
  const emptyRows = Array(maxAttempts - attempts.length).fill('');

  return (
    <div className="board">
      { attempts.map((word, key) => <Row key={key} word={word} />)}
      { emptyRows.map((word, key) => <Row key={key} word={word} />)}
    </div>
  );
};

export default Board;