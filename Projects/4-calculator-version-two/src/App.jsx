import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/display";
import Button from "./components/button";

function App() {
  const [caVal, setCaVal] = useState("");
  
  const onButtonClick = (value) => {
    if (value === 'c') {
      setCaVal('');
    } else if (value === '=') {
        const result = eval(caVal);
        setCaVal(result);
    }
    else {
      const newCaVal = caVal + value;
      setCaVal(newCaVal);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayVal={caVal} />
        <Button onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
