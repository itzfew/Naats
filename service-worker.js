const cacheName = 'naats-website-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/logo.png', // Add paths to all assets you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
