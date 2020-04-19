let todoList = [
  { text: 'buy groceries' },
  { text: 'watch netflix' },
]
export default function manageTodo(state = { todos: todoList }, action) {

  switch (action.type) {
    case "ADD_TODO":
      return {...state,todos: [...state.todos,{text: action.payload.text}]}
  
    default:
      return state
  }
}
