export default function parseUserAndRepo(str: string) {
  const [user, repo] = str.split("/");
  return { user, repo };
}
