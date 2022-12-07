type Props = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    },
  ];
};

const getSearchResults = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERP_API_KEY}`,
  );
  const data: SearchResult = await res.json();
  return data;
};

async function SearchTermPage({ params: { searchTerm } }: Props) {
  const searchResults = await getSearchResults(searchTerm);

  return (
    <div>
      <p className="mt-2 text-sm text-gray-500">
        {' '}
        You searched for: {searchTerm}
      </p>
      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map(({ position, title, snippet }) => (
          <li key={position} className="list-decimal">
            <p className="font-bold">{title}</p>
            <p>{snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchTermPage;
