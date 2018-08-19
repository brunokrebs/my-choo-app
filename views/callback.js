var html = require('choo/html')

var TITLE = 'My Choo App - Loading Profile'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  emit(state.events.LOAD_PROFILE)

  return html`
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <h2>Loading Profile</h2>
            <p>Stay put, it just take a second or two.</p>
          </div>
        </div>
      </div>
    </body>
  `
}
