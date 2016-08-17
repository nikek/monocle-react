import React from 'react'
import NeoChartOptions from './NeoChartOptions'

const NeoChart = React.createClass({
  render() {
    return (
      <div>
        <NeoChartOptions options={ this.props.options } />
      </div>
    )
  }
})


export default NeoChart
