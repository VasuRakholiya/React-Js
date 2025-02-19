import React from 'react'
import styles from './button.module.css'

const Button = ({ onButtonClick }) => {
  const ButtonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return (
    <div className={styles.container}>
      {ButtonNames.map((name) => {
        return (
          <button 
            key={name} 
            className={styles.button} 
            onClick={() => onButtonClick(name)}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default Button;
