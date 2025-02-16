import React from 'react'
import styles from './button.module.css'

const button = () => {
  const ButtonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return (
    <div className={styles.container}>
      {ButtonNames.map((name) => {
        return <button className={styles.button}>{name}</button>
      })}
    </div>
  )
}

export default button
