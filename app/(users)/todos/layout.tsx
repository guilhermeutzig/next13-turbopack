import TodosList from '@/ui/TodosList';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <div>
        {/* Known bug */}
        {/* Vercel team doesn't currently have Typescript definitions for server components */}
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

export default RootLayout;
