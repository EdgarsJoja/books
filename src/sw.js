const CACHE = 'books';

const STATIC_FILES = [
    '/index.html',
    '/favicon.ico',
    '/inline.bundle.js',
    '/main.bundle.js',
    '/polyfills.bundle.js',
    '/styles.bundle.css',
    '/manifest.json',
    '/NotoSans-Regular.eot',
    '/NotoSans-Regular.svg',
    '/NotoSans-Regular.ttf',
    '/NotoSans-Regular.woff',
    '/NotoSans-Regular.woff2'
];

const EXCLUDE_CACHE = [

];

// INSTALL
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE).then(function (cache) {
            return cache.addAll(STATIC_FILES);
        })
    );

    // FETCH
    self.addEventListener('fetch', function (e) {
        console.log(e);
        e.respondWith(
            caches.match(e.request).then(function (response) {
                return response || fetch(e.request).then(function (response) {
                    return caches.open(CACHE).then(function (cache) {
                        cache.put(e.request, response.clone());
                        return response;
                    });
                });
            })
        );
    });
});
