import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
  range: 'monocle.datasource.range'
},
  function RangeEditor({range}) {
    return (
      <div>Range!</div>
    )
  }
)
