// Side Shieldlock PWA shell. Supabase requests, auth and workout data are NEVER cached.
const CACHE = 'side-shieldlock-shell-guest-v2';
const SHELL = ['./icon-192.png','./icon-512.png','./apple-touch-icon.png','./manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  // HTML, config and Supabase authentication always use the network.
  if (request.mode === 'navigate' || /(?:index\.html|config\.js|sw\.js)$/.test(new URL(request.url).pathname)) return;
  if (SHELL.some(path => new URL(path,self.registration.scope).href === request.url)) {
    event.respondWith(caches.match(request).then(hit => hit || fetch(request)));
  }
});
