import { BiAdjust, BiBarChartAlt2, BiCog, BiHelpCircle } from 'react-icons/bi';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <button className="header-button" title='How to play'>
          <BiHelpCircle />
        </button>
        <button className="header-button" title='Statistics'>
          <BiBarChartAlt2 />
        </button>
      </div>

      <h1>Word App</h1>

      <div>
        <button className="header-button" title='Light/Dark'>
          <BiAdjust />
        </button>
        <button className="header-button" title='Settings'>
          <BiCog />
        </button>
      </div>
    </div>
  );
};

export default Header;