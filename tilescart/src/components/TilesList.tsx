import React, { useState } from 'react'
import TableCreator from '../tablec/tablec';

export default function TilesList() {
    const initialTiles = [
        {name: 'somany', model: 'nit-01', price: 200},
        {name: 'johnson', model: 'nit-02', price: 100},
        {name: 'hsil', model: 'nit-03', price: 300},
        {name: 'clayhaus', model: 'nit-04', price: 400},
    ]
    const [tiles, setTiles] = useState(initialTiles);

    return (
        <>
            <div>TilesList</div>
            <ol>
                {tiles.map((tile) => <li>{`${tile.name}, ${tile.model}, ${tile.price}`}</li>)}
            </ol>
            <TableCreator headers={['name', 'model', 'price']} data={initialTiles}/>
        </>
    )
}
