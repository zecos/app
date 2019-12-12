/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { InputForm } from './InputForm/InputForm'
import { InputMDForm } from "./InputMDForm/InputMDForm";
import styles from "./App.module.css"
import { theme } from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SimpleForm } from "./SimpleForm/SimpleForm";
import { MultiForm } from "./MultiForm/MultiForm";
import { nameValidator } from "@zecos/validators";

const App = () => {
  const [state, setState] = useState("")
  const errors = nameValidator(state)
  const onChange = (e:any) => setState(e.target.value)
  return (
  <div className={styles.App}>
    {errors.map((err,i) => <div key={i}>{err.toString()}</div>)}
    <input onChange={onChange} value={state} />
    {/* <h3>Basic Form</h3>
    <InputForm /> */}
    <ThemeProvider theme={theme}>
      <h3>MD Form</h3>
      <InputMDForm />
      <h3>Simple Form</h3>
      <SimpleForm />
      <h3>Multi Form</h3>
      <MultiForm />
    </ThemeProvider>
  </div>
  )
}

export default App