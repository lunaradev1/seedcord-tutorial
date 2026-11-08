import type { StarlightGiscusUserConfig } from 'starlight-giscus'

export default {
  repo: 'lunaradev1/seedcord-tutorial',
  repoId: 'R_kgDOVfTmUw',
  category: 'Tutorial Comments',
  categoryId: 'DIC_kwDOVfTmU84',
  lazy: true,
  inputPosition: 'top',
  mapping: 'og:title',
  reactions: true,
  theme: {
    light: 'GitHub Light',
    dark: 'Transparent Dark',
  },
} satisfies StarlightGiscusUserConfig
