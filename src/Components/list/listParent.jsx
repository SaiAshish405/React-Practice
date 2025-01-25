import React from 'react'

export const OrderList=()=>{
    return(
        <div>
            <ol>
                <ListItems></ListItems>
            </ol>
        </div>
    )
}

export const UnorderList=()=>{
    return(
        <div>
            <ul>
                <ListItems></ListItems>
            </ul>
        </div>
    )
}

const ListItems=()=>{
    const  furits=["Apple","Banana","Cat","Dog","Elephant"]
    return(
        <>
        {
            furits.map((fruit)=>{
                return(
                    <>
                    <li>{fruit}</li>
                    </>
                )
            })

        }
        </>
    )
}
