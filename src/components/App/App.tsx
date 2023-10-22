
import Counter from '../Counter/Counter';
import Users from '../Users/Users';
import UsersThunk from '../UsersThunk/UsersThunk';
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.App}>
            <h1>REDUX разные способы взаимодействия</h1>
            <Counter />
            <Users />
            <UsersThunk />
        </div>
    );
}

export default App;
