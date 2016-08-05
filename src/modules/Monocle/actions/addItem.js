// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addItem ({module}) {
  module.state.unshift('items', module.state.get('newItemTitle'))
}

export default addItem
