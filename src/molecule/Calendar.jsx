import { React, useState, useEffect } from 'react'
import MonthPicker from '../atom/MonthPicker';
import { useSelector, useDispatch } from 'react-redux';

const Day = () => {

  return (
    <div>Day</div>
  )
}

const Month = () => {
  const days = useSelector(state => state.calendar.days)

  return (
    <section>
      <MonthPicker />
      <ul className='d-flex list-unstyled my-5'>
        <li className='width-day'>Sunday</li>
        <li className='width-day'>Monday</li>
        <li className='width-day'>Tuesday</li>
        <li className='width-day'>Wednesday</li>
        <li className='width-day'>Thursday</li>
        <li className='width-day'>Friday</li>
        <li className='width-day'>Saturday</li>
      </ul>
      <div className='d-flex flex-wrap'>
        {
          days.map(day =>
            day.bind === true ?
              <button className='width-day day-button' type="button">{day.idxDay}</button>
            : <div className='width-day hidden' />
          )
        }
      </div>
    </section>
  )
}

const Week = () => {
  return (
    <div>Week</div>
  )
}

export { Day, Week, Month }