import './Board.css';

var solution = 'mourn';

const Tile = ({ letter, index }) => {
  let className = 'tile';
  if (letter && solution.includes(letter)) className += ' nearly';
  if (solution[index] === letter) className += ' correct';

  return (
    <div className={className}>
      <p>{ letter.toUpperCase() }</p>
    </div>
  );
};

export default Tile;