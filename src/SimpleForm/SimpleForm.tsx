import React from "react"
import { nameValidator, createOneOfValidator } from "@zecos/validators"
import { useText, useSelect, useRadio, useCheckbox, useGroup, useSwitch, useTimePicker, useDatePicker, useSlider, useSimpleForm } from "@zecos/inputs-mui"
        
export const SimpleForm = () => {
  const { Form } = useSimpleForm({
    name: 'form',
    inputs: [
      useText({
        validate: nameValidator,
        name: "firstName"
      }),
      useText({
        validate: nameValidator,
        name: "lastName"
      }),
    ]
  })

  return (
    <Form />
  )
}
 