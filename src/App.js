import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'

function App() {
  //<Login />
  return (
    <>
      <nav>
      <Link to={'/'}>Login</Link>
      <Link to={'/friends'}>Friends List</Link>
      <Link to={'/friends/add'}>Add Friend</Link>
      <Link to={'/logout'}>Log Out</Link>
      </nav>
      <Routes>
        <Route path={'/'} element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App;
