var css = require('sheetify')
var choo = require('choo')

css('bootstrap')
css('./assets/style.css')

var app = choo({
  hash: false
})

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/authentication'))
app.use(require('./stores/recipes'))

app.route('/', require('./views/main'))
app.route('/callback', require('./views/callback'))
app.route('/recipe', require('./views/recipe'))
app.route('/user', require('./views/user'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
