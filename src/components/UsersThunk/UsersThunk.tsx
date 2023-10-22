// import { useEffect } from 'react'
import { Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUsersThunk } from '../../store/reducers/ActionCreatorUserThunk'

import styles from './UsersThunk.module.scss'


const UsersThunk = () => {
    const dispatch = useAppDispatch()
    const { error, isLoading, users } = useAppSelector(state => state.userThunkReducer)

    // useEffect(() => {
    //     dispatch(fetchUsersThunk())
    // }, [dispatch])

    const dataRequest = () => {
        dispatch(fetchUsersThunk())
    }

    return (
        <div className={styles.UsersThunk}>
            <h2>Запрос пользователей</h2>
            <p>обращение к серверу через createAsyncThunk</p>
            <p className={styles.subtitle}>ActionCreator находится в слайсе</p>

            <Button type="primary" onClick={dataRequest}>Запросить Users с jsonplaceholder</Button>

            <div>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>{error}</h1>}
                <div className={styles.users}>
                    {users && users.map(user =>
                        <div className={styles.userCard}>
                            <span>name: {user.name}</span>
                            <span>mail: {user.email}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UsersThunk;