import type { StarlightExpressiveCodeOptions } from '@astrojs/starlight/expressive-code'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default {
  defaultProps: {
    showLineNumbers: false,
  },
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
} satisfies StarlightExpressiveCodeOptions
