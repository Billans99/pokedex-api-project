import React from 'react'
import logo from './assets/pokedex-paradise-logo.png'

// Header used in all pages of the app, includes logo and brand name
function Header() {
    return(
        <>
            <div className="heading-container">
                <img className="logo" src={logo} alt="Pokedex Paradise logo"></img>
                <h1 className ="heading">Pokedex Paradise</h1>
            </div>
        </>
    )
}

export default Header