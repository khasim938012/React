import "./app.css";


function Tittle(){
  return <h1>I am the Tittle</h1>
}

function Description(){
  return <h3>I am the Description</h3>
}

function App(){
  return (<div>
    <Tittle></Tittle>
    <Description></Description>
  </div>)
}

export default App;