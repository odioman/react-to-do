import './App.css';
import React from 'react';
import TodoItem from './components/TodoItem.js';
import todosData from './components/todosData.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
    }
  }
  render() {
    const todoItemComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
      return (
        <div className="todo-list">
          {todoItemComponents}
        </div>
      );
    }
}
export default App;
