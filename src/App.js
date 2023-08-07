import React, { useState } from "react"
import Square from "./components/Square"
import Counter from "./components/Counter"
import "./App.css"

const App = () => {

  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  const [count, setCount] = useState(5)
 

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    // set condition for if treasure location is the same as clicked index
    if (clickedSquare === treasureLocation){
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
      alert("You Win!")
      
    } else if (clickedSquare === bombLocation){
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
      alert("You Lose!")
      
    }else {
      updateBoard[clickedSquare] = "🌲"
      setBoard(updateBoard)
      setCount(count - 1)
    }
    
  }
  

  const restartGame = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
    setCount(5)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return <Square 
        square={square}
        index={index}
        key={index} 
        handleGamePlay={handleGamePlay} />
      })}
      </div>
      <br></br>
      <div className="counter">
        <Counter count={count}/>
      </div>
      <div className="button">
      <button onClick={restartGame}>Play Again</button>
      </div>
      
    </>
  )
}

export default App
