type Props = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  );
  const todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: Props) {
  const todo = await fetchTodo(todoId);

  console.log(todo);

  return (
    <ul>
      <li>Todo id: {todoId}</li>
      <li>Todo title: {todo.title}</li>
    </ul>
  );
}

export default TodoPage;
