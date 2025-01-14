import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" Class="btn btn-primary">Primary</button>
      <button type="button" Class="btn btn-secondary">Secondary</button>
      <button type="button" Class="btn btn-success">Success</button>
      <button type="button" Class="btn btn-danger">Danger</button>
      <button type="button" Class="btn btn-warning">Warning</button>
      <button type="button" Class="btn btn-info">Info</button>
      <button type="button" Class="btn btn-light">Light</button>
      <button type="button" Class="btn btn-dark">Dark</button>
      <button type="button" Class="btn btn-link">Link</button>
    </div>
  )
}

export default App
