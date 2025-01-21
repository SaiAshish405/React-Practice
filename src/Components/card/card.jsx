import React from 'react'
import Img1 from '../images/img1'
import ButtonComponent from '../buttons/button'
import { Heading1 } from '../headings/headings'

const Card = () => {
  return (
    <div>
         <Heading1></Heading1>
         <Img1></Img1>
         <p>This card displays a beautifull butterfly.</p>
         <ButtonComponent></ButtonComponent>
      
    </div>
  )
}

export default Card
