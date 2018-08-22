var axios = require('axios')

module.exports = store

function store (state, emitter) {
  state.recipes = []
  state.recipe = {}

  state.events.LOAD_RECIPES = 'loadRecipes'
  state.events.LOAD_RECIPE = 'loadRecipe'
  state.events.ADD_RECIPE = 'addRecipe'

  emitter.on(state.events.DOMCONTENTLOADED, function () {
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
  

  emitter.on(state.events.ADD_RECIPE, function(recipe) {
    axios.post('http://localhost:8081/', {
      recipe
    }
      // I should be able to link values passed from the addRecipe
      // component so the post request goes like this
      // And also, it has to work according to the backend
      // post method
      // recipe
    ).then(function(response) {
      state.error = null
      // state.recipe = response.data
      // console.log(response.data)
      emitter.emit(state.events.RENDER)
    }).catch(function(err) {
      state.error = 'Unable to add post'
      console.log(err)
      emitter.emit(state.events.RENDER)
    })
  })
}
