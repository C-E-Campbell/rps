import React from 'react';
import ReactDOM from 'react-dom';
import styles from './RulesPortal.module.scss';
export default function RulesPortal({ children, open, close }) {
  return open
    ? ReactDOM.createPortal(
        <div className={styles.container} onClick={() => close()}>
          {children}
        </div>,
        document.getElementById('rules')
      )
    : null;
}
