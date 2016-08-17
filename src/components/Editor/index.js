import React from 'react'
import {connect} from 'cerebral-view-react'
import FilterEditor from './FilterEditor'
import AggregationEditor from './AggregationEditor'
import RangeEditor from './RangeEditor'

export default connect({
  title: 'monocle.title'
}, {
  titleChanged: 'monocle.titleChanged'
},
  function Editor({title, titleChanged}) {

    function handleChange(e) {
      titleChanged({
        title: e.target.value
      })
    }

    function handleKeyDown(e) {
      if(e.keyCode === 13) e.target.blur()  // Blur on enter
    }

    return (
      <div className="editor">
        <RangeEditor />
        <FilterEditor />
        <AggregationEditor />
        <input
          type="text"
          value={title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    )
  }
)
