import './Keyboard.css';
import Button from './Button';

const Row = ({ keys }) => {
  return (
    <div className="keyboard-row">
      { keys.map((key) => <Button key={key} letter={key} />) }
    </div>
  );
};

export default Row;