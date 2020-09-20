import React from 'react';
import styles from './Buttons.module.scss';
import Rock from '../../images/icon-rock.svg';
import Paper from '../../images/icon-paper.svg';
import Scissors from '../../images/icon-scissors.svg';
export default function Buttons(props) {
  return (
    <div
      onClick={() => {
        if (props.play) {
          props.play(props.logo);
        }
      }}
      className={styles.position}
    >
      <div
        style={{
          backgroundColor: `${props.color}`,
          boxShadow: `0px 6px 0px ${props.shadow}`,
        }}
        className={styles.outerContainer}
      >
        <div className={styles.innerContainer}>
          <img
            alt='rock paper or scissors'
            src={
              props.logo === 'rock'
                ? Rock
                : props.logo === 'paper'
                ? Paper
                : props.logo === 'scissors'
                ? Scissors
                : ''
            }
          />
        </div>
      </div>
    </div>
  );
}
