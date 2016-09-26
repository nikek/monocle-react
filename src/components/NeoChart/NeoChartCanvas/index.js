import React from 'react'
import {max, min} from 'd3'
import {scaleLinear, scaleLog, scaleTime, scalePow} from 'd3-scale'
import NeoAxis from './NeoAxis'
import NeoLine from './line'

const padding = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30
  };



const xScaleSetup = (props) => {
  return scaleTime()
    .domain([props.opts.range.start, props.opts.range.end])
    .range([0, props.width]);
}

const yScaleSetup = (props) => {
  let yScale;

  switch (props.opts && props.opts.valueScale || 'linear') {
    case 'log':
      yScale = scaleLog();
      break;
    case 'powOneThird':
      yScale = scalePow().exponent(.33333);
      break;
    default:
      yScale = scaleLinear();
  }

  return yScale
    .domain(calculateYDomain(props.data.series, props.opts, props.threshold || null))
    .range([props.height, 3]);
}

// Calculate y-axis domain.
const calculateYDomain = function(series, opts, threshold) {
  // Find min time series value from all series
  var yMin = min(series, function(s) {
    return min(s.dataPoints, function(d) {
      return d.y + d.y0;
    });
  });

  // Find max time series value from all series
  var yMax = max(series, function(s) {
    return max(s.dataPoints, function(d) {
      return d.y + d.y0;
    });
  });

  // Override with threshold if it is higher or lower than previous max or min
  if (threshold && typeof threshold.threshold === 'number'){
    yMin = min([yMin, threshold.threshold]);
    yMax = max([yMax, threshold.threshold]);
  }

  // Override with 0 if zeroBased=true and 0 is not already in the value domain
  if (opts.zeroBased && opts.valueScale !== 'log') {
    if (yMin > 0) yMin = 0;
    if (yMax < 0) yMax = 0;
  }

  return [yMin, yMax];
};

const NeoChartCanvas = React.createClass({
  render: function() {
    const p = this.props
    let graphContent

    if(p.data.series.length) {
      const xScale = xScaleSetup(p)
      const yScale = yScaleSetup(p)
      graphContent = (
        <g>
          <NeoLine data={p.data} xScale={xScale} yScale={yScale} />
          <NeoAxis xScale={xScale} yScale={yScale} padding="20" height={p.height} />
        </g>
      )
    }
    else {
      graphContent = <text>No data</text>
    }



    return (
      <svg width={ p.width } height={ p.height }>
        { graphContent }
      </svg>
    )
  }
})

export default NeoChartCanvas
