import { BiAdjust, BiBarChartAlt2, BiCog, BiHelpCircle } from 'react-icons/bi';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <button className={styles.button} title='How to play'>
          <BiHelpCircle />
        </button>
        <button className={styles.button} title='Statistics'>
          <BiBarChartAlt2 />
        </button>
      </div>

      <h1>Word App</h1>

      <div>
        <button className={styles.button} title='Light/Dark'>
          <BiAdjust />
        </button>
        <button className={styles.button} title='Settings'>
          <BiCog />
        </button>
      </div>
    </div>
  );
};

export default Header;