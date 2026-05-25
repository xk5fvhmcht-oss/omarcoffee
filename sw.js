// Omar Coffee — Service Worker v1.6
const CACHE = 'omar-coffee-v1.6';

const ASSETS = [
  './',
  './index.html',
  './apple-touch-icon.png',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,300;1,9..144,500&family=DM+Mono:wght@300;400&family=Caveat:wght@400;600&display=swap',
];

// Install: cache all assets, then skip waiting immediately
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.allSettled(
        ASSETS.map(url =>
          fetch(url, { mode: 'no-cors' })
            .then(r => cache.put(url, r))
            .catch(() => {})
        )
      )
    ).then(() => self.skipWaiting()) // take over immediately, don't wait for old SW to finish
  );
});

// Activate: delete old caches, claim all clients (force reload to new version)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // take control of all open tabs immediately
  );
});

// Fetch: network-first for index.html (always get latest), cache-first for everything else
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  const isDoc = e.request.destination === 'document' || url.pathname.endsWith('index.html') || url.pathname.endsWith('/');

  if (isDoc) {
    // Network-first for HTML — always try to get the latest, fall back to cache offline
    e.respondWith(
      fetch(e.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match('./index.html'))
    );
  } else {
    // Cache-first for assets (fonts, icons) — they don't change between versions
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
  }
});
