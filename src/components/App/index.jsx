import styles from './App.module.css';
import Header from '../Header';
import Board from '../Board';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Board />
    </div>
  );
};

export default App;
