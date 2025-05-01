import type {ImageMetadata} from 'astro'

export default function imageImporter(path: string) {
  path = path.replace('@', '/src/')
  const allImages = import.meta.glob<{
    default: ImageMetadata
  }>('/src/assets/*/*/*/*.{jpeg,jpg,png,gif,webp}')

  return allImages[path]
}