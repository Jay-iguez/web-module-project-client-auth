import React from 'react';
import './App.css';
import { NavigationBar, MainBody, NavigationLinks } from './styled-components/styled';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'

//Protected Imports/Routes
import AddFriend from './protected/AddFriend';
import ProtectedRoutes from './protected/ProtectedRoutes'
import FriendsList from './protected/FriendsList';

function App() {
  
  return (
    <MainBody>
      <NavigationBar>
        <h2>FRIENDS DATABASE</h2>
        <NavigationLinks>
          <Link className={'link-navigation-item'} to={'/'}>LOGIN</Link>
          <Link className={'link-navigation-item'} to={'/friends'}>FRIENDS LIST</Link>
          <Link className={'link-navigation-item'} to={'/add'}>ADD FRIEND</Link>
          <Link className={'link-navigation-item'} to={'/logout'}>LOG OUT</Link>
        </NavigationLinks>
      </NavigationBar>

      <Routes>
        <Route path={'/'} element={<Login />}></Route>
        <Route element={<ProtectedRoutes />}>
            <Route path={'/add'} element={<AddFriend />}></Route>
            <Route path={'/friends'} element={<FriendsList />}></Route>
        </Route>
      </Routes>
    </MainBody>
  )
}

export default App;
