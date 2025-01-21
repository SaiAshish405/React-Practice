import React from 'react'
import Card from './Components/card/card'
import { OrderList, UnorderList } from './Components/list/listParent'
import Table from './Components/table/table'
import Forms from './Components/forms/form'


const App = () => {
  const greeting = "This is a greeting msg"
  return (
    <div>
      <h2>{greeting}</h2>
      {[1].map((num, index) => (<Card key={index}></Card>))}
      <OrderList></OrderList>
      <UnorderList></UnorderList>
      {["apple", "banana", "cat", "Dog", "elephant"].map((each) => (console.log(each)))}
      <Table></Table>
      <Forms></Forms>


    </div>
  )
}

export default App
