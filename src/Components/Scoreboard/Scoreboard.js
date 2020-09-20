import React from 'react';
import styles from './Scoreboard.module.scss';
export default function Scoreboard(props) {
  return (
    <section className={styles.container}>
      <div className={styles.titleBox}>
        <h1>
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </h1>
      </div>
      <div className={styles.scoreBox}>
        <h3>SCORE</h3>
        <h2>{props.score}</h2>
      </div>
    </section>
  );
}
