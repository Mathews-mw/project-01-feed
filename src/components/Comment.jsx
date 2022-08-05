import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, deleteComment }) {
    
    const[likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLikes() {
        setLikeCount((value) => {
            return value + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://source.unsplash.com/random/?dogs" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mathews Araujo</strong>
                            <time title='31 de julho às 19:45h' dateTime='2022-07-31 19:45:00'>Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'><Trash size={24} /></button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikes}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount==0 ? `` : `${likeCount}`}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}