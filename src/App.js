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

  const playGame = (choice) => {
    let gameResult = GameLogic(choice);
    setHouse(gameResult.houseChoice);
    setMyChoice(gameResult.myChoice);

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
        <div>
          <Button logo={myChoice} />
          <button onClick={() => setGameOver(false)}>reset</button>
          <Button logo={getHouseChoice(house)} />
        </div>
      ) : (
        <ButtonContainer play={playGame} />
      )}
      {/* <button>Rules</button> */}
    </div>
  );
}

export default App;
