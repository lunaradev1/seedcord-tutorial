import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader'
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema'
import { seoSchema } from 'starlight-seo/schema'

const customSchema = z.object({
  accentColor: z.number().optional().default(0x00ffff),
  embedDescription: z.string().min(1).max(4096).optional(),
  giscus: z.boolean().optional().default(true),
  route: z.string().min(1),
})

export const collections = {
  autoSidebar: defineCollection({
    loader: autoSidebarLoader(),
    schema: autoSidebarSchema(),
  }),
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: seoSchema().extend(customSchema.shape),
    }),
  }),
}
