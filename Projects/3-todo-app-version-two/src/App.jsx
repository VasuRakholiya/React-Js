import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import todoItems from "./components/todoItems";

function App() {
    const todoItems = [{
            name : "Buy Milk",
            date : "4/10/2023"

        },
        {
            name : "Go to College",
            date : "4/10/2023"
        }
    ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <todoItems todoItems={todoItems}></todoItems>

    </center>
  );
}

export default App;