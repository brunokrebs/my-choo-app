var axios = require('axios')

module.exports = store

function store (state, emitter) {
  state.recipes = []
  state.recipe = {}

  state.events.LOAD_RECIPES = 'loadRecipes'
  state.events.LOAD_RECIPE = 'loadRecipe'
  state.events.ADD_RECIPE = 'addRecipe'

  emitter.on(state.events.DOMCONTENTLOADED, function () {
    axios.get('https://backend-dcuvsjkiqa.now.sh/').then(function (response) {
      state.error = null
      state.recipes = response.data
      emitter.emit(state.events.RENDER)
    }).catch(function (err) {
      state.error = 'Unable to load recipes'
      console.log(err)
      emitter.emit(state.events.RENDER)
    })
  })

  emitter.on(state.events.LOAD_RECIPE, function (id) {
    axios.get('https://backend-dcuvsjkiqa.now.sh/' + id).then(function (response) {
      state.error = null
      state.recipe = response.data
    }).catch(function (err) {
      state.error = 'Unable to load recipe with id: ' + id
      console.log(err)
      emitter.emit(state.events.RENDER)
    })
  })

  emitter.on(state.events.ADD_RECIPE, function (recipe) {
    axios.post('https://backend-dcuvsjkiqa.now.sh/',
      recipe
    ).then(function (response) {
      state.error = null
      console.log(response)
      emitter.emit(state.events.RENDER)
    }).catch(function (err) {
      state.error = 'Unable to add post'
      console.log(err)
      emitter.emit(state.events.RENDER)
    })
  })
}
