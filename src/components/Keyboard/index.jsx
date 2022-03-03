import './Keyboard.css';
import Row from './Row';

const Keyboard = () => {
  const keyboard = [
    [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
    [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
    [ 'Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace' ]
  ];

  return (
    <div className="keyboard">
      { keyboard.map((row, i) => <Row key={i} keys={row} />) }
    </div>
  );
};

export default Keyboard;
