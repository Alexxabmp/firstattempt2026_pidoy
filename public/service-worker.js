const CACHE_NAME = 'addu-pwa-cache-v1';

// Core assets to cache for offline availability
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// 1. INSTALL EVENT: Cache core resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching App Shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Force active immediately
});

// 2. ACTIVATE EVENT: Clear out old, outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of all pages immediately 
});

// 3. FETCH EVENT: Stale-While-Revalidate + Dynamic Caching
self.addEventListener('fetch', (event) => {
  // Only cache GET requests and ignore non-http schemes (like chrome-extension://)
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Always fetch to check for a newer version
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // If it's a valid ok response, clone it & put it in the cache dynamically
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch((err) => {
        console.error('[Service Worker] Network request failed:', event.request.url, err);
      });

      // Return the cached response immediately if we have it, 
      // preventing the blank page when offline!
      // If we don't have it, wait for the network fetch to finish.
      return cachedResponse || fetchPromise;
    })
  );
});
