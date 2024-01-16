import { UseState } from './UseState.js'
import { ClassState } from './ClassState.js'
import './App.css'

function App () {
  return (
    <div className="App">
      <UseState name={'Prueba Estado'}/>
      <ClassState name={'Prueba Estado'}/>
    </div>
  )
}

export default App
