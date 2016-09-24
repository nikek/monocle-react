import React from 'react'
import NeoChart from '../NeoChart'
import Editor from '../Editor'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <NeoChart />
        <Editor />
      </div>
    )
  }
})


export default App
