import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css'

function App() {
  return (
    <div>
     
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post 
          author="Mathews" 
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo consectetur quis a ducimus possimus fuga amet explicabo voluptatibus magni pariatur recusandae, atque voluptatum optio eius asperiores. Numquam, accusantium sit."
          />
  
          <Post
          author="Carla"
          content="Um novo post aqui muito legal!" 
          />
        </main>
      </div>

    </div>
  )
}

export default App;

