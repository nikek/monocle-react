import React from 'react'
import {select} from 'd3-selection'
import {axisTop, axisRight, axisBottom, axisLeft} from 'd3-axis'

const orientations = {
  top: axisTop,
  right: axisRight,
  bottom: axisBottom,
  left: axisLeft
}

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    const elem = this.refs.axis
    const axis = orientations[this.props.orient](this.props.scale)

    select(elem).call(axis)
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}
