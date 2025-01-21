import React from "react"
import ButtonComponent from "../buttons/button"

const Forms=()=>{
    return(
        <div>
            <h1>Normal Form</h1>
            <label for="Fname">First Name : </label>
            <input  type="text" id="Fname" placeholder="Enter your First Name"></input>
            <br></br>
            <label for="Lname">Last Name : </label>
            <input type="text" id="Lname" placeholder="Enter your Last Name"></input>
            <br></br>
            <ButtonComponent></ButtonComponent>
        </div>
    )
}
export default Forms