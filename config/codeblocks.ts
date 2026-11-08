import type { CodeblocksOptions } from 'starlight-codeblocks'
import { nextflow } from 'starlight-codeblocks/adapters/nextflow'
import { python } from 'starlight-codeblocks/adapters/python'

import { seedcordCliAdapter } from '../adapters'

export default {
  fileIcons: { set: 'material' },
  swatches: { prose: true },
  apiLinks: { adapters: [nextflow(), python(), seedcordCliAdapter()] },
} satisfies CodeblocksOptions
