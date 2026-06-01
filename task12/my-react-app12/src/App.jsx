import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  function checkWinner(board) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== "");

  function handleClick(index) {
    if (board[index] !== "" || winner) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? "X" : "O";

    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  }

  return (
    <div className="app">
      <h1>XO Game</h1>

      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : isDraw ? (
        <h2>Game Draw!</h2>
      ) : (
        <h2>Current Player: {isXTurn ? "X" : "O"}</h2>
      )}

      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;