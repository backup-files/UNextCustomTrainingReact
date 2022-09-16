import React from 'react'
import DisplayLocations from '../service/LocationsService'
import NavBar from './NavBar'

export default function Locations() {
  return (
    <>
        <NavBar activate="locations"/>
        <div>Locations</div>
        <DisplayLocations/>
    </>
  )
}
