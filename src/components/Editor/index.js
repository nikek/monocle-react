import React from 'react'
import FilterEditor from './FilterEditor'
import AggregationEditor from './AggregationEditor'
import RangeEditor from './RangeEditor'
import TitleEditor from './TitleEditor'

const Editor = React.createClass({
  render() {
    return (
      <div className="editor">
        <TitleEditor />
        <RangeEditor />
        <FilterEditor />
        <AggregationEditor />
      </div>
    )
  }
})

export default Editor
