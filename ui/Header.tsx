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
    </header>
  );
}

export default Header;
