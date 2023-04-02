import { useState } from 'react';

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  const random = Math.floor(Math.random() * animals.length);
  return animals[random]
}

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
