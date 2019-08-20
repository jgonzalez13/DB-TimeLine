import React from 'react'
import '../styles/main.sass'

const TimeItem = ({ titulo, descripcion, n}) => (
    <div className='TimeItem'>
        <img src={require(`../assets/img-${n}.jpg`)} alt=""/>
        <div className="titulo">{ titulo }</div>
        <div>{ descripcion }</div>
    </div>
)

export default TimeItem
