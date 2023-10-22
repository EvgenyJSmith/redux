import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUsers } from '../../store/reducers/ActionCreatorUser'

import styles from './Users.module.scss'
import { Button } from 'antd'


const Users = () => {
    const dispatch = useAppDispatch()
    const { error, isLoading, users } = useAppSelector(state => state.userReducer)

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [dispatch])

    const dataRequest = () => {
        dispatch(fetchUsers())
    }

    return (
        <div className={styles.Users}>
            <h2>Запрос пользователей</h2>
            <p className={styles.subtitle}>обращение к серверу через ActionCreator</p>

            <Button type="primary" onClick={dataRequest}>Запросить Users с jsonplaceholder</Button>

            <div>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>{error}</h1>}
                {/* {JSON.stringify(users, null, 2)} */}
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

export default Users
