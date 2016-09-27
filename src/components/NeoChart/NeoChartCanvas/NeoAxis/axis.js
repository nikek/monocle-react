import React from 'react'
import {select} from 'd3-selection'
import {axisTop, axisRight, axisBottom, axisLeft} from 'd3-axis'

const orientations = {
  top: axisTop,
  right: axisRight,
  bottom: axisBottom,
  left: axisLeft
}

const Axis = React.createClass({
  componentDidMount() { this.renderAxis() },
  componentDidUpdate() { this.renderAxis() },
  renderAxis() {
    const axisWrap = this.refs.axis
    const axisFn = orientations[this.props.orient](this.props.scale)
      .tickSize(this.props.tickSize)

    const axisEl = select(axisWrap).call(axisFn)

    if(this.props.orient === 'left') {
      axisEl.selectAll('text')
        .style('text-anchor', 'start')
        .attr('y', '-8px')
        .attr('x', -this.props.tickSize + 5)
    }
    else {
      axisEl.selectAll('text')
        .attr('y', '14px')
    }

    axisEl.selectAll('line')
      .attr('stroke', 'white')
      .attr('opacity', .12);

  },
  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
})

export default Axis
