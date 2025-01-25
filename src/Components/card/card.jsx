import React from 'react'
import Img1 from '../images/img1'
import { Heading1 } from '../headings/headings'
import { Button } from '../buttons/button'
import style from "./card.module.css"

const Card = () => {
  return (
   <>
      <div className={style.cardCss}>
          <Heading1 />
          <Img1/>
          <p className={style.para}>This card displays a beautiful butterfly.</p>
          <Button/>
        
      </div>
   </>
  )
}

export default Card
