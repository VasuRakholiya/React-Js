import TodoItem from "./TodoItem";

import React from 'react'

const todoItems = ({todoItems}) => {
  return (
    <div className="items-container">
    {todoItems.map((todoItem) => (
      <TodoItem todoName={todoItem.name} todoDate={todoItem.date} />
    ))}
</div>
  )
}

export default todoItems
