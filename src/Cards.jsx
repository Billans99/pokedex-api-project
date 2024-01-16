
import React from 'react'
 /*import pokeAvatar from 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' */

// Pokemon profile card: includes container, image, and type

const Cards = ({ pokemon, loading }) => { 

    const getTypeColor = (typeName) => {
        switch (typeName) {
            case "normal":
                return "#A8A77A";
            case "fire":
                return "#EE8130";
            case "water":
                return "#6390F0";
            case "electric":
                return "#F7D02C";
            case "grass":
                return "#7AC74C";
            case "ice":
                return "#96D9D6";
            case "fighting":
                return "#C22E28";
            case "poison":
                return "#A33EA1";
            case "ground":
                return "#E2BF65";
            case "flying":
                return "#A98FF3";
            case "psychic":
                return "#F95587";
            case "bug":
                return "#A6B91A";
            case "rock":
                return "#B6A136";
            case "ghost":
                return "#735797";
            case "dragon":
                return "#6F35FC";
            case "dark":
                return "#705746";
            case "steel":
                return "#B7B7CE";
            case "fairy":
                return "#D685AD";
            default:
                return "#000000";
        }} 

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

                            <p className="typeInfo"> Type - </p>
                                

                            {item.types.map((type) => <p className="typeColor" style={{ color: getTypeColor(type.type.name)}}>
                                {type.type.name}
                                </p>
                                )}

                        

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