export function getImageUrl(imagePath: string): string {
  // This function helps handle both local and remote images
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  // For local images, we use the Vite public directory
  return `/images/${imagePath}`;
}