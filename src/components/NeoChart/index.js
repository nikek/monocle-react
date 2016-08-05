import React from 'react'
import NeoChartOptions from './NeoChartOptions'

const NeoChart = React.createClass({
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
        <NeoChartOptions options={ this.props.options } />
      </div>
    )
  }
})


export default NeoChart
