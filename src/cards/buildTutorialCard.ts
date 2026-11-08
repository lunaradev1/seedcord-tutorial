import type { StarlightRouteData } from '@astrojs/starlight/route-data'

import TutorialCard from './TutorialCard'

export function buildTutorialCard(routeData: StarlightRouteData, origin: string) {
  return TutorialCard(routeData, origin)
}
