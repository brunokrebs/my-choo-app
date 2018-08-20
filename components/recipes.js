var Component = require('choo/component')
var html = require('nanohtml')

function Recipe (recipe) {
  return html`
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card recipe">
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">${recipe.ingredients}</p>
          <a href="/recipe?id=${recipe.id}" class="btn btn-primary">More Details</a>
        </div>            
      </div>
    </div>
  `
}

module.exports = class Recipes extends Component {
  constructor (name, state) {
    super(name)
    this.state = state

    this.authenticated = this.state.authenticated
    this.recipes = this.state.recipes
  }

  update () {
    const update = (
      this.recipes !== this.state.recipes ||
      this.authenticated !== this.state.authenticated
    )
    this.recipes = this.state.recipes
    this.authenticated = this.state.authenticated
    return update
  }

  createElement () {
    return html`
      <div class="row">
        ${this.recipes.map(recipe => Recipe(recipe))}
      </div>
    `
  }
}
