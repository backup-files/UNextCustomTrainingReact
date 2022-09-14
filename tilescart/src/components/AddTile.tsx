import React, { useRef } from 'react'
import Tile from '../data/Tile';

export default function AddTile(props: any) {
    const nameRef = useRef<HTMLInputElement>(null);
    const modelRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    function addTileButtonPressed(event: any) {
        // event.preventDefault();
        const tile: Tile = {
            name: nameRef.current?.value,
            model: modelRef.current?.value,
            price: priceRef.current?.value
        }
        props.setTiles((prev: any) => ([...prev, tile]));
        console.log('from addTileButtonPressed', tile);
        props.callback();
    }
    return (
        <>
            <div>AddTile</div>
            <form>
                <div>Name: <input type='text' ref={nameRef}/></div>
                <div>Model: <input type='text' ref={modelRef}/></div>
                <div>Price: <input type='text' ref={priceRef}/></div>
            </form>
            <input type='submit' onClick={addTileButtonPressed} name='add tile'/>
        </>
    )
}
