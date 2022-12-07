import Link from 'next/link';

function Header() {
  return (
    <header className="bg-blue-500 p-5 text-white">
      <Link
        href="/"
        className="rounded bg-white px-2 py-1 font-bold text-blue-500"
      >
        Home
      </Link>
      <Link href="/todos" className="rounded px-2 py-1 text-white">
        Todos
      </Link>
      <Link href="/search" className="rounded px-2 py-1 text-white">
        Search
      </Link>
    </header>
  );
}

export default Header;
