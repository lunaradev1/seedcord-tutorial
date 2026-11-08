import type { ApiLinkAdapter, SymbolRef } from 'starlight-codeblocks'

import { getSymbolRefs } from '../helpers'
import { SEEDCORD_CLI_IMPORT } from '../regexps'
import pages from './seedcord-pages'

const adapter = {
  name: 'seedcord-cli',
  languages: ['ts', 'tsx'],
  async setup() {},
  findSymbols(code: string): SymbolRef[] {
    return getSymbolRefs({
      importRegexp: SEEDCORD_CLI_IMPORT,
      code,
      pages,
      source: 'seedcord CLI reference',
    })
  },
} satisfies ApiLinkAdapter

export const seedcordCliAdapter = () => adapter
