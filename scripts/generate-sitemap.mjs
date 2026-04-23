// scripts/generate-sitemap.mjs
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const locales = ['en', 'es', 'fr', 'pt', 'de', 'zh', 'ja', 'ru'];
const staticSections = [
    '',
    '/integrations',
    '/coming-soon',
    '/community',
    '/excelsior',
    '/intelligent-glasses',
    '/lux-origin',
    '/luxor',
    '/luxor-pay',
    '/roadmap',
    '/stablecoin',
    '/team'
];

async function generate() {
    console.log('--- Generating Static Sitemap ---');

    const sitemapEntries = [];
    const baseUrl = 'https://byluxor.xyz';

    // 1. Static Routes
    for (const locale of locales) {
        for (const section of staticSections) {
            sitemapEntries.push({
                loc: `${baseUrl}/${locale}${section}`,
                lastmod: new Date().toISOString().split('T')[0],
                priority: section === '' ? '1.0' : '0.8',
            });
        }
    }

    // 3. Construct XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', xml);
    console.log(`✅ sitemap.xml saved with ${sitemapEntries.length} items`);
}

generate().catch(console.error);
