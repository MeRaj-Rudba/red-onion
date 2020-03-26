import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import TopPanel from './components/TopPanel/TopPanel';


function App() {
  return (
    <div >
      <Header></Header>
      <TopPanel></TopPanel>
      
    </div>
  );
}

export default App;
