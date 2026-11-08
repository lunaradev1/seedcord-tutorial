import starlight from '@astrojs/starlight'
import starWarp from '@inox-tools/star-warp'
import { defineConfig } from 'astro/config'
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform'
import starlightAnnouncement from 'starlight-announcement'
import starlightAutoDrafts from 'starlight-auto-drafts'
import starlightAutoSidebar from 'starlight-auto-sidebar'
import starlightCodeblocks from 'starlight-codeblocks'
import starlightContextualMenu from 'starlight-contextual-menu'
import starlightCoolerCredit from 'starlight-cooler-credit'
import starlightFullviewMode from 'starlight-fullview-mode'
import starlightGiscus from 'starlight-giscus'
import starlightGroupPages from 'starlight-group-pages'
import starlightHeadingBadges from 'starlight-heading-badges'
import starlightImageZoom from 'starlight-image-zoom'
import starlightKbd from 'starlight-kbd'
import starlightLinksValidator from 'starlight-links-validator'
import starlightQuiz from 'starlight-quiz'
import starlightSidebarSwipe from 'starlight-sidebar-swipe'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightTelescope from 'starlight-telescope'
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import Icons from 'unplugin-icons/vite'

import codeblocksConfig from './config/codeblocks'
import expressiveCodeConfig from './config/expressive-code'
import giscusConfig from './config/giscus'
import sidebarConfig from './config/sidebar'

const host = process.env.TAURI_DEV_HOST
const runningUnderTauri = Boolean(process.env.USING_TAURI)
const url = 'https://tutorial.seedcord.org'

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [
    starlight({
      title: 'Seedcord Tutorial',
      social: [{ icon: 'github', label: 'GitHub', href: `https://github.com/${giscusConfig.repo}` }],
      expressiveCode: expressiveCodeConfig,
      plugins: [
        starlightCodeblocks(codeblocksConfig),
        starlightThemeGalaxy(),
        starlightQuiz({
          quizDefaults: {
            autoSubmit: false,
            shuffle: true,
          },
        }),
        starWarp(),
        starlightHeadingBadges(),
        starlightImageZoom(),
        starlightKbd({
          globalPicker: false, // We inject this ourselves due to overrides from other plugins, setting this to false removes the warning in the console.
          types: [
            { id: 'windows', label: 'Windows', detector: 'windows', default: true },
            { id: 'mac', label: 'macOS', detector: 'apple' },
            { id: 'linux', label: 'Linux', detector: 'linux' },
          ],
        }),
        starlightLinksValidator(),
        starlightSidebarSwipe(),
        starlightSidebarTopics(sidebarConfig, { exclude: ['/tutorial'] }),
        starlightContextualMenu({
          actions: ['copy', 'view', 'chatgpt', 'claude'],
        }),
        starlightGroupPages(),
        starlightGiscus(giscusConfig),
        starlightTelescope(),
        starlightAutoSidebar(),
        starlightFullviewMode({ leftSidebarEnabled: false, rightSidebarEnabled: false }),
        starlightCoolerCredit(),
        starlightAnnouncement({
          announcements: [
            {
              id: 'breaking-caution',
              content:
                'The seedcord framework is not 1.0 yet, this tutorial may be outdated or broken. Please report any issues you find on GitHub.',
              variant: 'caution',
              dismissible: true,
            },
          ],
        }),
        starlightAutoDrafts(),
      ],
      components: {
        Head: './src/components/Head.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
        MobileTableOfContents: './src/components/MobileTableOfContents.astro',
        Pagination: './src/components/Pagination.astro',
        Sidebar: './src/components/Sidebar.astro',
        TableOfContents: './src/components/TableOfContents.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
    }),
  ],

  vite: {
    build: {
      // Tauri uses Chromium on Windows and WebKit on macOS and Linux
      target: process.env.TAURI_ENV_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
      // don't minify for debug builds
      minify: !process.env.TAURI_ENV_DEBUG,
      // produce sourcemaps for debug builds
      sourcemap: !!process.env.TAURI_ENV_DEBUG,
    },
    clearScreen: false, // Don't clear the console on rebuilds, so we can see errors and warnings from Rust.
    envPrefix: ['VITE_', 'TAURI_ENV_*'],
    plugins: [Icons({ compiler: 'astro' }), MagicRegExpTransformPlugin.vite()],
    server: {
      allowedHosts: ['localhost', '.trycloudflare.com'],
      host: host ?? false,
      strictPort: runningUnderTauri, // Tauri expects ONE port, if it's not available, error out. This is important for Tauri's dev server to work properly.
      watch: {
        ignored: ['**/src-tauri/**'],
      },
    },
  },
})
