import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { LabelSchema, PublishersSchema, RatingSchema } from "./collections";

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
    coverNote: z.string().optional(),
    date: z.date(),
    dateNote: z.date().optional(),
    label: LabelSchema,
    pages: z.number(),
    publisher: PublishersSchema,
    publishYear: z.string(),
    rating: RatingSchema,
    title: z.string(),
    titleNote: z.string().optional(),
  }),
});

export const collections = { notes, readings };
