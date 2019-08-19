import React from 'react'
import '../styles/main.sass'

const TimeItem = ({ titulo, descripcion}) => (
    <div className='TimeItem'>
        <div>{ titulo }</div>
        <div>{ descripcion }</div>
    </div>
)

export default TimeItem
