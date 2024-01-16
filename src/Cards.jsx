
import React from 'react'
 /*import pokeAvatar from 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' */

// Pokemon profile card: includes container, image, and type

const Cards = ({ pokemon, loading }) => { 
    console.log(pokemon)

    const abilityUrlArray = []

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
                            <h3 className="name">{item.name}</h3>

                            <p className="typeInfo"> Type -
                                {item.types.map((type) => <p>{type.type.name}</p>)}
                            </p>

                            <p className="abilityInfo">Abilities -
                                {item.abilities.map((ability) => <p>{ability.ability.name}</p>)}
                            </p>

                            <p className="base-stats-container">Base stats -
                                {item.stats.map((stat) => <p className="base-stats-info"> {stat.stat.name}: {stat.base_stat}</p>)}
                            </p>
                        

                            
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