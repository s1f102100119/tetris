import type { NextPage } from 'next'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const COLORS = ['aqua', 'yellow', 'purple', 'blue', 'orange', 'green', 'red']

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #008080;
`
const Board = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  width: 80vh;
  height: 96vh;
  background-color: #ccc;
  border: 0.8vh solid;
  border-color: #ddd #666 #666 #ddd;
`
const GameBoard = styled.div`
  width: 42vh;
  height: 82vh;
  margin-bottom: 2vh;
  background-color: #888;
  border: 1vh solid;
  border-color: #666 #ddd #ddd #666;
`
const StateBoard = styled.div`
  width: 30vh;
  height: 90vh;
  margin-bottom: 2vh;
  background-color: #aaa;
  border: 1vh solid #666;
`
const TetrominoSquare = styled.div<{ num: number }>`
  display: inline-block;
  width: 4vh;
  height: 4vh;
  vertical-align: bottom;
  background-color: ${(props) =>
    1 <= props.num && props.num <= 7 ? COLORS[props.num - 1] : props.num === 9 ? '#777' : '#111'};
  border: 0.05vh solid #999;
`

const Home: NextPage = () => {
  const startBoard = [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //ここから下が画面に表示
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //ここまで
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  ]

  const boardSizeX = startBoard[0].length
  const boardSizeY = startBoard.length
  const tetrominoList = [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    [
      [2, 2],
      [2, 2],
    ],
    [
      [0, 3, 0],
      [3, 3, 3],
      [0, 0, 0],
    ],
    [
      [4, 0, 0],
      [4, 4, 4],
      [0, 0, 0],
    ],
    [
      [0, 0, 5],
      [5, 5, 5],
      [0, 0, 0],
    ],
    [
      [0, 0, 5],
      [5, 5, 5],
      [0, 0, 0],
    ],
    [
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0],
    ],
    [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0],
    ],
  ]
  const createTetromino = () => tetrominoList[Math.floor(Math.random() * tetrominoList.length)]

  const [board, setBoard] = useState(startBoard)
  const [tetromino, setTetromino] = useState(createTetromino())
  const [tetrominoX, setTetrominoX] = useState(1)
  const [tetrominoY, setTetrominoY] = useState(0)
  const [effect, setEffect] = useState(false)
  const [isMovingTetromino, setIsMovingTetromino] = useState(true)
  const [restCount, setRestCount] = useState(0)

  const overlayBoard = () => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    for (let y = 0; y < tetromino.length; y++) {
      for (let x = 0; x < tetromino[y].length; x++) {
        if (tetromino[y][x]) {
          newBoard[y + tetrominoY][x + tetrominoX] = tetromino[y][x]
        }
      }
    }
    return newBoard
  }

  const checkCollision = (movedX: number, movedY: number, mino: number[][], isCallByY = false) => {
    if (isCallByY) {
      if (boardSizeY < tetrominoY + mino.length) {
        return false
      }
    }
    if (movedX < 0 || boardSizeX < movedX + mino[0].length) {
      return false
    }
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    for (let y = 0; y < mino.length; y++) {
      for (let x = 0; x < mino[y].length; x++) {
        if (mino[y][x] > 0 && newBoard[y + movedY][x + movedX] > 0) {
          return false
        }
      }
    }
    return true
  }

  const rotateRight = (mino: number[][]) => mino[0].map((_, c) => mino.map((r) => r[c]).reverse())

  const afterFall = () => {
    setBoard(overlayBoard())
    setTetromino(createTetromino())
    setTetrominoX(1)
    setTetrominoY(0)
  }
  const viewBoard = useMemo(
    () =>
      overlayBoard()
        .slice(2, boardSizeY)
        .map((r) => r.filter((item) => item !== 9)),
    [tetrominoX, tetrominoY, tetromino]
  )
  const checkKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isMovingTetromino) {
        return
      }
      switch (event.key) {
        case 'ArrowUp': {
          const rotatedMino = rotateRight(tetromino)
          if (checkCollision(tetrominoX, tetrominoY, rotatedMino, true)) {
            setTetromino(rotatedMino)
          }
          break
        }
        case 'ArrowDown': {
          console.log('DOWN')
          let tmpY = tetrominoY
          while (checkCollision(tetrominoX, tmpY + 1, tetromino, true)) {
            tmpY++
          }
          setTetrominoY(tmpY)
          break
        }
        case 'ArrowRight':
          setTetrominoX((e) => (checkCollision(e + 1, tetrominoY, tetromino) ? e + 1 : e))
          break
        case 'ArrowLeft':
          setTetrominoX((e) => (checkCollision(e - 1, tetrominoY, tetromino) ? e - 1 : e))
          break
      }
    },
    [tetrominoY, tetromino, isMovingTetromino]
  )

  useEffect(() => {
    document.addEventListener('keydown', checkKeyDown, false)
    return () => {
      document.removeEventListener('keydown', checkKeyDown, false)
    }
  }, [tetrominoY, tetromino, isMovingTetromino])

  useEffect(() => {
    if (!isMovingTetromino) {
      afterFall()
      setIsMovingTetromino(true)
      setEffect(!effect)
    } else {
      if (checkCollision(tetrominoX, tetrominoY + 1, tetromino, true)) {
        setTetrominoY(tetrominoY + 1)
        setRestCount(0)
      } else {
        if (restCount > 1) {
          setRestCount(0)
          setIsMovingTetromino(false)
        } else {
          setRestCount((e) => e + 1)
        }
      }
      setTimeout(() => {
        setEffect(!effect)
      }, 500)
    }
  }, [effect])

  return (
    <Container>
      <Board>
        <GameBoard>
          {viewBoard.map((row, y) =>
            row.map((num, x) => <TetrominoSquare key={`${x}-${y}`} num={num}></TetrominoSquare>)
          )}
        </GameBoard>
        <StateBoard></StateBoard>
      </Board>
    </Container>
  )
}

export default Home
