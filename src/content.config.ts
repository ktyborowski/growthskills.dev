import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const skills = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/skills",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    user: z.string(),
    repo: z.string(),
    rawUrl: z.string(),
    githubUrl: z.string(),
    name: z.string(),
    topics: z.array(z.string()),
    description: z.string(),
    featured: z.boolean(),
  }),
});

const topics = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/topics",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    label: z.string(),
    description: z.string(),
  }),
});

export const collections = { skills, topics };
