export function getImageUrl(imagePath: string): string {
  // If the path already starts with a slash or http, return as is
  if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
    return imagePath;
  }
  // Otherwise, prepend a slash
  return `/${imagePath}`;
}