import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
const App = () => {
  function Clickme(){
    console.log("action done");
  }
  return (
    <div className="container">
      <div className="header"><Header/></div>
      <div className="body"><Body fun={Clickme}/></div>
      
      
    </div>
  )
}

export default App