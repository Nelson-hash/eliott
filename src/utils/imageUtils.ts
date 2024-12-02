export function getImageUrl(imagePath: string): string {
  // This function helps handle both local and remote images
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  // For local images in the public directory
  return `/public/images/${imagePath}`;
}