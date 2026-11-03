export const getPublicUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${process.env.PUBLIC_URL}/${cleanPath}`;
};