import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { setMonth } from '../state/calendarReducer';

const MonthPicker = () => {
  const month = useSelector(state => state.calendar.month)
  const dispatch = useDispatch()

  const handleMonthChange = (newMonth) => {
    dispatch(setMonth(newMonth));
  }

  return (
    <section id='month-picker' className='d-flex justify-content-evenly align-items-center py-5'>
        <button className='btn btn-dark' onClick={() => handleMonthChange(month - 1)}><span class="material-symbols-outlined">chevron_left</span></button>
        <h1>{moment({ month: month }).format('MMMM')}</h1>
        <button className='btn btn-dark' onClick={() => handleMonthChange(month + 1)}><span class="material-symbols-outlined">chevron_right</span></button>
    </section>
  )
}

export default MonthPicker