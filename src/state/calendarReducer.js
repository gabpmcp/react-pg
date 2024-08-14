import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const generateDays = (month) => {
    return Array.from({ length: 7 * 6 }, (_, i) => ({
      firstDay: moment({ month: month - 1 }).format('d'),
      idx: i,
      endDay: moment({ month: month - 1 }).daysInMonth() + 1,
      idxDay: i - (moment({ month: month - 1 }).format('d') - 1),
    })).map(day => ({...day, bind: day.idxDay > 0 && day.idxDay < day.endDay}))
  }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
      month: moment().month() + 1,  // el mes actual
      days: generateDays(moment().month() + 1),  // días generados para el mes actual
    },
    reducers: {
      setMonth: (state, action) => {
        state.month = action.payload;
        state.days = generateDays(action.payload);
      },
    },
  })

export const { setMonth } = calendarSlice.actions;
export default calendarSlice.reducer;