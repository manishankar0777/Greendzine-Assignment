import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Employee from './components/Employee'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path='/employee' element={<Employee/>}/>
    </Routes>
  </BrowserRouter>
)

export default App
