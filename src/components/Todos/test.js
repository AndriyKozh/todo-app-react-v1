import Todo from "./Todo";

function Test({ todos }) {
  return todos.map((todo) => <Todo test={todo} />);
}
