var Component = require('choo/component')
var html = require('nanohtml')

module.exports = class AddRecipe extends Component {
  constructor (name, state, emit) {
    super(name)
    this.state = state
    this.emit = emit
    this.state = state
    this.test = this.test.bind(this)

    emit(state.events.ADD_RECIPE, recipe)

  }

  update () {
  }

  createElement () {
    return html`
    <div class="container-fluid">
        <legend>Recipe ID: </legend>
            <input type="number" name="recipeid" id="recipeid" placeholder="0" class="form-control" />
        <legend>Recipe Title</legend>
            <input type="text" name="title" id="title" class="form-control" /><br>
        <legend>Recipe Ingredients</legend>
            <textarea cols="50" rows="3" name="ingredients" id="ingredients" class="form-control"></textarea>
        <legend>Recipe Directions </legend>
            <textarea cols="50" rows="3" name="directions" id="directions" class="form-control"></textarea>
        <input type="button" class="btn btn-primary" onclick=${this.test} value="Add Recipe" />
    </div>
    
        `
  }

  test () {
    var id = Number(document.getElementById('recipeid').value)
    var title = document.getElementById('title').value
    var ingredients = document.getElementById('ingredients').value
    var directions = document.getElementById('directions').value
    var recipe = {
      id: id,
      title: title,
      ingredients: ingredients,
      directions: directions
    }
    this.emit(this.state.events.RENDER)
  }
}
