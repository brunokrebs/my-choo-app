var Component = require('choo/component')
var html = require('nanohtml')

function Recipe (recipe) {
  return html`<li>${recipe.title}</li>`
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
      <section>
        <ul>
          ${this.recipes.map(recipe => Recipe(recipe))}
        </ul>
      </section>
    `
  }
}
