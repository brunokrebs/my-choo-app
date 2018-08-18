var html = require('choo/html')
var Header = require('../components/header')

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
            <p>Number of clicks stored: ${state.totalClicks}</p>
            <button class="btn btn-primary"
                    onclick=${handleClick}>
              Emit a click event
            </button>
          </div>
        </div>
      </div>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
