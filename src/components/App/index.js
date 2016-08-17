import React from 'react'
import {connect} from 'cerebral-view-react'
import NeoChart from '../NeoChart'
import Editor from '../Editor'

export default connect({
  options: 'monocle.options'
},
  function App({options}) {
    return (
      <div>
        <NeoChart options={options} />
        <Editor />
      </div>
    )
  }
)
