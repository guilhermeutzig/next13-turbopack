import '../styles/globals.css';
import '@/styles/dist.css';
import Header from '@/ui/Header';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
