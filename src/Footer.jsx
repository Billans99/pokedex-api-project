import React from 'react'

const Footer = (props) => {
  return(
    <div className="btns-container">
      {/* On click, runs loadPreviousPokemon function, if prevUrl is truthy it renders, if falsy it doesn't*/}
      {props.prevUrl && 
        <button className="prev-btn" onClick={props.loadPreviousPokemon}>
          Previous
        </button>
      }
  
      {/* On click, runs loadNextPokemon function */}
      <button className="next-btn" onClick={props.loadNextPokemon}>
        Next
      </button>
    </div>
  )
}

export default Footer