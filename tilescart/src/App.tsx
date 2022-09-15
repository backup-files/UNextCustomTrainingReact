import React from 'react';
import logo from './logo.svg';
import './App.css';
import TilesList from './components/TilesList';
import Counter from './components/Counter';
import NameCounter from './components/NameCounter';
import TileCart from './components/TileCart';
import { Route, Routes } from 'react-router-dom';
import AddTile from './components/AddTile';
import TileCard from './components/TileCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TilesList/>}/>
      <Route path="/Counter" element={<Counter/>}/>
      <Route path="/NameCounter" element={<NameCounter/>}/>
      <Route path="/TileCart" element={<TileCart/>}/>
      <Route path="/TilesList" element={<TilesList/>}/>
    </Routes>
  );
}

export default App;
