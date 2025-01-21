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
            <ListItems></ListItems>
        </div>
    )
}

const ListItems=()=>{
    return(
        <div>
            <li>Apple</li>
            <li>Banana</li>
            <li>Cat</li>
            <li>Dog</li>
            <li>Elephant</li>
        </div>
    )
}
