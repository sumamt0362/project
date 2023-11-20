import React from 'react'
import Navigation from './Components/Navigation'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import  Todolist from'./Components/TodoList'
import NavBar from './Components/NavBar'
const App = () => {
  return (
    <div>
      <Router>
        <div>
      <NavBar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/todolist' element={<Todolist/>}/>

    </Routes>
    </Router>
    </div>
  )
}

export default App