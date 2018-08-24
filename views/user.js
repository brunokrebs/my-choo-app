var html = require('choo/html')
var Header = require('../components/header')
var AddRecipes = require('../components/addRecipe')

var TITLE = 'My Choo App'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

//   emit(state.events.AUTHENTICATE)

  return html`
    <body>
    ${state.cache(Header, 'header').render()}            
    <div class="container-fluid">
        ${state.cache(AddRecipes, 'addRecipe').render()}
    </div>
    </body>
    `
}
