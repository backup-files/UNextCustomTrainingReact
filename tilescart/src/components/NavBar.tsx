import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavBar(props: any) {
    const activate = props.activate;
    const navigate = useNavigate();
    useEffect(() => {
        const element: any = document.getElementById(activate);
        element.className = "nav-item active";
    }, [activate])
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <a href="#" className="navbar-brand mb-0 h1">TilesKart</a>
        <ul className="navbar-nav mr-auto">
            {/* <li id="addTile" className="nav-item">
                <a href="/AddTile" className="nav-link">Add Tile</a>
            </li> */}
            <li id="counter" className="nav-item" aria-label='check out counter'>
                <a href="/Counter" className="nav-link">Counter</a>
            </li>
            <li id="nameCounter" className="nav-item">
                <a href="/NameCounter" className="nav-link">NameCounter</a>
            </li>
            {/* <li id="tileCard" className="nav-item">
                <a href="/TileCard" className="nav-link">TileCard</a>
            </li> */}
            <li id="tileCart"className="nav-item">
                <a href="/TileCart" className="nav-link">TileCart</a>
            </li>
            <li id="tilesList" className="nav-item">
                <a href="/TilesList" className="nav-link">TilesList</a>
            </li>
            <li id="products" className="nav-item">
                <a href="/Products" className="nav-link">Products</a>
            </li>
            <li id="get" className="nav-item">
                <a href="/Get" className="nav-link">Get</a>
            </li>
            <li id="counter" className="nav-item">
                <button className="btn btn-primary" onClick={() => {
                    navigate("/Counter");
                }}>Counter</button>
            </li>
        </ul>
    </nav>
  )
}
