import React from "react"
import { nameValidator, createOneOfValidator } from "@zecos/validators"
import { TextInput, SelectInput, RadioInput, CheckboxInput, GroupLayout, SwitchInput, TimePickerInput, DatePickerInput, SliderInput, SimpleFormLayout, Multi } from "@zecos/inputs-mui"
import {displayFormData} from "@zecos/inputs"
        
export const SimpleForm = () => {
  const simpleForm = SimpleFormLayout({
    name: 'form',
    items: [
      TextInput({
        validate: nameValidator,
        name: "firstName"
      }),
      TextInput({
        validate: nameValidator,
        name: "lastName"
      }),
      Multi({
        init: [
          TextInput({
            validate: nameValidator,
            name: "firstName"
          }),
          TextInput({
            validate: nameValidator,
            name: "lastName"
          }),
        ],
        name: "People"
      })
    ]
  })
  const {Form} = simpleForm

  return (
    <>
    <Form />
    {displayFormData(simpleForm, {full: true})}
    </>
  )
}
 