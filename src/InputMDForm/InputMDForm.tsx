import React from "react"
import { nameValidator, createOneOfValidator } from "@zecos/validators"
import { useText, useSelect, useRadio, useCheckbox, useGroup, useSwitch, useTimePicker, useDatePicker, useSlider } from "@zecos/inputs-mui"
import "./InputMDForm.css"
 

const colors = {
  Blue: "blue",
  Red: "red",
}
const lessThan2 = (inputs: any) => {
  const count = inputs.reduce((acc:any, cur:any) => {
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

export const renderGroupState = (inputs: any) => inputs
  .map((input:any) => {
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
  
  const {FavoriteFlavor, favoriteFlavorState} = useRadio({
    init: "rockyroad",
    name: "favoriteFlavor",
    props: {
      label: "Favorite Flavor of Ice Cream",
    },
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
  const {AppointmentDate, appointmentDateState} = useDatePicker({
    init: new Date,
    name: 'appointmentDate'
  })
  
  const {AppointmentTime, appointmentTimeState} = useTimePicker({
    init: new Date,
    name: 'appointmentTime'
  })
  
  const {Temperature, temperatureState} = useSlider({
    init: 30,
    name: 'temperature',
    props: {
      min: 0,
      max: 100,
      step: 10,
      orientation: "vertical",
      marks: [...new Array(11)]
        .map((_, num) => ({
          label: `${num * 10}°C`,
          value: num * 10
        })),
    }
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
      <MusicILike row /><br />
      <MusicILikeSwitch /><br />
      <AppointmentDate /><br />
      <AppointmentTime /><br />
      <Temperature /><br />
      <div>
        First Name State: {firstNameState.value}<br />
        Last Name State: {firstNameState.value}<br />
        Favorite Color: {favoriteColorState.value}<br />
        Favorite Flavor: {favoriteFlavorState.value}<br />
        Cool: {String(coolState.value)}<br />
        Music I Like {renderGroupState(musicILikeInputs)}
        Music I Like Radio {renderGroupState(musicILikeSwitchInputs)}
        Appointment Time: {appointmentTimeState.value.toString()}<br />
        Appointment Date: {appointmentDateState.value.toString()}<br />
        Temperature: {temperatureState.value}<br />
      </div>
    </form>
    <br />
    {/* display the data */}
    </>
  )
}
 