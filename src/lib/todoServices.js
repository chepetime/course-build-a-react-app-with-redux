const baseUrl = process.env.REACT_APP_BASE_URL
const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }

export const getTodos = () => {
  return fetch(baseUrl).then(res => res.json())
}

export const createTodo = (name) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({name: name, isComplete: false})
  }).then(res => res.json())
}

export const updateTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(todo)
  }).then(res => res.json())
}

export const destroyTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers
  })
}
