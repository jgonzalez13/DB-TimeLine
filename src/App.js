import React from 'react';
import { Timeline} from 'antd'
import './styles/main.sass'

function App() {
  return (
    <div className="App">
      Lau y Manny 

      si se puedo

    <Timeline mode="alternate">
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>,
    </div>
  );
}

export default App;