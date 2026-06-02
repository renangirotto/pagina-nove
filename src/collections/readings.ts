import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { publishers, RatingSchema, series } from "./collections.config";

const label = z.enum(["Quadrinho", "Manga"]);
const tags = z.array(z.enum(["Para ter na estante"])).optional();

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
    rating: RatingSchema,
    series,
    seriesIssue: z.number().optional(),
    socialCover: z.string().optional(),
    socialText: z.string().optional(),
    socialTitle: z.string().optional(),
    tags,
    title: z.string(),
  }),
});
