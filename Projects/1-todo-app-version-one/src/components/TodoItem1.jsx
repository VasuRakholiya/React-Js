function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";

  return (
    <div Class="container">
      <div Class="row vs-row">
        <div Class="col-6">{todoName}</div>
        <div Class="col-4">{todoDate}</div>
        <div Class="col-2">
          <button type="button" Class="btn btn-danger kg-button vs-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;