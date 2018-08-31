var Component = require('choo/component')
var html = require('nanohtml')

function DashBoard (context) {
  if (!context.authenticated) return
  return html`<a href="/user" class="page-link">Post A New Recipe</a>`
}

function ProfileLabel (context) {
  if (!context.authenticated) return
  return html`<label class="profile">${context.state.profile.name}</label>`
}

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
    this.emit(this.state.events.SIGN_IN)
  }

  signOut () {
    this.emit(this.state.events.SIGN_OUT)
  }

  createElement () {
    return html`
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Recipe App</a>
        ${ProfileLabel(this)}
        ${DashBoard(this)}
        ${SignInButton(this)}
        ${SignOutButton(this)}
      </nav>
    `
  }
}
