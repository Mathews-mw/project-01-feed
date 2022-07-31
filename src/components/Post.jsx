import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatarPost} src="https://source.unsplash.com/random/400×400/?dogs" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Mathews Araujo</strong>
                        <small>Web Dev</small>
                    </div>
                </div>
                <time title='31 de julho às 17:53h' dateTime='2022-07-31 17:52:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href='#'>👉 jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
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
        </article>
    )
}