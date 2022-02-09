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
  background-color: black;
  border: 1vh solid;
  border-color: #666 #ddd #ddd #666;
`
const TetrominoSquare = styled.div<{ num: number }>`
  display: inline-block;
  width: 4vh;
  height: 4vh;
  vertical-align: bottom;
  background-color: ${(props) =>
    1 <= props.num && props.num <= 7 ? COLORS[props.num - 1] : props.num === 9 ? '#777' : '#111'};
  border: 0.005vh solid #999;
`
const StateBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vh;
  height: 90vh;
  margin-bottom: 2vh;
  background-color: #aaa;
  border: 1vh solid #666;
`
const NextTetrominoView = styled.div`
  display: inline-block;
  width: 18vh;
  height: 18vh;
  background-color: black;
  border: 1vh solid black;
`
const Home: NextPage = () => {
  const startBoard = [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
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
  // prettier-ignore
  const tetrominoList = [
    [
      [[0, 0, 0, 0], [1, 1, 1, 1],],
      [[0, 1],[0, 1],[0, 1],[0, 1],],
      [[0, 0, 0, 0], [1, 1, 1, 1],],
      [[0, 1],[0, 1],[0, 1],[0, 1],],
    ],
    [
      [[2, 2],[2, 2]],
      [[2, 2],[2, 2]],
      [[2, 2],[2, 2]],
      [[2, 2],[2, 2]],
    ],
    [
      [[0, 3, 0],[3, 3, 3],[0, 0, 0]],
      [[0, 3, 0],[0, 3, 3],[0, 3, 0]],
      [[0, 0, 0],[3, 3, 3],[0, 3, 0]],
      [[0, 3, 0],[3, 3, 0],[0, 3, 0]],
    ],
    [
      [[4, 0, 0],[4, 4, 4],[0, 0, 0]],
      [[0, 4, 4],[0, 4, 0],[0, 4, 0]],
      [[0, 0, 0],[4, 4, 4],[0, 0, 4]],
      [[0, 0, 4],[0, 0, 4],[0, 4, 4]],
    ],
    [
      [[0, 0, 5],[5, 5, 5],[0, 0, 0]],
      [[0, 5, 0],[0, 5, 0],[0, 5, 5]],
      [[0, 0, 0],[5, 5, 5],[5, 0, 0]],
      [[5, 5, 0],[0, 5, 0],[0, 5, 0]],
    ],
    [
      [[0, 6, 6],[6, 6, 0],[0, 0, 0]],
      [[6, 0, 0],[6, 6, 0],[0, 6, 0]],
      [[0, 6, 6],[6, 6, 0],[0, 0, 0]],
      [[6, 0, 0],[6, 6, 0],[0, 6, 0]],
    ],
    [
      [[7, 7, 0],[0, 7, 7],[0, 0, 0]],
      [[0, 7, 0],[7, 7, 0],[7, 0, 0]],
      [[7, 7, 0],[0, 7, 7],[0, 0, 0]],
      [[0, 7, 0],[7, 7, 0],[7, 0, 0]],
    ],
  ]
  const createTetromino = () => {
    return { mino: tetrominoList[Math.floor(Math.random() * tetrominoList.length)], angle: 0 }
  }

  const [board, setBoard] = useState(startBoard)
  const [nextTetrominoBoard, setNextTetrominoBoard] = useState(
    Array.from(new Array(4), () => new Array(4).fill(0))
  )
  const [tetromino, setTetromino] = useState(createTetromino())
  const [nextTetromino, setNextTetromino] = useState(createTetromino())
  const [tetrominoX, setTetrominoX] = useState(1)
  const [tetrominoY, setTetrominoY] = useState(0)
  const [effect, setEffect] = useState(false)
  const [isMovingTetromino, setIsMovingTetromino] = useState(true)
  const [restCount, setRestCount] = useState(0)
  const [lineCount, setLineCount] = useState(0)

  const overlayBoard = () => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    for (let y = 0; y < tetromino.mino[tetromino.angle].length; y++) {
      for (let x = 0; x < tetromino.mino[tetromino.angle][y].length; x++) {
        if (tetromino.mino[tetromino.angle][y][x]) {
          newBoard[y + tetrominoY][x + tetrominoX] = tetromino.mino[tetromino.angle][y][x]
        }
      }
    }
    return newBoard
  }

  const checkCollision = (movedX: number, movedY: number, mino: number[][], isCallByY = false) => {
    if (isCallByY) {
      if (boardSizeY < movedY + mino.length) {
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
  const viewBoard = useMemo(
    () =>
      overlayBoard()
        .slice(3, boardSizeY)
        .map((r) => r.filter((item) => item !== 9)),
    [tetrominoX, tetrominoY, tetromino]
  )
  const nextMinoBoard = useCallback(() => {
    const newBoard: number[][] = Array.from(new Array(4), () => new Array(4).fill(0))
    for (let y = 0; y < nextTetromino.mino[tetromino.angle].length; y++) {
      for (let x = 0; x < nextTetromino.mino[tetromino.angle][y].length; x++) {
        newBoard[y][x] = nextTetromino.mino[tetromino.angle][y][x]
      }
    }
    setNextTetrominoBoard(newBoard)
  }, [nextTetromino])

  const rotateAngleRight = (angle: number) => (angle < 3 ? angle + 1 : 0)
  const rotateAngleLeft = (angle: number) => (0 < angle ? angle - 1 : 3)

  const checkKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isMovingTetromino) {
        return
      }
      switch (event.key) {
        case 'ArrowUp': {
          if (restCount > 1) {
            return
          }
          const rotatedAngle = rotateAngleRight(tetromino.angle)
          if (checkCollision(tetrominoX, tetrominoY, tetromino.mino[rotatedAngle], true)) {
            setTetromino({ ...tetromino, angle: rotatedAngle })
          }
          break
        }
        case 'ArrowDown': {
          let tmpY = tetrominoY
          while (checkCollision(tetrominoX, tmpY + 1, tetromino.mino[tetromino.angle], true)) {
            tmpY++
          }
          setTetrominoY(tmpY)
          setRestCount(99)
          break
        }
        case 'ArrowRight':
          setTetrominoX((e) =>
            checkCollision(e + 1, tetrominoY, tetromino.mino[tetromino.angle]) ? e + 1 : e
          )
          break
        case 'ArrowLeft':
          setTetrominoX((e) =>
            checkCollision(e - 1, tetrominoY, tetromino.mino[tetromino.angle]) ? e - 1 : e
          )
          break
      }
    },
    [tetromino, tetrominoX, tetrominoY, isMovingTetromino]
  )

  useEffect(() => {
    document.addEventListener('keydown', checkKeyDown, false)
    if (!checkCollision(tetrominoX, tetrominoY, tetromino.mino[tetromino.angle])) {
      setTetromino({ ...tetromino, angle: rotateAngleLeft(tetromino.angle) })
    }
    return () => {
      document.removeEventListener('keydown', checkKeyDown, false)
    }
  }, [tetromino, tetrominoX, tetrominoY, isMovingTetromino])

  const afterFall = () => {
    const ovelBoard = overlayBoard()
    const newBoard: number[][] = []
    for (let row = 0; row < ovelBoard.length; row++) {
      if (ovelBoard[row].every((r) => r > 0) && !ovelBoard[row].every((r) => r === 9)) {
        setLineCount((e) => e + 1)
        newBoard.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9])
      } else {
        newBoard.push(ovelBoard[row])
      }
    }
    setBoard(newBoard)
    setTetromino(nextTetromino)
    setNextTetromino(createTetromino())
    setTetrominoX(1)
    setTetrominoY(0)
  }

  useEffect(() => {
    if (!isMovingTetromino) {
      afterFall()
      setIsMovingTetromino(true)
      setEffect(!effect)
    } else {
      nextMinoBoard()
      if (checkCollision(tetrominoX, tetrominoY + 1, tetromino.mino[tetromino.angle], true)) {
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
      }, 300)
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
        <StateBoard>
          <NextTetrominoView>
            {nextTetrominoBoard.map((row, y) =>
              row.map((num, x) => <TetrominoSquare key={`${x}-${y}`} num={num}></TetrominoSquare>)
            )}
          </NextTetrominoView>
        </StateBoard>
      </Board>
    </Container>
  )
}

export default Home
