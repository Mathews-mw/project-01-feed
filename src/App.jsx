import { Header } from "./components/Header";
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import { PostData } from './data/PostData';

import './global.css';
import styles from './App.module.css';

// author: { avatar: "", name: "", occupation: ""}
// puplishAt: Date
// content: string

function App() {
  return (
    <div>
     
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {PostData.map(post => {
            return(
              <Post
                key={post.id} 
                author = {post.author}
                content = {post.content}
                puplishAt = {post.puplishAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App;

