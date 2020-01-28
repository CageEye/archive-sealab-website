export const cleanPath = path => {
  if (!path) return path;
  if (path.included('../')) {
    return path.replace('../', '/');
  }
  return path;
};

export default cleanPath;
