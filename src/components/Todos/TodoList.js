import Todo from "./Todo";

function Todolist({ todos }) {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
}

export default Todolist;
