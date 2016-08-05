import React from 'react'
import {connect} from 'cerebral-view-react'
import FilterEditor from './FilterEditor'
import AggregationEditor from './AggregationEditor'
import RangeEditor from './RangeEditor'

export default connect({
  newItemTitle: 'monocle.newItemTitle'
}, {
  newItemTitleChanged: 'monocle.newItemTitleChanged',
  newItemTitleSubmitted: 'monocle.newItemTitleSubmitted'
},
  function Editor({newItemTitle, newItemTitleChanged, newItemTitleSubmitted}) {

    const onFormSubmit = event => {
      event.preventDefault()
      newItemTitleSubmitted()
    }

    const onInputChange = event => {
      newItemTitleChanged({
        title: event.target.value
      })
    }

    return (
      <div className="editor">
        <RangeEditor />
        <FilterEditor />
        <AggregationEditor />
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={newItemTitle}
            onChange={onInputChange}
          />
        </form>
      </div>
    )
  }
)
