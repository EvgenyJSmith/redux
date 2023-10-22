
import Counter from '../Counter/Counter';
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.App}>
            <h1>REDUX разные способы взаимодействия</h1>
            <Counter/>
        </div>
    );
}

export default App;
