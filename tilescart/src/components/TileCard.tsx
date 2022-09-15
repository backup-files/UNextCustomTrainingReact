import React from 'react'
import NavBar from './NavBar'

export default function TileCard(props: any) {
    return (
        <div className="card">
            {/* <NavBar activate="tileCard"/> */}
            <div className="card-header">
                Tile
            </div>
            <div className="card-body">
                <div className='container d-flex justify-content-between align-items-center'>
                    <span className="card-title">{props.name}</span>
                    <span className="card-text">{props.model}</span>
                    <span className="badge badge-primary">${props.price}</span>
                </div>
            </div>
        </div>
    )
}

