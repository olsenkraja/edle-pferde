// @ts-ignore
import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    created_at: z.date(),
    cover_image: z.string(),
  }),
})

const horses = defineCollection({
  schema: z.object({
    full_name: z.string(),
    family: z.string().nullable().optional(),
    status: z.string(),
    birth_year: z.string(),
    profile_picture: z.string(),
    breed: z.string(),
    size: z.string(),
    color: z.string(),
    bio: z.string(),
    father: z.object({
      discriminant: z.boolean(),
      value: z.string().nullable().optional()
    }).nullable().optional(),
    mother: z.object({
      discriminant: z.boolean(),
      value: z.string().nullable().optional()
    }).nullable().optional(),
    fathers_father: z.object({
      discriminant: z.boolean(),
      value: z.string().nullable().optional()
    }).nullable().optional(),
    fathers_mother: z.object({
      discriminant: z.boolean(),
      value: z.string().nullable().optional()
    }).nullable().optional(),
    mothers_father: z.object({
      discriminant: z.boolean(),
      value: z.string().nullable().optional()
    }).nullable().optional(),
    mothers_mother: z.object({
      discriminant: z.boolean(),
      value: z.string().nullable().optional()
    }).nullable().optional(),
    children: z.array(z.string()),
  }),
})

const photos = defineCollection({
  schema: z.object({
    photo: z.string(),
    alt_description: z.string(),
    created_at: z.date(),
  }),
})

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = { articles, horses, photos, pages }
