# To-Do List Craft
This project is a list of to-do lists, where it is possible to manage the tasks in each to-do list.\
Users can manage lists and search for items. Lists can be created, edited and deleted.\
And within each list it is possible to manage its items by creating, editing, deleting them and also changing their status to completed or to-do.

## Technology
React and JavaScript

## CSS architecture
Name pattern: BEM (Block Element Modifier)
File pattern: CSS Modules

## State management
### ContextAPI

ListsContext for lists\
ItemsContext for list items\
EditContext for edit mode

The list context was split into a second context called ItemsContext to follow the modularity pattern of the project

## Packages
UUID to generate unique ids for lists and items\
React Icons to use existing icons\
JSON Server to Mock a REST API

## Server
Fetch API to connect to mock API with JSON Server

## Installation

Clone the repository, access it and install the dependencies with npm:

```bash
  npm install
```

## Running the Project
In the project repository:

```bash
  npm run server
  npm start
```

## Project Started with Create React App

This project was bootstrapped with Create React App.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm run server`
Runs the JSON Server.

## Reference
- [JavaScript] https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- [React] https://react.dev/
- [Create React App] https://github.com/facebook/create-react-app
- [BEM] https://getbem.com/introduction/
- [CSS Modules] https://github.com/css-modules/css-modules
- [UUID] https://www.npmjs.com/package/uuid
- [React Icons] https://react-icons.github.io/react-icons
- [JSON Server] https://www.npmjs.com/package/json-server