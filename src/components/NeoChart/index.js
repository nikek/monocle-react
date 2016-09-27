import React from 'react'
import {connect} from 'cerebral-view-react'
import NeoChartOptions from './NeoChartOptions'
import NeoChartCanvas from './NeoChartCanvas'
import formatResponse from './computed/formatResponse'
import './styles.less'


export default connect({
  opts: 'monocle.options',
  width: 'useragent.window.width',
  data: formatResponse()
}, {
  signals: 'monocle'
},
  function NeoChart({signals,opts,data, width}) {

    const onChangeFns = {
      axis(e) {signals.axisUpdated({value: e.target.checked})},
      legendVisible(e) {signals.legendVisibleUpdated({value: e.target.checked})},
      round(e) {signals.roundUpdated({value: e.target.checked})},
      zeroBased(e) {signals.zeroBasedUpdated({value: e.target.checked})},
      stacked(e) {signals.stackedUpdated({value: e.target.checked})},
      unit(e) {signals.unitUpdated({value: e.target.value})},
      valueScale(e) {signals.valueScaleUpdated({value: e.target.value})}
    }

    return (
      <div className="neo-chart">
        <NeoChartOptions options={ opts } onChangeFns={ onChangeFns } />
        <NeoChartCanvas
          data={ data }
          opts={ opts }
          width={ width }
          height="300"/>
      </div>
    )
  }
)
