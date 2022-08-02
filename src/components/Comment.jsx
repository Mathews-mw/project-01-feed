import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
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
                        <button title='Deletar comentário'><Trash size={24} /></button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>3</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}