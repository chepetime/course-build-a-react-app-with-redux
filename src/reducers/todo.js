const initState = {
  todos: [
    { id: 1, name: 'Create a store', isComplete: true },
    { id: 2, name: 'Load state strough the store', isComplete: true },
    { id: 3, name: 'Handle state changes wth redux', isComplete: false }
  ],
  currentTodo: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
    case 'CURRENT_UPDATE':
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}