import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import './App.css'

function App() {
 let food = ['dal', 'green vegetable', 'roti', 'salad', 'milk', 'Ghee']
  //let food = [];

  // if (food.length ===0){
  //   return <h1>No food</h1>
  // }

  // below method is used to pass condition within objects

 //let Message = food.length === 0 ? <h3>I am still hungry </h3> : null;
  return (
    // react fragment is used to wrap multiple elements without adding extra nodes to the DOM
    <>
    <h1>Healthy Food</h1>
    <ErrorMessage items = {food}></ErrorMessage>
    <FoodItems items={food}></FoodItems>
    </>
  )
}

export default App
