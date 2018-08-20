var axios = require('axios')

module.exports = store

function store (state, emitter) {
  state.recipes = []

  state.events.LOAD_RECIPES = 'loadRecipes'

  emitter.on(state.events.LOAD_RECIPES, function () {
    axios.get('http://localhost:8081/').then(function (response) {
      state.error = null
      state.recipes = response.data
      emitter.emit(state.events.RENDER)
    }).catch(function (err) {
      state.error = 'Unable to load recipes'
      console.log(err)
      emitter.emit(state.events.RENDER)
    })
  })
}
