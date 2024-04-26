/**
 * Parses the given string to extract the user and repository names.
 *
 * @param {string} str - The string containing user and repository names separated by a slash ("/").
 * @returns {{ user: string, repo: string }} - An object containing the parsed user and repository names.
 */
export default function parseUserAndRepo(str: string) {
  const [user, repo] = str.split("/");
  return { user, repo };
}
