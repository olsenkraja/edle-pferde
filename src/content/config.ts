// @ts-ignore
import {defineCollection, z} from 'astro:content'

const articles = defineCollection({
  // @ts-ignore
  schema: ({image}) => z.object({
    title: z.string(),
    created_at: z.date(),
    cover_image: image(),
    horses: z.array(z.string()).nullable().optional(),
  }),
})

const horses = defineCollection({
  // @ts-ignore
  schema: ({image}) => z.object({
    full_name: z.string(),
    family: z.string().nullable().optional(),
    current_owner: z.string().nullable().optional(),
    status: z.string(),
    birth_year: z.string(),
    lived_until: z.string().nullable().optional(),
    profile_picture: image(),
    gallery: z.array(image()).nullable().optional(),
    youtube_video_id: z.string().nullable().optional(),
    breed: z.string(),
    size: z.string().nullable().optional(),
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
  // @ts-ignore
  schema: ({image}) => z.object({
    id: z.string(),
    photo: image(),
    horses: z.array(z.string()).nullable().optional(),
    created_at: z.date(),
  }),
})

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = {articles, horses, photos, pages}
