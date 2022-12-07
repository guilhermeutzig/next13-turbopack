'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function Search() {
  const [search, setSearch] = useState<string>('');
  const router: AppRouterInstance = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn rounded-lg bg-blue-500 py-2 px-4 font-bold text-white"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
