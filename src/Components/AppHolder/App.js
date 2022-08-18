import React from 'react'
import { AuthProvider } from '../../Context/AuthContext';
import Home from '../HomePages/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            {/* <Route path='/login' element={<Login/>} /> */}
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App;
