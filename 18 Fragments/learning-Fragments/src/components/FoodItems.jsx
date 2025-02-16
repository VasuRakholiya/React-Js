import Item from "./Item";



const FoodItems = ({items}) => {

  return (<ul className="list-group">
    {/* map function is used to iterate over an array and return a new array. map function takes a callback function as an argument */}
    {items.map((item) => (
      <Item key={item} foodItem={item} handle={()=>console.log(`${item} bought`)}></Item>

    // passing functions  via props to child component this comunication is called parent to child communication
    
    ))}


  </ul>
  )
};
export default FoodItems;