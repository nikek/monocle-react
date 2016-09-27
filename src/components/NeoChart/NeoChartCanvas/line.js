import React from 'react'
import {line as d3line} from 'd3-shape'
import {scaleSequential, interpolateWarm} from 'd3-scale'

const colorize = scaleSequential(interpolateWarm)

const NeoLine = React.createClass({
  render: function() {
    const p = this.props
    let plotLine
    let lines

    if(p.xScale && p.yScale){
      plotLine = d3line()
        .x(d => p.xScale(d.x))
        .y(d => p.yScale(d.y+d.y0))

      lines = p.data.series.map((line, i) => {
        return <path
          d={ plotLine(line.dataPoints) }
          stroke={ colorize(i/(p.data.series.length-1)) }
          className="line"
          fill="none"
          key={i} />
      })
    }
    else {
      lines = []
    }

    const translate = `translate(0, 0)`

    return <g transform={ translate } >{ lines }</g>
  }

})

export default NeoLine
