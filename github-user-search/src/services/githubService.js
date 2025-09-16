import axios from "axios";

// Basic user fetch (T0/T1)
export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search fetch (T2)
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  if (!username && !location && !minRepos) throw new Error("At least one search parameter required");

  // Construct the query string for GitHub Search API
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  return response.data; // GitHub returns an object with { total_count, items }
};
