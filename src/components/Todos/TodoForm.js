import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmtHandler = ev => {
    ev.preventDefault();

    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmtHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={ev => setText(ev.target.value)}
        />
        {<button type="submit">Submit</button>}
      </form>
    </div>
  );
}

export default TodoForm;
