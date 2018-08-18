var Component = require('choo/component')
var html = require('nanohtml')

function SignInButton (context) {
  if (context.authenticated) return
  return html`<button class="btn btn-primary" onclick=${context.signIn}>Sign In</button>`
}

function SignOutButton (context) {
  if (!context.authenticated) return
  return html`<button class="btn btn-primary" onclick=${context.signOut}>Sign Out</button>`
}

module.exports = class Header extends Component {
  constructor (name, state, emit) {
    super(name)
    this.state = state
    this.emit = emit

    this.authenticated = this.state.authenticated

    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  update () {
    const update = this.authenticated !== this.state.authenticated
    this.authenticated = this.state.authenticated
    return update
  }

  signIn () {
    this.state.authenticated = true
    this.emit(this.state.events.RENDER)
  }

  signOut () {
    this.state.authenticated = false
    this.emit(this.state.events.RENDER)
  }

  createElement () {
    return html`
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My Choo App</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        ${SignInButton(this)}
        ${SignOutButton(this)}
      </nav>
    `
  }
}
