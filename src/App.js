import React, { useState } from 'react';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import styles from './App.module.scss';
import ButtonContainer from './Components/ButtonContainer/ButtonContainer';
function App() {
  const [score, setScore] = useState(0);

  const playGame = (logo) => {
    let myNum;
    if (logo === 'rock') {
      myNum = 1;
    } else if (logo === 'paper') {
      myNum = 2;
    } else if ((logo = 'scissors')) {
      myNum = 3;
    }
    let random = Math.floor(Math.random() * Math.floor(3) + 1);

    if (myNum === random) {
      let newScore = score;
      setScore((newScore += 1));
    } else {
    }
  };

  return (
    <div className={styles.container}>
      <Scoreboard score={score} />
      <ButtonContainer play={playGame} />
    </div>
  );
}

export default App;
