import React from 'react'
import {connect} from 'cerebral-view-react'


const checkboxOptions = [
  { name: 'stacked', label: 'Stacked' },
  { name: 'axis', label: 'Axis' },
  { name: 'zeroBased', label: 'Zero Based' },
  { name: 'round', label: 'Round' },
  { name: 'legendVisible', label: 'Legend' }
]

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

export default connect({
  opts: 'monocle.options'
}, {
  signals: 'monocle'
},
  function NeoChartOptions({signals,opts}) {

    function handleUnit(e) {
      signals.unitUpdated({value: e.target.value})
    }

    function handleValueScale(e) {
      signals.valueScaleUpdated({value: e.target.value})
    }

    /* Looks messy.. Form component or just manually laying the options out..? */
    return (
      <div className="neo-chart-options">
        {
          checkboxOptions.map((opt, i) => (
            <label key={i}>
              <input type="checkbox"
                checked={ opts[opt.name] }
                onChange={ () => signals[opt.name+'Toggled']() } />
              {opt.label}
            </label>
          ))
        }

        <select value={ opts.unit } onChange={ handleUnit }>
          {unitOptions.map((opt, i) => (
            <option key={i} value={opt.val}>{opt.label}</option>
          ))}
        </select>
        Unit/Prefix

        <select value={opts.valueScale} onChange={handleValueScale}>
          {scaleOptions.map((opt, i) => (
            <option key={i} value={opt.val} >{opt.label}</option>
          ))}
        </select>
        Scale
      </div>
    )
  }
)
