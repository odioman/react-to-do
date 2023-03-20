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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
      console.log(prevState.todos)
      console.log(updatedTodos)
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItemComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
      return (
        <div className="todo-list">
          {todoItemComponents}
        </div>
      );
    }
}
export default App;
