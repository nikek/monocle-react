import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
  filter: 'monocle.datasource.filter'
},
  function FilterEditor({filter}) {
    return (
      <div>Filter!</div>
    )
  }
)
