import React, { useReducer } from 'react'
import moment from 'moment';
import MonthPicker from '../atom/MonthPicker';

const days = month => Array.from({ length: 7 * 6 }, (_, i) =>
  ({ 
      firstDay: moment({ month: month - 1 }).format('d'),
      idx: i,
      endDay: moment({ month: month - 1 }).daysInMonth() + 1,
      idxDay: i - (moment({ month: month - 1 }).format('d') - 1)
  })
)
.map(day => ({...day, bind: day.idxDay > 0 && day.idxDay < day.endDay}))

const Day = () => {

  return (
    <div>Day</div>
  )
}

const monthReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MONTH':
      console.log({
        month: action.newMonth,
        daysToBind: days(action.newMonth)
      })
      return {
        month: action.newMonth,
        daysToBind: days(action.newMonth)
      }
    default:
      return state
  }
}

const Month = () => {
  const initialState = {
    month: moment().month() + 1,
    daysToBind: days(moment().month() + 1)
  }

  const [state, dispatch] = useReducer(monthReducer, initialState)

  const handleMonthChange = (month) => {
    dispatch({ type: 'SET_MONTH', newMonth: month + 1 });
  }

  return (
    <section>
      <MonthPicker initialMonth={moment().month()} monthChanged={handleMonthChange}/>
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
          state.daysToBind.map(day =>
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