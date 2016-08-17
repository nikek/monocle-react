import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
  title: 'monocle.title'
}, {
  titleChanged: 'monocle.titleChanged'
},
  function TitleEditor({title, titleChanged}){

    function handleChange(e) {
      titleChanged({
        title: e.target.value
      })
    }

    function blurOnEnter(e) {
      if(e.keyCode === 13) e.target.blur()  // Blur on enter
    }

    return (
      <input
        type="text"
        value={title}
        onChange={handleChange}
        onKeyDown={blurOnEnter}
      />
    )
  }
)
