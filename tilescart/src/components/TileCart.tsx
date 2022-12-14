import React, { useRef, useState } from 'react'
import Tile from '../data/Tile'
import NavBar from './NavBar';
import TileCard from './TileCard'

export default function TileCart() {
    const initialTiles: Tile[] = [
        {name: 'somany', model: 'nit-01', price: '200'},
        {name: 'johnson', model: 'nit-02', price: '100'},
        {name: 'hsil', model: 'nit-03', price: '300'},
        {name: 'clayhaus', model: 'nit-04', price: '400'},
    ]
    const [tiles, setTiles] = useState<Tile[]>(initialTiles);
    const nameRef = useRef<HTMLInputElement>(null);
    const modelRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    function addTile() {
        setTiles([...tiles, {
            name: nameRef.current?.value,
            model: modelRef.current?.value,
            price: priceRef.current?.value
        }]);
        console.log(tiles);
    }
    return (
        <div className='container'>
        <NavBar activate="tileCart"/>
        <ul className="list-group list-group-horizontal-sm">
            <li className='list-group-item'>
                <div className="container m-3 d-flex justify-content-center align-items-center">
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="name" className="form-control" ref={nameRef} placeholder='Name'/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="model" className="sr-only">Model</label>
                        <input type="name" className="form-control" ref={modelRef} placeholder='Model'/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="price" className="sr-only">Price</label>
                        <input type="name" className="form-control" ref={priceRef} placeholder='Price'/>
                    </div>
                    <button className="btn btn-primary mb-2" onClick={addTile}>Add Tile</button>
                </div>
            </li>
            {tiles.map((tile) => (
                <li className="list-group-item">
                    <TileCard name={tile.name} model={tile.model} price={tile.price}/>
                </li>
            ))}
        </ul>
        </div>
    )
}
