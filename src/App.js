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
import Footer from './components/Footer/Footer';
import Food from './components/Food/Food';


function App() {
  return (
    <div >
      <Header></Header>
      <TopPanel></TopPanel>
      <Food></Food>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
