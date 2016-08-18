import React from 'react'
import NeoChartOptions from './NeoChartOptions'
import NeoChartCanvas from './NeoChartCanvas'

const NeoChart = React.createClass({
  render() {
    return (
      <div>
        <NeoChartOptions options={ this.props.options } />
        <NeoChartCanvas />
      </div>
    )
  }
})


export default NeoChart
