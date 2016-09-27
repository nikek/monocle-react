import React  from 'react'
import Axis   from './axis'

const NeoAxis = React.createClass({
  render: function() {
    const props = this.props

    const xSettings = {
      translate: `translate(0, ${props.height - props.paddingBottom})`,
      tickSize: props.height - props.paddingBottom,
      scale: props.xScale,
      orient: 'top'
    }
    const ySettings = {
      translate: `translate(${props.width}, 0)`,
      tickSize: props.width,
      scale: props.yScale,
      orient: 'left'
    }
    return (
      <g className="neo-axis">
        <Axis {...xSettings}/>
        <Axis {...ySettings}/>
      </g>
    )
  }
})

export default NeoAxis
