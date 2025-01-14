import ClockHeading from './Components/ClockHeading.jsx'
import ClockSlogun from './Components/ClockSlogun.jsx'
import CurrentTime from './Components/CurrentTime.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {


  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogun></ClockSlogun>
    <CurrentTime></CurrentTime>
  </center>
}

export default App
