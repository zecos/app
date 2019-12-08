import React from "react"
import { nameValidator, createOneOfValidator } from "@zecos/validators"
import { useText, useSelect, useRadio, useCheckbox, useGroup, useSwitch } from "@zecos/inputs-mui"
import "./InputMDForm.css"
 

const colors = {
  Blue: "blue",
  Red: "red",
}
const lessThan2 = inputs => {
  const count = inputs.reduce((acc, cur) => {
    const {state} = cur
    if (state.value) {
      return ++acc
    }
    return acc
  }, 0)
  if (count > 2) return [
    new Error("You cannot pick more than 2.")
  ]
  return []
}

export const renderGroupState = inputs => inputs
  .map(input => {
    const {state, helpers} = input
    const key = helpers.title
    return <div key={key}>{key}: {"" + state.value}</div>
  })
        
export const InputMDForm = () => {
  const {FirstName, firstNameState} = useText({
    validate: nameValidator,
    name: "firstName"
  })

  const {LastName, lastNameState} = useText({
    validate: nameValidator,
    name: "lastName"
  })
  
  const {FavoriteColor, favoriteColorState} = useSelect({
    init: "blue",
    name: "favoriteColor",
  })
  
  const {Cmpt:FavoriteFlavor, state:favoriteFlavorState} = useRadio({
    init: "rockyroad",
    name: "favoriteFlavorOfIceCream",
    validate: createOneOfValidator({options: ["chocolate", "vanilla"]}),
  })


  const {Cmpt:Cool, state:coolState} = useCheckbox({
    init: false,
    name: "IAmCool",
  })
  
  const {MusicILike, musicILikeInputs} = useGroup({
    inputs: [
      useCheckbox({
        init: false,
        name: "systemOfADown",
      }),
      useCheckbox({
        init: false,
        name: "blink182",
      }),
      useCheckbox({
        init: false,
        name: "sum41"
      }),
    ],
    name: "musicILike",
    validate: lessThan2,
  })

  const {MusicILikeSwitch, musicILikeSwitchInputs} = useGroup({
    inputs: [
      useSwitch({
        init: false,
        name: "systemOfADown",
      }),
      useSwitch({
        init: false,
        name: "blink182",
      }),
      useSwitch({
        init: false,
        name: "sum41"
      }),
    ],
    name: "musicILikeSwitch",
    validate: lessThan2,
  })

  return (
    <>
    <form className="form">
      <FirstName />
      <LastName />
      <FavoriteColor options={colors}/>
      <FavoriteFlavor
        options={{
          "Rocky Road": "rockyroad",
          Chocolate: "chocolate",
          Vanilla: "vanilla",
        }}
      /><br />
      <Cool /><br />
      <MusicILike /><br />
      <MusicILikeSwitch /><br />
      <div>
        First Name State: {firstNameState.value}<br />
        Last Name State: {firstNameState.value}<br />
        Favorite Color: {favoriteColorState.value}<br />
        Favorite Flavor: {favoriteFlavorState.value}<br />
        Cool: {String(coolState.value)}<br />
        Music I Like {renderGroupState(musicILikeInputs)}
        Music I Like Radio {renderGroupState(musicILikeSwitchInputs)}
      </div>
    </form>
    <br />
    {/* display the data */}
    </>
  )
}
 