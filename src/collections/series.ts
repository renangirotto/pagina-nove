import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { series } from "./collections.config";

export default defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/series" }),
  schema: z.object({
    description: z.string().optional(),
    isFinished: z.boolean(),
    name: series,
  }),
});
