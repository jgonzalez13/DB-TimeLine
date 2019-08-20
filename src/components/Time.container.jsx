import React from 'react'
import { Timeline } from 'antd'
import { fechas } from '../data/fechas'

import TimeItem from './TimeItem.component'

const Time = () => (
    <div className="time-conatiner">
        <Timeline mode="alternate">
            {
                fechas.map((p, i) =>
                    <Timeline.Item key={i}>
                        <TimeItem titulo={p.titulo} descripcion={p.descripcion} n={i} />
                    </Timeline.Item>
                )
            }
        </Timeline>
    </div>
)

export default Time
