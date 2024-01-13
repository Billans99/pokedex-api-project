import React from 'react'

function Footer() {

    return(
      <div className="btns-container">
            <button className="prev-btn" onClick={() => {
                  setUrl(prevUrl)
              }}>Previous</button>
  
            <button className="next-btn" onClick={() => {
                  setUrl(nextUrl)
              }}>Next</button>
      </div>
    )
}

export default Footer