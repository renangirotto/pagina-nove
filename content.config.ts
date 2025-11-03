import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    leituras: defineCollection({
      type: 'page',
      source: 'leituras/*.md',
      schema: z.object({
        artists: z.array(z.string()),
        collection: z.string().optional(),
        collectionVolume: z.number().optional(),
        cover: z.string(),
        date: z.date(),
        labels: z.array(z.string()),
        pages: z.string().optional(),
        publisher: z.string(),
        publishYear: z.string().optional(),
        rating: z.string(),
        title: z.string(),
      })
    })
  }
})
