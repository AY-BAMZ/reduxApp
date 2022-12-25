import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  buyIceCream } from '../redux'

function HookIceCreamContainer() {

    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Number of icecreams - {numOfIceCream}</h1>
        <button onClick={() => dispatch(buyIceCream())}>Buy Icecreams</button>
    </div>
  )
}

export default HookIceCreamContainer