

import { useState } from 'react';
import styles from './PostContainer.module.scss'
import { postAPI } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';
import { Button } from 'antd';
import { IPost } from '../../models/IPost';

const PostContainer = () => {
    const [limitPosts] = useState(100);

    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limitPosts)
    const [createPost] = postAPI.useCreatePostMutation()
    const [updatePost] = postAPI.useUpdatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();

    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div className={styles.PostContainer}>
            <h2>Запрос, добавление, редактирование, удаление постов</h2>
            <p>обращение к серверу через RTK query {'>>'} createApi</p>
            <p className={styles.subtitle}>необходимо запустит json сервер на 5000 порту (json-server --watch db.json --port 5000)</p>


            {isLoading && <h2>Идет загрузка..</h2>}
            {error && <h2>Произошла ошибка при загрузки</h2>}
            <Button onClick={handleCreate}>Добавить новый пост</Button>
            <div className={styles.posts}>
                {posts?.map(post =>
                    <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate} />
                )}
            </div>
        </div>
    )
}

export default PostContainer
