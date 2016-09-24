import React from 'react'
import {connect} from 'cerebral-view-react'
import NeoChartOptions from './NeoChartOptions'
import NeoChartCanvas from './NeoChartCanvas'
import formatResponse from './computed/formatResponse'


export default connect({
  opts: 'monocle.options',
  data: formatResponse()
}, {
  signals: 'monocle'
},
  function NeoChart({signals,opts,data}) {

    function handleUnit(e) {
      signals.unitUpdated({value: e.target.value})
    }

    function handleValueScale(e) {
      signals.valueScaleUpdated({value: e.target.value})
    }


    return (
      <div>
        <NeoChartOptions options={ opts } />
        <NeoChartCanvas options={ opts } />
      </div>
    )
  }
)
