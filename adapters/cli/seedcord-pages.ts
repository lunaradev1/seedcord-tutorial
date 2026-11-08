import { createPage, packageDocsPage } from '../helpers'
import type { ApiPageCollection } from '../types'

const packageName = 'seedcord'

export default {
  defineConfig: createPage(
    packageDocsPage(packageName, 'functions', 'define-config'),
    'defineConfig(config: SeedcordServerConfig): SeedcordServerConfig',
    'Types the seedcord.config.ts of a bot that runs on node or bun.',
  ),
  SeedcordServerConfig: createPage(
    packageDocsPage(packageName, 'interfaces', 'seedcord-server-config'),
    'interface SeedcordServerConfig extends SeedcordConfig',
    'The actual config of a bot that runs on node or bun.',
  ),
  SeedcordConfig: createPage(
    packageDocsPage(packageName, 'interfaces', 'seedcord-config'),
    'interface SeedcordConfig',
    'The seedcord.config.ts of a bot that runs on Cloudflare Workers. For a bot on node or bun, use SeedcordServerConfig. Its build also takes outDir and start.',
  ),
} satisfies ApiPageCollection
