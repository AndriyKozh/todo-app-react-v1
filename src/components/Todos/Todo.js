import styles from './Todo.module.css';
import { FaClipboardList } from 'react-icons/fa';
function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <FaClipboardList className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
      <button type={'button'} onClick={() => deleteTodo(index)}>
        <FaClipboardList />
      </button>
    </div>
  );
}

export default Todo;
