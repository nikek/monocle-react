// "copy" is an action factory that creates
// an action based on your arguments
import {copy} from 'cerebral/operators'


function setTitle({state, input}) {
  state.set('monocle.title', input.title)
}


export default [
  // copy the title value from the input
  // to the newItemTitle path in our state tree
  setTitle
]
