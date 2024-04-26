import config from "@/config";
import useFetch from "@/hooks/useFetch";

const API_END_POINT = {
  RepositorySearch: "search/repositories",
  USER: "users",
  USER_REPO: "repos",
};

/**
 * Fetches a list of repositories based on a search query from the GitHub API.
 *
 * @param {string} query - The search query for repositories.
 * @param {number} currentPage - The current page number (default is 1).
 * @param {number} itemPerPage - The number of items per page (default is 12).
 * @returns {FetchTypes<any>} - An object containing data, loading, and error states.
 * @throws {Error} - Throws an error if query is missing.
 */
export function getRepoList(
  query: string,
  currentPage: number = 1,
  itemPerPage: number = 12
) {
  if (!query) throw new Error("Repository query is required");

  return useFetch(API_END_POINT.RepositorySearch, {
    q: query,
    sort: "stars",
    order: "desc",
    page: currentPage.toString(),
    per_page: itemPerPage.toString(),
  });
}

/**
 * Fetches details of a specific user from the GitHub API.
 *
 * @param {string} user - The username of the user.
 * @returns {FetchTypes<any>} - An object containing data, loading, and error states.
 * @throws {Error} - Throws an error if user is missing.
 */
export function getUserDetails(user: string) {
  if (!user) throw new Error("user is required!");
  return useFetch(`${API_END_POINT.USER}/${user}`);
}

/**
 * Fetches details of a specific repository for a given user from the GitHub API.
 *
 * @param {string} user - The username of the user.
 * @param {string} repo - The name of the repository.
 * @returns {FetchTypes<any>} - An object containing data, loading, and error states.
 * @throws {Error} - Throws an error if user or repo is missing.
 */
export function getUserRepoDetails(user: string, repo: string) {
  if (!user || !repo) throw new Error("user and repo is required!");
  return useFetch(`${API_END_POINT.USER_REPO}/${user}/${repo}`);
}

/**
 * Fetches a list of repositories for a given user from the GitHub API.
 *
 * @param {string} user - The username of the user.
 * @param {number} [currentPage=1] - The current page of the repository list.
 * @param {number} [itemPerPage=6] - The number of items to display per page.
 * @returns {FetchTypes<any[]>} - An object containing data, loading, and error states.
 * @throws {Error} - Throws an error if user is missing.
 */
export function getUserRepoList(
  user: string,
  currentPage: number = 1,
  itemPerPage: number = 6
) {
  if (!user) throw new Error("user is required!");

  return useFetch(`${API_END_POINT.USER}/${user}/repos`, {
    page: currentPage.toString(),
    per_page: itemPerPage.toString(),
  });
}

/**
 * Fetches the README.md file for a given GitHub repository.
 *
 * @param {string} user - The username of the repository owner.
 * @param {string} repo - The name of the repository.
 * @param {string} branch - The branch name of the repository.
 * @returns {FetchTypes<string>} - An object containing data, loading, and error states.
 * @throws {Error} - Throws an error if user, repo, or branch is missing.
 */
export function getRepoReadme(user: string, repo: string, branch: string) {
  if (!user || !repo || !branch)
    throw new Error("user, repo and branch is required!");
  return useFetch(
    `/${user}/${repo}/${branch}/README.md`,
    {},
    `${config.APP.API_URL_RAW}`
  );
}
