import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@system/design-ui/components/*',
                '@system/design-ui/theme-provider',
                '@system/design-ui/use-theme',
                '@system/design-ui/branding',
                '@system/design-ui/lib/cn',
                '@system/design-ui/ThemeProvider',
                '@system/design-ui/useTheme',
              ],
              message: 'Import from the root package "@system/design-ui" instead.',
            },
          ],
        },
      ],
    },
  },
])
