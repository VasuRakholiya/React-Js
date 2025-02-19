import React from 'react'
import styles from './display.module.css'

const Display = ({ displayVal }) => {
  return (
    <input className={styles.Display} type="text" value={displayVal} readOnly/>
  );
}

export default Display;
