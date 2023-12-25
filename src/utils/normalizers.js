export default function normalizePath(path) {
  return path.endsWith('/') ? path.slice(0, -1) : path;
}
