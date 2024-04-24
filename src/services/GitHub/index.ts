import useFetch from "@/hooks/useFetch";

const API_END_POINT = {
  RepositorySearch: "search/repositories",
  USER: "users",
  USER_REPO: "repos",
};

export function getRepoList(
  query: string,
  currentPage: number = 1,
  itemPerPage: number = 10
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

export function getUserDetails(user: string) {
  if (!user) throw new Error("user is required!");
  return useFetch(`${API_END_POINT.USER}/${user}`);
}

export function getUserRepoDetails(user: string, repo: string) {
  if (!user || !repo) throw new Error("user and repo is required!");
  return useFetch(`${API_END_POINT.USER_REPO}/${user}/${repo}`);
}
