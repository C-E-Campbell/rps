import React from 'react';
import Button from '../Buttons/Buttons';
import styles from './ButtonContainer.module.scss';
export default function ButtonContainer(props) {
  return (
    <div className={styles.container}>
      <Button
        play={props.play}
        shadow={'#CBA70D'}
        color={'rgb(255, 221, 27)'}
        logo={'rock'}
      />
      <Button
        play={props.play}
        shadow={'#9C250E'}
        color={'rgb(204, 34, 22)'}
        logo={'paper'}
      />
      <Button
        play={props.play}
        shadow={'#1D5D96'}
        color={'rgb(30, 120, 172)'}
        logo={'scissors'}
      />
    </div>
  );
}
