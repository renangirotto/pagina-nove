import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { publishers, series } from "./collections.config";

const label = z.enum(["Quadrinho", "Manga"]);

// TAGS
// - Para ter na estante

export default defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/readings" }),
  schema: z.object({
    artists: z.array(z.string()),
    cover: z.string(),
    date: z.date(),
    label,
    pages: z.number(),
    publisher: publishers,
    publishYear: z.string(),
    series,
    seriesIssue: z.number().optional(),
    socialCover: z.string().optional(),
    socialText: z.string().optional(),
    socialTitle: z.string().optional(),
    tags: z.array(z.string()).refine(
      (tags) => tags.every((t) => ["para-ter-na-estante", "destaque-da-serie"].includes(t)),
      { message: "Invalid tag value" }
    ).optional(),
    title: z.string(),
  }),
});
