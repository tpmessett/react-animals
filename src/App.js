import { useState } from 'react';
import AnimalShow from './AnimalShow';

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  const random = Math.floor(Math.random() * animals.length);
  return animals[random]
}

const renderedAnimals = animals.map((animal, index) => {
  // return AnimalShow component with type of animal and key of index
  
})

function App() {
  const [animals, setAnimals] = useState([])
  const handleClick = () => {
    setAnimals(
      [...animals, getRandomAnimal()]
    )
  }
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Animal: {animals}</div>
    </div>
  );
}

export default App;
