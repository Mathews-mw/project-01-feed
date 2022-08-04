import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css'

export function Post({ author, puplishAt, content }) {

    const [comments, setComments] = useState(['Muito bom Devon, parabéns!! 👏👏']);
    const [newCommentText, setNewCommentText]  = useState('')
        
                                    //essa lib format do fns é usada para formatar datas. Na documentação tem todos os formatos especificados de formataç~es possíveis.
    const publishedDateFormatted = format(puplishAt, "d 'de' LLL 'às' HH:mm'h'", {locale: ptBR});
                                    //A lib fns usa do método formatDistanceToNow para calcular o intervalo de tempo da data publicada para o dia atual
    const publishedDistanceToNow = formatDistanceToNow(puplishAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    function handleAddComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        }) 
        
        setComments(commentsWithoutDeletedOne);
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <small>{author.occupation}</small>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={puplishAt.toISOString()}>{publishedDistanceToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph') {
                        return(<p key={line.content}>{line.content}</p>)
                    } else if(line.type == 'link') {
                        return(<p key={line.content}><a href="#">{line.content}</a></p>)
                    }
                })}
            </div>

            <form  onSubmit={handleAddComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Escreva seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <div className={styles.btnControl}>
                <button type='submit'>Publicar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(
                        <Comment
                        key={comment} 
                        content={comment}
                        deleteComment={deleteComment}
                        />  
                    ) 
                })}
            </div>
        </article>
    )
}