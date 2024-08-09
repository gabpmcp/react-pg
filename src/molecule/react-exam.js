import moment from 'moment';

const days = month => Array.from({ length: 7 * 6 }, (_, i) =>
    ({ 
        firstDay: moment({ month: month - 1 }).format('d'),
        idx: i,
        endDay: moment({ month: month - 1 }).daysInMonth() + 1,
        idxDay: i - (moment({ month: month - 1 }).format('d') - 1)
    })
)
.map(day => ({...day, bind: day.idxDay > 0 && day.idxDay < day.endDay}))

console.log(days(9))
// console.log(`month: ${moment().format('MMMM')} firstDay: ${moment({ month: 7 + 1 }).format('d')} endDay: ${moment({year: 2024, month: 2 - 1}).daysInMonth()}`)
