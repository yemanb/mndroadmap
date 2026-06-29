const CACHE = 'mnd-plan-v1';

const PRECACHE = [
  '/',
  '/MND Le Plan App.dc.html',
  '/support.js',
  '/gantt-data.js',
  '/gantt-extras.js',
  '/ios-frame.jsx',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/assets/mono-copper.png',
  '/assets/mono-indigo.png',
  '/assets/mono-ivoire.png',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/styles.css',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/_ds_bundle.js',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/tokens/fonts.css',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/tokens/colors.css',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/tokens/typography.css',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/tokens/spacing.css',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/tokens/effects.css',
  '/_ds/mnd-design-system-a962dea2-1092-4ff3-9ac9-601271830889/tokens/base.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first for navigation, cache-first for assets
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('/MND Le Plan App.dc.html'))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return res;
      }))
    );
  }
});
