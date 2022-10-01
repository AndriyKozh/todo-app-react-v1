import { useState } from 'react';

import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos] = useState([1, 2, 3]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
