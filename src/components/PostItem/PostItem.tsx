

import { FC } from 'react'
import { IPost } from '../../models/IPost'
import styles from './PostItem.module.scss'
import { Button } from 'antd'

interface PostItemProps {
    post: IPost
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent)=>{
        const title = prompt() || '';
        title && update({...post, title})
    }

    return (
        <div className={styles.PostItem} onClick={ handleUpdate }>
            <div className={styles.content}>
                {post.id}. {post.title}
            </div>

            <Button type="primary" className={styles.button} onClick={handleRemove}>Удалить</Button>
        </div>
    )
}

export default PostItem