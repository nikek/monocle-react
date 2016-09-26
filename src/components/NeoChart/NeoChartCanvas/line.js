import React from 'react'
import {line as d3line} from 'd3-shape'
import {scaleSequential, interpolatePlasma} from 'd3-scale'

const colorize = scaleSequential(interpolatePlasma)
let plotLine

const NeoLine = React.createClass({
  render: function() {
    const p = this.props

    if(p.xScale && p.yScale){
      plotLine = d3line()
        .x(d => p.xScale(d.x))
        .y(d => p.yScale(d.y+d.y0))
    }

    return (
      <g>
        { p.data.series.map((line, i) => {
          return <path
            fill="none"
            stroke={ colorize(i/p.data.series.length) }
            className={`${line.color} line`}
            d={plotLine(line.dataPoints)}
            key={i}/>
          })
        }
      </g>)
  }

})

export default NeoLine
