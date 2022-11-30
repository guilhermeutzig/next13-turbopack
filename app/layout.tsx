import '@/styles/dist.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <h1>Page layout</h1>
        {children}
      </body>
    </html>
  );
}
