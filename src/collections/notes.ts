import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export default defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/notes" }),
  schema: z.object({
    collection: z.array(z.string()).optional(),
    cover: z.string(),
    dateNote: z.date(),
    draft: z.boolean().optional(),
    issue: z.string().optional(),
    socialCover: z.string().optional(),
    socialText: z.string().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});
