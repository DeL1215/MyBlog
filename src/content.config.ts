import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const achievements = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/achievements' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['technical', 'artistic']),
    type: z.enum(['project', 'competition', 'certificate', 'experience', 'other']).default('project'),
    year: z.number(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
    demoUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
  }).superRefine((data, context) => {
    if (data.cover && !data.coverAlt?.trim()) {
      context.addIssue({ code: 'custom', path: ['coverAlt'], message: '設定 cover 時也必須提供 coverAlt。' });
    }
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

export const collections = { achievements, posts };
