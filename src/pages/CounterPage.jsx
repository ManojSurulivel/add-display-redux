import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { increment,decrement, reset } from '../slices/counterSlice';

const CounterPage = () => {

    const counter = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter{counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default CounterPage
