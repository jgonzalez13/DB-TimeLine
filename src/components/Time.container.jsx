import React from 'react'
import { Timeline } from 'antd'
import { fechas } from '../data/fechas'

import TimeItem from './TimeItem.component'

const Time = () => (
    <Timeline mode="alternate">
        {
            fechas.map(p =>
                <Timeline.Item>
                    <TimeItem titulo={p.titulo} descripcion={p.descripcion} />
                </Timeline.Item>
            )
        }
    </Timeline>
)

export default Time
