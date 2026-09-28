import { readFile, writeFile, rm } from 'node:fs/promises';

const htmlPath = new URL('../dist/index.html', import.meta.url);
const { render } = await import('../.ssr/entry-server.js');
const html = await readFile(htmlPath, 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('Prerender marker missing');
await writeFile(htmlPath, html.replace('<!--app-html-->', render()));
await rm(new URL('../.ssr/', import.meta.url), { recursive: true, force: true });
