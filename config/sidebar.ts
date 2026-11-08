// TODO: Add icons for each tutorial in the sidebar once I figure out how that works.
import type { StarlightSidebarTopicsUserConfig } from 'starlight-sidebar-topics'

function tutorialRoute(name: string, ...other: string[]) {
  return ['tutorial', name, ...other].join('/')
}

// const envaptTutorialRoute = (...other: string[]) => tutorialRoute('envapt', ...other)
const seedcordTutorialRoute = (...other: string[]) => tutorialRoute('seedcord', ...other)

export default [
  {
    label: 'seedcord',
    link: `/tutorial/seedcord`,
    id: 'seedcord',
    items: [
      {
        label: 'Start Here',
        items: [seedcordTutorialRoute(), seedcordTutorialRoute('introduction'), seedcordTutorialRoute('creation')],
      },
    ],
  },
  {
    label: 'envapt',
    link: `/tutorial/envapt`,
    id: 'envapt',
    items: [{ label: 'Start Here', items: [{ autogenerate: { directory: `tutorial/envapt` } }] }],
  },
] satisfies StarlightSidebarTopicsUserConfig
