import Reacrt from "react"

const Counter = ({ count }) => {
    if (count === 0){
        alert("Game Over")
    }

    return (
        <>
            <h3>Guesses Left: {count}</h3>
        </>
    )
}

export default Counter