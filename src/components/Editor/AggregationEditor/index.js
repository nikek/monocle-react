import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
  aggregation: 'monocle.datasource.aggregation'
},
  function AggregationEditor({aggregation}) {
    return (
      <div>Aggregation!</div>
    )
  }
)
