import Link from 'next/link';
import { Todo } from 'typings';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <ul>
      {todos.map(({ id }) => (
        <li>
          <Link key={id} href={`/todos/${id}`}>
            Todo: {id}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
