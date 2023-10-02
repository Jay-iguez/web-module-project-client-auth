import React from 'react';
import './App.css';
import { NavigationBar, MainBody, NavigationLinks } from './styled-components/styled';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'


/**
 * const all = document.querySelectorAll('*')
all.forEach(element => {
  element.style.border = '1px solid black'
})
 * 
 */

function App() {
  //<Login />
  return (
    <MainBody>
      <NavigationBar>
        <h1>Friends Database</h1>
        <NavigationLinks>
          <Link className={'link-navigation-item'} to={'/'}>Login</Link>
          <Link className={'link-navigation-item'} to={'/friends'}>Friends List</Link>
          <Link className={'link-navigation-item'} to={'/friends/add'}>Add Friend</Link>
          <Link className={'link-navigation-item'} to={'/logout'}>Log Out</Link>
        </NavigationLinks>
      </NavigationBar>

      <Routes>
        <Route path={'/'} element={<Login />}></Route>
      </Routes>
    </MainBody>
  )
}

export default App;
