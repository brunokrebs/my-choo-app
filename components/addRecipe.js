var Component = require('choo/component')
var html = require('nanohtml')

module.exports = class AddRecipe extends Component {
  constructor (name, state, emit) {
    super(name)
    this.state = state
    this.emit = emit
    this.state = state
    this.test = this.test.bind(this)
}

  update () {
  }


  createElement () {
      return html`
    <div class="col-12">
        <input type="text" name="title" id="title" /><br>
        <textarea cols="50" rows="3" name="ingredients" id="ingredients"></textarea>
        <textarea cols="50" rows="3" name="directions" id="directions"></textarea>
        <input type="button" class="btn btn-primary" onclick=${this.test}/>
    </div>
    
        `
    }

    test () {
        var title = document.getElementById("title").value
        var ingredients = document.getElementById("ingredients").value
        var directions = document.getElementById("directions").value
        var recipe = {
            id: 3,
            title: title,
            ingredients: ingredients,
            directions: directions
        }
        return this.emit(this.state.events.ADD_RECIPE, recipe)
        
    }
}
