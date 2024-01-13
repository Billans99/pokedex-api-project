import React from 'react'

function Footer(props) {
console.log("props", props)
    return(
      <div className="btns-container">
        {/* On click, runs loadLessPokemon function */}
            <button className="prev-btn" onClick={() => {
                  props.loadPreviousPokemon()
              }}>Previous</button>
  
        {/* On clock, runs loadMorePokemon function */}
            <button className="next-btn" onClick={() => {
                  props.loadNextPokemon() 
              }}>Next</button>
      </div>
    )
}

export default Footer