// @ts-ignore
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    created_at: z.date(),
    cover_image: z.string(),
  }),
});

export const collections = { articles };
