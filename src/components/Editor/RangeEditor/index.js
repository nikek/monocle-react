import React from 'react'
import {Computed} from 'cerebral'
import {connect} from 'cerebral-view-react'
import rangeOptions from './rangeOptions'
import './rangeEditor.less'

const inputMax = rangeOptions.length-1

// filter out the ticks from all the options
const ticks = rangeOptions
  .filter(opt => opt.tickLabel)
  .map(tick => {
    tick.index = rangeOptions.indexOf(tick)
    return tick
  })


const currentFromRange = Computed({
  range: 'monocle.datasource.range',
}, ({range}) => {
  console.log(range);
  var currentIndex = rangeOptions.findIndex(opt => {
    return range.value === opt.content.value && range.unit === opt.content.unit
  })

  if(currentIndex === -1)
    currentIndex = 18

  return {
    width: currentIndex/inputMax*100,
    index: currentIndex
  }
})



export default connect({
  current: currentFromRange()
}, {
  rangeChanged: 'monocle.rangeChanged'
},
  function RangeEditor({current, rangeChanged}) {
    function handleChange(e) {
      rangeChanged({range: rangeOptions[e.target.value].content })
    }

    return (
      <div className="range-editor">
        <div className="slope-container">
          <div style={{width: current.width + '%'}}>
            <svg viewBox="0 0 600 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M600,50 L600,50 L0,50 L0,0 C30,30 50,47 600,49 Z" className="timeline-slope gray"></path>
            </svg>
          </div>
          <div style={{width: 100-current.width + '%', right:0}}>
            <svg viewBox="0 0 600 50" style={{transform: 'translateX(' + -current.width + '%)'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M600,50 L600,50 L0,50 L0,0 C30,30 50,47 600,49 Z" className="timeline-slope"></path>
            </svg>
          </div>
        </div>

        <input name="input" type="range" min="0" max={ inputMax } value={ current.index } onChange={ handleChange } />
        <output>{ rangeOptions[current.index].label }</output>
        <div className="tick-container">
          {
            ticks.map((tick, i) => {
              return <span key={i} className="timespan-tick" style={{width: tick.index/inputMax*100 +'%'}}>{tick.tickLabel}</span>
            })
          }
        </div>
      </div>
    )
  }
)
