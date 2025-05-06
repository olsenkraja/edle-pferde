// @ts-ignore
import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    created_at: z.date(),
    cover_image: image(),
  }),
})

const horses = defineCollection({
  schema: ({ image }) => z.object({
    full_name: z.string(),
    family: z.string().nullable().optional(),
    status: z.string(),
    birth_year: z.string(),
    profile_picture: image(),
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
  schema: ({ image }) => z.object({
    id: z.string(),
    photo: image(),
    created_at: z.date(),
  }),
})

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = { articles, horses, photos, pages }
