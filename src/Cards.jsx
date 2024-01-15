
import React from 'react'
 /*import pokeAvatar from 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' */

// Pokemon profile card: includes container, image, and type

const Cards = ({ pokemon, loading }) => { 
    console.log(pokemon)

    return(
    <> 
    {
        loading ? <h1>Loading...</h1> : 
        pokemon.map((item) => {
            return(
                <>
                    <div className="card-container"> 
                        <img className="pokeImage" src={item.sprites.front_default} alt="Pokemon character image">
                        </img>
                        <div className="info-container">
                            <h2 className="id">{item.id}</h2>
                            <h3 className="name">{item.name}</h3>
                            {item.types.map((type) => <h3>{type.type.name}</h3>)}
                            <p>Abilities -
                                {item.abilities.map((ability) => <p>{ability.ability.name}</p>)}
                            </p>
                            {/* const abilityUrlArray = {item.abilities.map((ability) => ability.ability.url)} */}

                             {/* {item.abilities.map((ability) => <p>{ability.ability.url}</p>)} */}

                        </div>
                    </div> 
                </>
            )
        })
    }
  
    </>
    )
}

export default Cards