import type { SymbolRef } from 'starlight-codeblocks'

import { TOKENS } from './regexps.ts'

const SEEDCORD_DOCS_DOMAIN = 'https://seedcord.org/docs'

interface GetSymbolRefsOptions {
  importRegexp: RegExp
  code: string
  pages: Record<string, { href: string; signature: string; summary: string }>
  source: string
}

function getImports(importRegexp: RegExp, code: string) {
  const imported = new Set<string>()
  for (const [, name, list] of code.matchAll(importRegexp)) {
    for (const item of [name, ...(list?.split(',') ?? [])]) if (item) imported.add(item.trim())
  }
  return imported
}

function createUrlFromRest(...rest: string[]): string {
  return [...rest].join('/')
}

export function getSymbolRefs({ importRegexp, code, pages, source }: GetSymbolRefsOptions): SymbolRef[] {
  const imported = getImports(importRegexp, code)
  const symbols: SymbolRef[] = []

  for (const { 0: name, index } of code.matchAll(TOKENS)) {
    const page = imported.has(name) && pages[name]
    const isKeyOrProperty = code[index - 1] === '.' || /^\s*:(?!:)/.test(code.slice(index + name.length))

    if (page && !isKeyOrProperty) {
      symbols.push({
        start: index,
        end: index + name.length,
        name,
        ...page,
        source,
      })
    }
  }

  return symbols
}

export function packageDocsPage(packageName: string, ...rest: string[]): string {
  return createUrlFromRest(SEEDCORD_DOCS_DOMAIN, 'packages', packageName, 'latest', ...rest)
}

export function createPage(href: string, signature: string, summary: string) {
  return {
    href,
    signature,
    summary,
  }
}
