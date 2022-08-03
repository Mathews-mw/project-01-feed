import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css'

export function Post({ author, puplishAt, content }) {
        
                                    //essa lib format do fns é usada para formatar datas. Na documentação tem todos os formatos especificados de formataç~es possíveis.
    const publishedDateFormatted = format(puplishAt, "d 'de' LLL 'às' HH:mm'h'", {locale: ptBR});
                                    //A lib fns usa do método formatDistanceToNow para calcular o intervalo de tempo da data publicada para o dia atual
    const publishedDistanceToNow = formatDistanceToNow(puplishAt, {
        locale: ptBR,
        addSuffix: true
    })

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
                        return(<p>{line.content}</p>)
                    } else if(line.type == 'link') {
                        return(<p><a href="#">{line.content}</a></p>)
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Escreva seu comentário'
                />
                <div className={styles.btnControl}>
                <button type='submit'>Publicar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}