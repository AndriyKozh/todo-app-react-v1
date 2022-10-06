import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from 'components/UI/Button';

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
        {
          <Button type="submit" title="Submit">
            Submit
          </Button>
        }
      </form>
    </div>
  );
}

export default TodoForm;
