 import React, { useState } from "react"
import { usernameValidator, nameValidator, emailValidator } from "@zecos/validators"
import { useTextArea, useSelect, useText } from "@zecos/inputs-basic"
import './InputForm.css'
 
const fieldProperties = {
  firstNameOfTheApplicantForThisForm: {
    init: "",
    validate: nameValidator,
  },
  lastName: {
    init: "",
    validate: nameValidator,
  },
  email: {
    init: "",
    validate: emailValidator,
  },
  username: {
    init: "",
    usernameValidator,
  },
  describeYourself: {
    init: "",
  },
  favoriteColor: {
    init: "red",
  },
  customField: {
    validate: (val: string) => {
      if (val !== "hello") {
        return [new Error("value must be hello!")]
      }
      return []
    },
    init: "this is my init value"
  }
}
const colors = {
  Red: "red",
  Green: "green",
  Blue: "blue",
  Purple: "purple",
  ["Alice Blue"]: "aliceblue"
}

export const InputForm = () => {
  const {FirstName, firstNameState} = useText({
    validate: nameValidator,
    name: "firstName"
  })

  const {DescribeYourself, describeYourselfState} = useTextArea({
    name: "describeYourself"
  })
  
  const {FavoriteColor, favoriteColorState} = useSelect({
    init: "blue",
    name: "favoriteColor",
  })
  return (
    <form className="form">
      {/* These are your inputs */}
      <FirstName />
      <DescribeYourself />
      <FavoriteColor options={colors}/>

      {/* display the data */}
      First Name State: {firstNameState.value}<br />
      Describe Yourself: {describeYourselfState.value}<br />
      Favorite Color: {favoriteColorState.value}
    </form>
  )
}
 