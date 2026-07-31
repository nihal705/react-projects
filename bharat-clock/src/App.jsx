import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css'

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  )
}

export default App
