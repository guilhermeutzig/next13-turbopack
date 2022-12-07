type Props = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`,
  );
  const data = await res.json();
  return data;
};

async function SearchTermPage({ params: { searchTerm } }: Props) {
  const searchResults = await search(searchTerm);

  return <div>search results</div>;
}

export default SearchTermPage;
