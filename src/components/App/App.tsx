
import Counter from '../Counter/Counter';
import PostContainer from '../PostContainer/PostContainer';
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
            <PostContainer/>
        </div>
    );
}

export default App;
