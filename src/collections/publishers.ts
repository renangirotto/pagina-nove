import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { publishers } from "./collections.config";

export default defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/publishers" }),
  schema: z.object({
    description: z.string().optional(),
    logo: z.string().optional(),
    name: publishers,
  }),
});
