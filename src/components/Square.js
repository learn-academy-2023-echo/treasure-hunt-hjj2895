import React, { useState } from "react"

const Square = ({ square, index, handleGamePlay }) => {

  const handleClick = () => {
    handleGamePlay(index)
    
  }

  return (
    <div>
      <div className="square" onClick={handleClick}>{square}</div>
      
     
    
      
    </div>
  )
}
export default Square
