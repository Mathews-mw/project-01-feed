import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" alt="" />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/Mathews-mw.png" />
                <strong>Mathews Araujo</strong>
                <small>Web Dev</small>
            </div>
            
            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}