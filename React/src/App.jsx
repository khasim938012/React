import "./app.css";
import Tittle from "./Tittle.jsx";
import MsgBox from "./MsgBox.jsx"


function Description(){
  return <h3>I am the Description</h3>
}

function App(){
  return (<>
    <MsgBox username="Khasim" textColor="grey"></MsgBox>
    <Tittle></Tittle>
    <Description></Description>
  </>)
}

export default App;