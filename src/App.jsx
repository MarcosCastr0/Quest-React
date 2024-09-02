import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/button/Button'
import UppercaseColloredText from './components/uppercasecolloredtext/UppercaseColloredText'

function App() {
  return (
    <>
      <div>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Quest React</h1>
      <div className="card">
        <UppercaseColloredText text="“ A vida é a soma das suas escolhas. ” Albert Camus" color="white" />
        <Button label="Baixar CV" />
      </div>
    </>
  )
}

export default App
