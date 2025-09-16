import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleBasicSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const user = await fetchUserData(username);
      setResults([user]);
      setTotalCount(1);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
      const data = await fetchAdvancedUsers({ username, location, minRepos });
      setResults(data.items);
      setTotalCount(data.total_count);
    } catch (err) {
      setError("Looks like we can't find users with the specified criteria");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchAdvancedUsers({ username, location, minRepos });
      setResults((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* Basic search form */}
      <form onSubmit={handleBasicSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {/* Advanced search form */}
      <form onSubmit={handleAdvancedSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repos"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Advanced Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} width="100" className="mb-2 rounded-full" />
            <h2 className="font-bold">{user.login}</h2>
            {user.location && <p>Location: {user.location}</p>}
            {user.public_repos !== undefined && <p>Repos: {user.public_repos}</p>}
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 underline">View Profile</a>
          </div>
        ))}
      </div>

      {results.length < totalCount && results.length > 0 && (
        <button onClick={loadMore} className="mt-4 bg-gray-500 text-white p-2 rounded">Load More</button>
      )}
    </div>
  );
}

export default Search;
