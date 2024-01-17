import React from 'react'

const Search = (props) => {

    return(
        <>
        <div className="search-container">
            <p className="search-text">Search for Pokemon </p>
            <input className="search-bar" id="pokemon-search" type="text"></input>
            <button className="search-btn" onClick={() => {
                    props.searchPokemon()
                    }
                }>Search Pokemon</button>
        </div>
        </>
    )
}

export default Search