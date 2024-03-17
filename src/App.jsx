import React, { useContext } from 'react';
import Header from './components/header/Header';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Roadmap from './pages/Roadmap/Roadmap';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import DataContext from './context/DataContext';
import Loggedout from './pages/Loggedout/Loggedout';
import Signup from './pages/Signup/Signup';
import Forgot from './pages/Forgot/Forgot';
import Reset from './pages/Reset/Reset';
import ConfirmUser from './pages/confirmUser/ConfirmUser';

function App() {

  const { loggedUser } = useContext(DataContext);

  return (
    <>
      {
        loggedUser && 
        <>
          <Header />
          <Navbar />
        </>
      }
      <Routes>
        {
          !loggedUser &&
          <>
            <Route path='/' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset/:id' element={<Reset />} />
            <Route path='/confirm/:id' element={<ConfirmUser />} />
            <Route path='/*' element={<Loggedout />} />
          </>
        }
        {
          loggedUser && 
          <>
            <Route path='/' element={<Roadmap />} />
            <Route path='/class' element={<Roadmap />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
          </>
        }
      </Routes>
    </>
  )
}

export default App;
