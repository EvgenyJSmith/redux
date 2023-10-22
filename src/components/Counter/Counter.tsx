import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { counterSlice } from "../../store/reducers/CounterSlice";

import styles from './Counter.module.scss'


const Counter = () => {
    const { count } = useAppSelector(state => state.counerReducer)
    const dispatch = useAppDispatch()
    const { decrement, increment, reset } = counterSlice.actions;

    return (
        <div className={styles.Counter}>
            <h2>Знаменитый счетчик)</h2>

            <span className={styles.number}>{count}</span>

            <div className={styles.buttons}>
                <Button type="primary"  onClick={() => dispatch(increment(1))}>Increment</Button>
                <Button type="primary"  onClick={() => dispatch(reset(0))}>Reset</Button>
                <Button type="primary"  onClick={() => dispatch(decrement(1))}>Decrement</Button>
            </div>
        </div>
    )
}

export default Counter