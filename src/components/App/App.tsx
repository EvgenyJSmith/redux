
import Counter from '../Counter/Counter';
import Users from '../Users/Users';
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.App}>
            <h1>REDUX разные способы взаимодействия</h1>
            <Counter />
            <Users />
        </div>
    );
}

export default App;
