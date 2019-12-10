/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { InputForm } from './InputForm/InputForm'
import { InputMDForm } from "./InputMDForm/InputMDForm";
import styles from "./App.module.css"
import { theme } from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SimpleForm } from "./SimpleForm/SimpleForm";


const App = () => {
  return (
  <div className={styles.App}>
    <h3>Basic Form</h3>
    <InputForm />
    <ThemeProvider theme={theme}>
      <h3>MD Form</h3>
      <InputMDForm />
      <h3>Simple Form</h3>
      <SimpleForm />
    </ThemeProvider>
  </div>
  )
}

export default App