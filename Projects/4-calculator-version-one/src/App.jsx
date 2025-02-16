import React from 'react'
import styles from './App.module.css'
import Display from './components/display'
import Button from './components/button'


function App() {
  return (
    <>
    <div className={styles.calculator}>
      <Display />
      <Button />
    </div>
    </>
  )
}

export default App
