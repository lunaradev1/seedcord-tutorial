interface ApiPageData {
  href: string
  signature: string
  summary: string
}

export type ApiPageCollection = Record<string, ApiPageData>
