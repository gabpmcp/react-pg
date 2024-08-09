import React, { useReducer } from 'react'
import logo from '../assets/images/victory-logo-black.png'
import { Day, Week, Month } from '../molecule/Calendar'

const Layout = () => {
    const components = {
        day: <Day />,
        week: <Week />,
        month: <Month />
    }
    
    const reducer = (state, action) =>
        components[action] || (() => { throw new Error('Unhandled case: ' + action) })

    const [component, dispatch] = useReducer(reducer, components['month']);

    return (
        <div className='main d-flex'>
            <section className='col-2'>
                <img src={logo} className='logo' />
                <nav className='nav d-flex flex-column py-4'>
                    <ul><button className='btn btn-dark col-10' onClick={() => dispatch('day')} type="button">Day</button></ul>
                    <ul><button className='btn btn-dark col-10' onClick={() => dispatch('week')} type="button">Week</button></ul>
                    <ul><button className='btn btn-dark col-10' onClick={() => dispatch('month')} type="button">Month</button></ul>
                </nav>
            </section>
            <section className='col-10'>
                <section className='calendarInsight py-1'>
                    {component}
                </section>
                <footer className='d-flex align-items-end justify-content-center py-1'>Copyright© 2024. All rights reserved.</footer>
            </section>
        </div>
    )
}

export default Layout