import React from 'react'
import './app.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    {/* <Home/>
    <Main/>
    <Footer/> */}
    <Header/>
    <Routes>
    <Route path='/' element={Home}></Route>
    </Routes>
    </>
  )
}

export default App