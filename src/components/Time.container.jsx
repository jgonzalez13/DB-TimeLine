import React from 'react'
import { Timeline } from 'antd'

import TimeItem from './TimeItem.component'

const Time = () => (
    <Timeline mode="alternate">
        <Timeline.Item><TimeItem titulo='soy el titulo' descripcion='soy la descripcion' /></Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
)

export default Time
