import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/notes" }),
  schema: z.object({
    collection: z.array(z.string()).optional(),
    cover: z.string(),
    dateNote: z.date(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

const readings = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/readings" }),
  schema: z.object({
    artists: z.array(z.string()),
    collection: z.string().optional(),
    collectionVolume: z.number().optional(),
    cover: z.string(),
    date: z.date(),
    dateNote: z.date().optional(),
    labels: z.array(z.string()),
    pages: z.number(),
    publisher: z.array(z.string()),
    publishYear: z.string(),
    rating: z.string(),
    title: z.string(),
  }),
});

export const collections = { notes, readings };
