import type { StarlightRouteData } from '@astrojs/starlight/route-data'
import { Container, TextDisplay, Thumbnail, Section } from 'discord-component-embed'

interface CardProps {
  title: string
  origin: string
  description?: string
  href?: string
  accentColor?: number
}

function SiteCard({ accentColor = 0x00ffff, title, description, href, origin }: CardProps) {
  return (
    <Container accentColor={accentColor}>
      <Section
        accessory={<Thumbnail url={origin + '/seedcord-tutorial-logo.png'} description='The logo for the tutorial' />}
      >
        <TextDisplay>
          # [{title}]({href ? origin + href : origin})
        </TextDisplay>
        <TextDisplay>{description ?? 'No description found'}</TextDisplay>
      </Section>
    </Container>
  )
}

export default function TutorialCard(routeData: StarlightRouteData, origin: string) {
  const starlightEntry = routeData.entry
  const entryData = starlightEntry.data

  const pageDescription = entryData.embedDescription ?? entryData.description

  if (entryData.template === 'splash')
    return (
      <SiteCard
        title={routeData.siteTitle}
        description={pageDescription}
        href={routeData.siteTitleHref}
        origin={origin}
      />
    )

  return <SiteCard {...entryData} description={pageDescription} origin={origin} href={entryData.route} />
}
