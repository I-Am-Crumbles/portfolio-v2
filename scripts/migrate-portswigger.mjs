// One-off migration: pulls PortSwigger posts + images out of the old Jekyll blog's git history
// and writes them into src/content + src/assets. Reads via `git show` because one old filename
// contains "?" which Windows cannot check out.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const OLD = process.argv[2];
if (!OLD) throw new Error('usage: node migrate-portswigger.mjs <path-to-old-blog-clone>');

const git = (...args) => execFileSync('git', ['-C', OLD, ...args], { encoding: 'buffer', maxBuffer: 1 << 28 });
const files = git('ls-tree', '-r', '--name-only', 'HEAD').toString('utf8').split('\n').filter(Boolean);

const postDir = 'src/content/web-app-security/portswigger';
const imgRoot = 'src/assets/images/portswigger';
mkdirSync(postDir, { recursive: true });

const posts = files.filter((f) => /^_posts\/.*PortSwigger/.test(f));
const report = { posts: 0, images: 0, missingImages: [], rawImgTags: [] };

for (const path of posts) {
  const m = /^_posts\/(\d{4}-\d{2}-\d{2})-(.+)\.md$/.exec(path);
  const [, date, rawSlug] = m;
  const slug = rawSlug.replace(/[?]/g, '').replace(/^PortSwigger-/, '').toLowerCase();
  const raw = git('show', `HEAD:${path}`).toString('utf8').replace(/\r\n/g, '\n');
  const lines = raw.split('\n');
  const first = lines.findIndex((l) => l.trim());
  const title = lines[first].replace(/^#+\s*/, '').replace(/\*\*/g, '').trim().replace(/^PortSwigger\s*[-–]\s*/, '');
  let body = lines.slice(first + 1).join('\n').replace(/^\n+/, '');

  body = body.replace(/\(\/docs\/assets\/images\/portswigger\/([^)]+)\)/g, (_, p) => {
    const rel = decodeURI(p);
    report.images++;
    if (!files.includes(`docs/assets/images/portswigger/${rel}`)) report.missingImages.push(`${slug}: ${rel}`);
    return `(../../../assets/images/portswigger/${p})`;
  });
  for (const t of body.match(/<img[^>]*>/g) ?? []) report.rawImgTags.push(`${slug}: ${t}`);

  const fm = `---\ntitle: ${JSON.stringify(title)}\ndate: ${date}\nsection: portswigger\n---\n\n`;
  writeFileSync(join(postDir, `${slug}.md`), fm + body);
  report.posts++;
}

// images
for (const f of files.filter((f) => f.startsWith('docs/assets/images/portswigger/'))) {
  const out = join(imgRoot, f.slice('docs/assets/images/portswigger/'.length));
  mkdirSync(dirname(out), { recursive: true });
  if (!existsSync(out)) writeFileSync(out, git('show', `HEAD:${f}`));
}

console.log(JSON.stringify(report, null, 2));
