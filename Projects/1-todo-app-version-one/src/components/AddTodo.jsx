function AddTodo() {
  return (
    <div Class="container text-center">
      <div Class="row vs-row">
        <div Class="col-6"><input type="text" placeholder="Enter Todo Here" /></div>
        <div Class="col-4"><input type="date" /></div>
        <div Class="col-2"><button type="button" Class="btn btn-success vs-button">Adds</button></div>
      </div>
    </div>
  )
}
export default AddTodo;