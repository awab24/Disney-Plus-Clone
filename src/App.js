import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {Route, Routes } from "react-router-dom"

// import {
//   createBrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Await
// } from "react-router-dom";
import Detail from './Components/Detail';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

<Route path="/login" element={<Login />} />
<Route path="/" element={<Home />} />
<Route path="/detail" element={<Detail />} />

</Routes>

    </div>
  );
}

export default App;
