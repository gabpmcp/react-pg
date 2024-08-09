import moment from 'moment';
import React, { useReducer, useEffect } from 'react'

const MonthPicker = ({initialMonth, monthChanged}) => {
  const actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
  }

  const reducer = (state, action) => {
    let newMonth = 0
    switch (action) {
        case actions.INCREMENT:
          newMonth = (state + 1) % 12
          monthChanged(newMonth)
          return newMonth
        case actions.DECREMENT:
          newMonth = (state - 1 + 12) % 12
          monthChanged(newMonth)
          return newMonth
        default:
          return state;
      }
  }

  const [month, dispatch] = useReducer(reducer, initialMonth)

  return (
    <section id='month-picker' className='d-flex justify-content-evenly align-items-center py-5'>
        <button className='btn btn-dark' onClick={() => dispatch('DECREMENT')}><span class="material-symbols-outlined">chevron_left</span></button>
        <h1>{moment({ month: month }).format('MMMM')}</h1>
        <button className='btn btn-dark' onClick={() => dispatch('INCREMENT')}><span class="material-symbols-outlined">chevron_right</span></button>
    </section>
  )
}

export default MonthPicker