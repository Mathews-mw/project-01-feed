import { Post } from "./Post"

function App() {
  return (
    <div>
      <Post 
        author="Mathews" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo consectetur quis a ducimus possimus fuga amet explicabo voluptatibus magni pariatur recusandae, atque voluptatum optio eius asperiores. Numquam, accusantium sit."
      />
  
      <Post
        author="Carla"
        content="Um novo post aqui muito legal!" 
      />
    </div>
  )
}

export default App;

