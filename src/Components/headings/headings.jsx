import React from 'react'
import style from "./heading.module.css"

export const Heading1 = (prop) => {
  const {text}=prop
  return (
    <div>
      <h1 className={style.heading1}>{text}</h1>
    </div>
  )
}
export const Heading2 = (prop) => {
  const {children}=prop
  console.log(prop,"propsss")
    return (
      <div>
        <h2>{children}{}</h2>
      </div>
    )
  }
  export const Heading3 = (prop) => {
    const {text}=prop
    return (
      <div>
        <h3>{text} </h3>
      </div>
    )
  }
  export const Heading4 = (prop) => {
    const {text}=prop
    return (
      <div>
        <h4>{text}</h4>
      </div>
    )
  }
  export const Heading5 = (prop) => {
    const {text}=prop
    return (
      <div>
        <h5>{text}</h5>
      </div>
    )
  }
  export const Heading6 = (prop) => {
    const {text}=prop
    return (
      <div>
        <h6>{text}</h6>
      </div>
    )
  }
         

