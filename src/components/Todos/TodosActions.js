import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodosActions.module.css';

function TodosActions({ resetTodos, deleteCompletedTodos, complitedTodos }) {
  return (
    <div className={styles.todoEctionContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        disabled={!complitedTodos}
        onClick={deleteCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
