import { Avatar, Typography } from 'antd'
import React from 'react'
import CountUp from 'react-countup';

const CounterUp = ({title="", inView = false, end = 50, duration = 2 }) => {
    return (
        <Typography>{title} <Avatar size={60} className='project__counter__num'><CountUp start={inView ? 0 : null} end={end} duration={duration} />+</Avatar></Typography>
    )
}

export default CounterUp