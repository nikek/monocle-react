import React from 'react'
import {connect} from 'cerebral-view-react'


const unitOptions = [
  { label: 'None', val: '' },
  { label: '%', val: '%' },
  { label: 'SI prefix', val: 'si' },
  { label: 'Seconds', val: 's' },
  { label: 'Milliseconds', val: 'ms' },
  { label: 'Microseconds', val: 'µs' },
  { label: 'Nanoseconds', val: 'ns' }
];
const scaleOptions = [
  { label: 'Linear', val: 'linear' },
  { label: 'Logarithmic (n/a for 0)', val: 'log' },
  { label: 'Cube Root (👍 for 0)', val: 'powOneThird' }
];

const NeoChartOptions = React.createClass({
  render: function() {
    const {options, onChangeFns} = this.props

    return (
      <div className="neo-chart-options">
        <label><input type="checkbox" checked={options.stacked} onChange={onChangeFns.stacked} /> Stacked</label>
        <label><input type="checkbox" checked={options.axis} onChange={onChangeFns.axis} /> Axis</label>
        <label><input type="checkbox" checked={options.round} onChange={onChangeFns.round} /> Round</label>
        <label><input type="checkbox" checked={options.zeroBased} onChange={onChangeFns.zeroBased} /> Zero Based</label>
        <label><input type="checkbox" checked={options.legendVisible} onChange={onChangeFns.legendVisible} /> Legend</label>

        <select value={options.unit} onChange={onChangeFns.unit}>
          {unitOptions.map((opt, i) => (
            <option key={i} value={opt.val}>{opt.label}</option>
          ))}
        </select>
        Unit/Prefix

        <select value={options.valueScale} onChange={onChangeFns.valueScale}>
          {scaleOptions.map((opt, i) => (
            <option key={i} value={opt.val} >{opt.label}</option>
          ))}
        </select>
        Scale
      </div>
    )
  }
})

export default NeoChartOptions
