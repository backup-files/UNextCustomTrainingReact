import React, { useEffect, useState } from 'react'
import TableCreator from '../tablec/tablec';
import AddTile from './AddTile';
import Tile from '../data/Tile';
import NavBar from './NavBar';

export default function TilesList() {
    const initialTiles: Tile[] = [
        {name: 'somany', model: 'nit-01', price: '200'},
        {name: 'johnson', model: 'nit-02', price: '100'},
        {name: 'hsil', model: 'nit-03', price: '300'},
        {name: 'clayhaus', model: 'nit-04', price: '400'},
    ]
    const [tiles, setTiles] = useState<Tile[]>(initialTiles);
    return (
        <div>
            <NavBar activate="tilesList"/>
            <div>TilesList</div>
            <TableCreator headers={['name', 'model', 'price']} data={tiles}/>
            <AddTile setTiles={setTiles} callback={() => console.log(tiles)}/>
        </div>
    )
}
