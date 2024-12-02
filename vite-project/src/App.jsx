import ButtonA from './ButtonA.jsx'
import ButtonB from './ButtonB.jsx'
import './App.css'

function App() {

  const cssExdens = {
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "8px"
  }


  return (
    <>
      <ButtonA />
      <ButtonB />
      <btton style={{backgroundColor:"white", color:"black", padding:"10px"}}>Button C</btton>
      <button style={cssExdens} >Button D</button>
      <button style={{...cssExdens, color:"black"}}>Button D-E</button>
    </>
  )
}

export default App
