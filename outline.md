# Developing Sturdy Single-Page Applications with Choo

**TL;DR:** Learn how Choo works and build a sample app.

## What is Choo

## How Choo Works

### Choo and the Event-Driven Approach

### Managing State in Choo

### Managing Views in Choo

### Routing in Choo

### Choo Components

## Scaffolding your Choo Application

- talk about alternatives
- show how to use `create-choo-app`
- remove tachyons

## Creating Choo Stores

- What stores are
- Managing state with stores

## Creating And Rendering Choo Views

- talk about how views are created
- Caching components inside views
- Registering and rendering view


## Styling your Choo Application 

- what Sheetify is and how it works
- how to configure Bootstrap
- how to use your own global styles

## Creating Choo Components

- https://github.com/choojs/nanocomponent
- conditional re-rendering
- triggering 

## Adding Routing to your Choo Application

- How routes are created
- Types of routing - hash routing, wildcards, dynamic and static routing
- Registering routes

## Securing your Choo Application

No application can be sturdy enough without securing the identity of their users.

- Authenticating Choo apps using auth0

## Building A Simple Recipe App

- talk about how Choo can be used as a front end  for Express apps
- Using axios to get data from backend apps
- build stores, components and views
- adding authentication to choo app using auth0

## Conclusion

- talk about Choo briefly, flexibility, state management and view rendering.







# Developing Sturdy Simple-Page Applications With Choo

**TL;DR** Learn how Choo works and build a sample app

## Quick Overview of Choo and how it works

- talk about the event driven approach
- managing state and views in Choo
- routing in Choo
- components in Choo
- talk about Choo as a Progressive Web App (PWA)

## Creating A Recipe App with Choo and Express

- talk about project requirements
- talk about scaffolding the Choo app using the `create-choo-app`
- scaffold the express app in a sub folder, backend

### Building the Backend

- install project requirements for express
- set up the recipe app backend
- testing the backend using CURL

### Building the Recipe App frontend with Choo

- installing bootstrap and using it with Choo
- talk about using your own styles
- list directory structure ( stores, components and views )

#### Creating the store

- creating the recipe app's store, recipe.js
- connecting the store to the backend using axios
- create authenticating route (blank for now)
- talk about managing the app's state with the store

#### Creating the components

- create the components folder
- create the header, recipe, recipes and addRecipe components

#### Creating the view

- modify the already generated main view, main.js to render both the header and recipes component
- create the recipe view and render the recipe component
  - emit events from the store.
- creating the callback view


#### Adding Routing

- registering our routes: recipe, callback and user
- test routes

#### Rendering the View

- modifying the main view to cache components and render them
- setting various routes to the respective view paths

#### Securing the Recipe App

- Authenticating the app with auth0
- build the authentication store, stores/authentication.js
- create the user view and render the addRecipe component
- talk about how to render user view only when the user is authenticated
- register the user view

#### Building Recipe App into production

- talk about using the `npm run build`
- building prodcution version of the app, making it a PWA on mobile phones
- deploying to now.sh

## Conclusion

- give a quick review and/or overview of Choo