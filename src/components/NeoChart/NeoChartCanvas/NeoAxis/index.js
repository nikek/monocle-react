import React  from 'react'
import Axis   from './axis'

const NeoAxis = React.createClass({
  render: function() {
    const props = this.props

    const xSettings = {
      translate: `translate(0, ${props.height - props.padding})`,
      scale: props.xScale,
      orient: 'bottom'
    };
    const ySettings = {
      translate: `translate(${props.padding}, 0)`,
      scale: props.yScale,
      orient: 'right'
    };
    return (
      <g className="neo-axis">
        <Axis {...xSettings}/>
        <Axis {...ySettings}/>
      </g>
    )
  }
})

export default NeoAxis
