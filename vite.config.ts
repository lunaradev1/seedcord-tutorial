import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
    '*.{md,mdx}': 'markdownlint-cli2',
  },
  fmt: {
    singleQuote: true,
    jsxSingleQuote: true,
    semi: false,
    sortImports: true,
    sortPackageJson: true,
    sortTailwindcss: true,
    tabWidth: 2,
    useTabs: false,
    printWidth: 120,
    ignorePatterns: [
      'node_modules',
      '.git',
      '.vscode',
      'dist',
      'build',
      '.knip.jsonc',
      '.agents',
      'studio/',
      '.cloudflare/',
      '**/*mdx',
    ],
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
    },
    options: { typeAware: true, typeCheck: true },
    plugins: ['eslint', 'import', 'jsdoc', 'node', 'oxc', 'promise', 'typescript', 'unicorn'],
    ignorePatterns: ['node_modules', '.git', '.husky', '.vscode', 'dist', 'build', 'studio/', '.cloudflare/'],
  },
})
