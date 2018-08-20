var Component = require('choo/component')
var html = require('nanohtml')

function RecipeDetails (recipe) {
  if (!recipe) return html`<p>Loading...</p>`
  return html`
    <div class="col-12">
      <section class="jumbotron">
        <h2>${recipe.title}</h2>
        <p class="lead">${recipe.ingredients}</p>
        <hr>
        <p>
          <strong>Directions</strong><br>
          ${recipe.directions}
        </p>
        <a href="/" class="btn btn-primary">Go Back</a>
      </section>
    </div>
  `
}

module.exports = class Recipe extends Component {
  constructor (name, state, emit) {
    super(name)
    this.state = state

    this.recipe = this.state.recipe

    emit(state.events.LOAD_RECIPE, state.query.id)
  }

  update () {
    const update = (
      this.recipe !== this.state.recipe
    )
    this.recipe = this.state.recipe
    return update
  }

  createElement () {
    return html`
      <div class="row">
        ${RecipeDetails(this.state.recipe)}
      </div>
    `
  }
}
