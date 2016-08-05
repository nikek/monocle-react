import React from 'react'
import {connect} from 'cerebral-view-react'
import NeoChart from '../NeoChart'
import Editor from '../Editor'

export default connect({
  items: 'monocle.items',
  options: 'monocle.options'
},
  function App({items, options}) {
    return (
      <div>
        <NeoChart items={items} options={options} />
        <Editor />
      </div>
    )
  }
)
