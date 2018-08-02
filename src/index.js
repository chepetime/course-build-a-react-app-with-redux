import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';


const todoChangeHandler = (val) => {
  store.dispatch({
    type: 'CURRENT_UPDATE',
    payload: val
  })
}

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changecurrent={todoChangeHandler}
    />, document.getElementById('root'));
}

render()

store.subscribe(render)

registerServiceWorker();
