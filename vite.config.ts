import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'


/* ─────────────────────────────────────────────────────────────────────────────
   Emits robots.txt and sitemap.xml at build time from the real route table, so
   they cannot drift out of sync with the app. Journal articles are pulled from
   the article index and only published ones are listed.

   Domain comes from VITE_SITE_URL, falling back to the value in
   src/app/data/site.ts.
   ───────────────────────────────────────────────────────────────────────── */
function seoFiles() {
  return {
    name: 'vala-seo-files',
    apply: 'build',
    async generateBundle() {
      const origin = (process.env.VITE_SITE_URL || 'https://valawild.com').replace(/\/$/, '')
      const today = new Date().toISOString().slice(0, 10)

      // Static routes, in the order Sitemap V2 presents them.
      const paths = [
        ['/', '1.0'],
        ['/kilimanjaro', '0.9'],
        ['/create-your-own-journey', '0.9'],
        ['/kilimanjaro/base-camp', '0.7'],
        ['/kilimanjaro/live-qa-events', '0.7'],
        ['/about', '0.7'],
        ['/impact', '0.7'],
        ['/journal', '0.7'],
        ['/contact', '0.8'],
        ['/faq', '0.6'],
      ]

      // Published journal articles
      const journalSrc = fs.readFileSync(
        path.resolve(__dirname, 'src/app/data/journal.ts'), 'utf8')
      const entries = [...journalSrc.matchAll(/slug:\s*'([^']+)'[\s\S]*?published:\s*(true|false)/g)]
      for (const [, slug, published] of entries) {
        if (published === 'true') paths.push([`/journal/${slug}`, '0.6'])
      }

      const urls = paths.map(([p, priority]) =>
        `  <url>\n    <loc>${origin}${p}</loc>\n    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
      ).join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source:
          `User-agent: *\nAllow: /\n\n` +
          `# Nothing here is private; the whole site is meant to be found.\n` +
          `Sitemap: ${origin}/sitemap.xml\n`,
      })
    },
  }
}

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    figmaAssetResolver(),
    seoFiles(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react({
      babel: {
        compact: false,
      }
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
