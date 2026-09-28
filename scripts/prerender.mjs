import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';

const htmlPath = new URL('../dist/index.html', import.meta.url);
const { render } = await import('../.ssr/entry-server.js');
const html = await readFile(htmlPath, 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('Prerender marker missing');
await writeFile(htmlPath, html.replace('<!--app-html-->', render()));
const blankPages = { computer: '计算机', finance: '金融', music: '音乐' };
for (const [slug, title] of Object.entries(blankPages)) {
  const directory = new URL(`../dist/${slug}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#fdf5f3"><title>${title} · Happy Journey</title><style>html,body{margin:0;min-height:100%;background:#fdf5f3}</style></head><body></body></html>`);
}
await rm(new URL('../.ssr/', import.meta.url), { recursive: true, force: true });
