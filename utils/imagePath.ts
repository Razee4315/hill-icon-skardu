export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/hill-icon-skardu' : '';
  return `${basePath}${path}`;
}
