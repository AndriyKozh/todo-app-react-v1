import styles from './Todo.module.css';
import { FaClipboardList, FaTrashAlt, FaCheck } from 'react-icons/fa';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
      onDoubleClick={() => deleteTodo(todo.id)}
    >
      <FaClipboardList className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>

      <FaTrashAlt
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />

      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
