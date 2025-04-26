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

const horses = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    full_name: z.string(),
    birth_year: z.string(),
    profile_picture: z.string(),
  }),
});

export const collections = { articles, horses };
