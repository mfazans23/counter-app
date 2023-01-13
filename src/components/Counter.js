import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../actions/counterAction'

const Counter = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch(decrement(1))
  }

  const handleIncrement = () => {
    dispatch(increment(1))
  }

  const handleReset = () => {
    dispatch(reset())
  }
  return (
    <div
      className='flex flex-col justify-center items-center gap-4'
      style={{ height: '100vh' }}
    >
      <div className='flex gap-6 '>
        <button
          className='bg-slate-300 px-4 py-2 rounded-lg'
          onClick={handleDecrement}
        >
          <i class='fas fa-minus  text-6xl'></i>
        </button>
        <span className='text-8xl'>{count}</span>
        <button
          className='bg-slate-300 px-4 py-2 rounded-lg'
          onClick={handleIncrement}
        >
          <i class='fas fa-plus  text-6xl'></i>
        </button>
      </div>
      <button
        className='bg-slate-300 p-2 rounded-lg text-xl'
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter
