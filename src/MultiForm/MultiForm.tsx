// export const MultiForm = () => {}
import React from 'react'
import { Multi, TextInput, SimpleFormLayout } from '@zecos/inputs-mui'
import { nameValidator } from '@zecos/validators'

const newSimple = () => SimpleFormLayout({
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
  ]
})

export const MultiForm = () => {
  const newText = () => (
    TextInput({
      validate: nameValidator,
      name: "firstName"
    })
  )
  const {actions, inputs, FirstNames} = Multi({
    init: [
      newText()
    ],
    name: "firstNames",
  })
  const addFirst = () => {
    actions.push(newSimple)
  }
  
  return <form className="form">
      <FirstNames />
      <button onClick={addFirst}>Add First</button>
      <br />
      <br />
    </form>
}