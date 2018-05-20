const CACHE_PREFIX = 'BOOKS';
const CACHE_VERSION = 'v6';
const CACHE = `${CACHE_PREFIX}-${CACHE_VERSION}`;

const STATIC_FILES = [
    'index.html',
    'favicon.ico',
    'inline.bundle.js',
    'main.bundle.js',
    'polyfills.bundle.js',
    'styles.bundle.css',
    'manifest.json',
    'NotoSans-Regular.eot',
    'NotoSans-Regular.svg',
    'NotoSans-Regular.ttf',
    'NotoSans-Regular.woff',
    'NotoSans-Regular.woff2',
    'assets/images/icons/nyt.png'
];

// INSTALL
self.addEventListener('install', e => {
    console.log('--- Install ---');

    self.skipWaiting();

    e.waitUntil(
        caches.open(CACHE).then(function (cache) {
            return cache.addAll(STATIC_FILES);
        })
    );
});

// ACTIVATE
self.addEventListener('activate', e => {
    console.log('--- Activate ---');

    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (key) {
                if (key.startsWith(CACHE_PREFIX) && key !== CACHE) {
                    return caches.delete(key);
                }
            }))
        })
    );
});

// FETCH
self.addEventListener('fetch', e => {
    console.log('--- Fetch ---');

    e.respondWith(
        caches.match(e.request).then(function (resp) {
            return resp || fetch(e.request).then(function (response) {
                return caches.open(CACHE).then(function (cache) {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
