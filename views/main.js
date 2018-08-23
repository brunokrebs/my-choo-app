var html = require('choo/html')
var Header = require('../components/header')
var Recipes = require('../components/recipes')

var TITLE = 'My Choo App'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      ${state.cache(Header, 'header').render()}
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <h1>Welcome to My Choo App</h1>
            <p>Here, you can find some cool recipes.</p>
            ${state.cache(Recipes, 'recipes').render()}
          </div>
        </div>
      </div>
    </body>
  `
}
