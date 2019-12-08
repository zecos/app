import React from "react";
import { InputForm } from './InputForm/InputForm'
import { InputMDForm } from "./InputMDForm/InputMDForm";
import styles from "./App.module.css"
import { theme } from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const App = () => {
  return (
  <div className={styles.App}>
    <h3>Basic Form</h3>
    <InputForm />
    <h3>MD Form</h3>
    <ThemeProvider theme={theme}>
      <InputMDForm />
    </ThemeProvider>
  </div>
  )
}

export default App