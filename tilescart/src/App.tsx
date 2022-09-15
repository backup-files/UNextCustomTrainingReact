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
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TilesList/>}/>
      <Route path="/Counter" element={<Counter/>}/>
      <Route path="/NameCounter" element={<NameCounter/>}/>
      <Route path="/TileCart" element={<TileCart/>}/>
      <Route path="/TilesList" element={<TilesList/>}/>
      <Route path="/Products" element={<Products/>}>
        <Route path="FeaturedProducts" element={<FeaturedProducts/>}/>
        <Route path="NewProducts" element={<NewProducts/>}/>
      </Route>
    </Routes>
  );
}

export default App;
