import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkWinner, checkEndGame} from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { TurnSquare } from './components/TurnSquare'
import { BoardGame } from './components/Board'
import { saveGameToStorage, resetGameStorage } from './logic/storage/storage'


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) :
    Array(9).fill(null) // tablero
  })
    
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x // turno
  })

  const [winner, setWinner] = useState(null) // ganador

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetGameStorage()
  }

  function updateBoard(index) {
    // chequeo si ya hay un valor en la casilla, si es así no hago nada
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    saveGameToStorage(newBoard, newTurn)
    
    // reviso si hay ganador

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }


  return (
    <main className='board'>                                          
      <h1>Tic Tac Toe GAME</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <BoardGame board={board} updateBoard={updateBoard}/>
      <TurnSquare turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
