var axios = require('axios')

module.exports = store

function store (state, emitter) {
  state.recipes = []
  state.recipe = {}

  state.events.LOAD_RECIPES = 'loadRecipes'
  state.events.LOAD_RECIPE = 'loadRecipe'
  state.events.ADD_RECIPE = 'addRecipe'

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

  emitter.on(state.events.DOMCONTENTLOADED, function () {
    emitter.emit(state.events.LOAD_RECIPES)
  })

  emitter.on(state.events.LOAD_RECIPE, function (id) {
    axios.get('http://localhost:8081/' + id).then(function (response) {
      state.error = null
      state.recipe = response.data
      emitter.emit(state.events.RENDER)
    }).catch(function (err) {
      state.error = 'Unable to load recipe with id: ' + id
      console.log(err)
      emitter.emit(state.events.RENDER)
    })
  })

  emitter.on(state.events.ADD_RECIPE, function (recipe) {
    axios.post('http://localhost:8081/', recipe).then(function (response) {
      state.error = null
      state.recipe = response.data
      emitter.emit(state.events.REPLACESTATE, '/')
    }).catch(function (err) {
      state.error = 'Unable to Add recipe'
      console.log(err)
      emitter.emit(state.events.RENDER)
    })
  })
}
