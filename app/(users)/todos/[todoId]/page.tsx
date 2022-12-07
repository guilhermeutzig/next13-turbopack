import { Todo } from 'typings';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    todoId: string;
  };
};

export const dynamicParams = true;

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    // Revalidates page after 60sec in the cache
    { next: { revalidate: 60 } },
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: Props) {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="m-2 border-2 bg-yellow-200 p-10 text-black shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className="mt-5 border-t border-black text-right">
        By user: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

// This will statically generate the 10 pages for todos/{id}
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();

  // Using only 10 todos because of rate limit from the API
  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({ todoId: todo.id.toString() }));
}
