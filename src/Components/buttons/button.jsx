import React from 'react'
import "./button.css"
import  sheets from "./button.module.css"

const ButtonComponent = (prop) => {
  // const buttonStyling={color:"blue", backgroundColor:"gray"}
  const {onPress,text,bgColor,color}=prop
  return (
    <div>
      {/* <button style={{color:"red", backgroundColor:"green"}}>inline css button</button>
      <button style={buttonStyling}>inline css button</button>
      <button className='button'>extenal css button</button>
      <button className={sheets.buttonCss}>external module css button</button> */}
      <button  onClick={onPress} style={{backgroundColor:bgColor, color:color}}>{text}</button>

    </div>
  )
}

export default ButtonComponent
export const Button=()=>{
  return(
    <>
    <button className={sheets.button1}>know more...</button>
    </>
  )

}
