import TodosList from './TodosList';

function Todos() {
  return (
    <div>
      {/* Known bug */}
      {/* Vercel team doesn't currently have Typescript definitions for server components */}
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
}

export default Todos;
