import React, { useState } from 'react';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import styles from './App.module.scss';
import ButtonContainer from './Components/ButtonContainer/ButtonContainer';
import Button from './Components/Buttons/Buttons.js';
import { GameLogic } from './playGame';
function App() {
  const [score, setScore] = useState(0);
  const [house, setHouse] = useState(0);
  const [myChoice, setMyChoice] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState(false);

  const playGame = (choice) => {
    let gameResult = GameLogic(choice);
    setHouse(gameResult.houseChoice);
    setMyChoice(gameResult.myChoice);
    setResult(gameResult.result);
    if (gameResult.result) {
      let newScore = score + 1;
      setScore(newScore);
    }
    setGameOver(true);
  };

  const getHouseChoice = (house) => {
    if (house === 1) {
      return 'rock';
    } else if (house === 2) {
      return 'paper';
    } else if (house === 3) {
      return 'scissors';
    }
  };

  return (
    <div className={styles.container}>
      <Scoreboard score={score} />
      {gameOver ? (
        <div className={styles.resultContainer}>
          <div className={styles.choiceContainer}>
            <h2>You Picked</h2>
            <Button
              play={null}
              color={
                myChoice === 'rock'
                  ? 'rgb(255, 221, 27)'
                  : myChoice === 'paper'
                  ? 'rgb(204, 34, 22)'
                  : myChoice === 'scissors'
                  ? 'rgb(30, 120, 172)'
                  : ''
              }
              shadow={
                myChoice === 'rock'
                  ? '#CBA70D'
                  : myChoice === 'paper'
                  ? '#9C250E'
                  : myChoice === 'scissors'
                  ? '#1D5D96'
                  : ''
              }
              logo={myChoice}
            />
          </div>

          <div className={styles.resetContainer}>
            <h2>
              {result
                ? 'YOU WIN'
                : result === false
                ? 'NOT THIS TIME'
                : result === null
                ? 'DRAW!'
                : ''}
            </h2>
            <button
              className={styles.resetBtn}
              onClick={() => setGameOver(false)}
            >
              Play Again
            </button>
          </div>
          <div className={styles.choiceContainer}>
            <h2>House Picked</h2>
            <Button
              play={null}
              color={
                house === 1
                  ? 'rgb(255, 221, 27)'
                  : house === 2
                  ? 'rgb(204, 34, 22)'
                  : house === 3
                  ? 'rgb(30, 120, 172)'
                  : ''
              }
              shadow={
                house === 1
                  ? '#CBA70D'
                  : house === 2
                  ? '#9C250E'
                  : house === 3
                  ? '#1D5D96'
                  : ''
              }
              logo={getHouseChoice(house)}
            />
          </div>
        </div>
      ) : (
        <ButtonContainer play={playGame} />
      )}
      {/* <button>Rules</button> */}
    </div>
  );
}

export default App;
