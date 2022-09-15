import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export default function Products() {
  const navigate = useNavigate();
    return (
    <>
        <NavBar activate="products"/>
        <div>Products</div>
        <button className='btn btn-secondary' onClick={() => navigate('FeaturedProducts')}>Featured Products</button>
        <button className="btn btn-secondary" onClick={() => navigate('NewProducts')}>New Products</button>
        <Outlet/>
    </>
  )
}
