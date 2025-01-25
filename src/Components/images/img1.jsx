import React from 'react'
import style from "./img.module.css"

const Img1 = (prop) => {
  console.log(prop)
  const { src ,alt ,height ,width } = prop;
  return (
    <div>
      <img className={style.img} {...prop} />
    </div>
  )
}

export default Img1
