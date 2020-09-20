import React, { useState } from 'react';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import styles from './App.module.scss';
import ButtonContainer from './Components/ButtonContainer/ButtonContainer';
import { GameLogic } from './playGame';
function App() {
  const [score, setScore] = useState(0);
  const [house, setHouse] = useState('');
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

  return (
    <div className={styles.container}>
      <Scoreboard score={score} />
      {gameOver ? (
        <div>
          <button onClick={() => setGameOver(false)}>reset</button>
        </div>
      ) : (
        <ButtonContainer play={playGame} />
      )}
    </div>
  );
}

export default App;
