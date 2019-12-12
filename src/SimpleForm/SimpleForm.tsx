import React from "react"
import { nameValidator, createOneOfValidator } from "@zecos/validators"
import { TextInput, SelectInput, RadioInput, CheckboxInput, GroupLayout, SwitchInput, TimePickerInput, DatePickerInput, SliderInput, SimpleFormLayout, Multi } from "@zecos/inputs-mui"
        
export const SimpleForm = () => {
  const {SimpleForm, SimpleFormDisplay, logSimpleForm}  = SimpleFormLayout({
    name: 'simpleForm',
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
        name: "people"
      })
    ],
    props: {
      className: "form"
    }
  })
  

  return (
    <>
    <SimpleForm />
    <SimpleFormDisplay className="form" />
    <div className="form">
    <button onClick={() => logSimpleForm({full: true})}>Log</button>
    </div>
    </>
  )
}
 