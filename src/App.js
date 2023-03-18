import './App.css';
import React from 'react';
import TodoItem from './components/TodoItem.js';
import todosData from './components/todosData.js';

function App() {
  const todoItemComponents = todosData.map(item => <TodoItem key={item.id} item={item} />)
  return (
    <div className="todo-list">
      {todoItemComponents}
    </div>
  );
}

export default App;
