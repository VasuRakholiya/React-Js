import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import './App.css'
import Container from './components/Container'
import Foodinput from './components/Foodinput'
import { useState } from 'react'

function App() {
 
  let [food, setFood] = useState( []);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      let newFood = e.target.value
      setFood([...food, newFood]);
      e.target.value = '';
    }
  }
  //let food = [];

  // below method is used to pass condition within objects

  //let Message = food.length === 0 ? <h3>I am still hungry </h3> : null;
  return (
    // react fragment is used to wrap multiple elements without adding extra nodes to the DOM
    <>
    <Container>
      <h1 className='Heading'>Healthy Food</h1>
      <Foodinput handleKeyDown={onKeyDown}></Foodinput>
      <ErrorMessage items={food}></ErrorMessage>
      <FoodItems items={food}></FoodItems>
    </Container>
    {/* <Container>
      <p>
        Above is a list of food items. If the list is empty, I am still hungry. If the list is not empty, I am full.
      </p>
    </Container> */}
    </>
  )
}

export default App
