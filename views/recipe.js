var html = require('choo/html')
var Header = require('../components/header')
var Recipe = require('../components/recipe')

var TITLE = 'Recipes App'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      ${state.cache(Header, 'header').render()}
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            ${state.cache(Recipe, 'recipe-' + state.query.id).render()}
          </div>
        </div>
      </div>
    </body>
  `
}
