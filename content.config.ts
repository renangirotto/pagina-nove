import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    leituras: defineCollection({
      type: "page",
      source: "leituras/*.md",
      schema: z.object({
        artists: z.array(z.string()),
        collection: z.string().optional(),
        collectionVolume: z.number().optional(),
        cover: z.string(),
        date: z.date(),
        dateNote: z.date().optional(),
        labels: z.array(z.string()),
        pages: z.number(),
        publisher: z.string(),
        publishYear: z.string(),
        rating: z.string(),
        title: z.string(),
      }),
    }),
    notas: defineCollection({
      type: "page",
      source: "notas/*.md",
      schema: z.object({
        collection: z.array(z.string()).optional(),
        cover: z.string(),
        dateNote: z.date(),
        tags: z.array(z.string()).optional(),
        title: z.string(),
      }),
    }),
  },
});
