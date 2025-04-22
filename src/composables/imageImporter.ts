import type {ImageMetadata} from 'astro';

export default function coverImageImporter(collectionName: string, slug: string) {
  const allCoverImages = import.meta.glob<{
    default: ImageMetadata
  }>('/src/assets/cover_images/*/*/*.{jpeg,jpg,png,gif,webp}');
  const imagePathKey = `/src/assets/cover_images/${collectionName}/${slug}/cover_image.jpg`;
  return  allCoverImages[imagePathKey];
}