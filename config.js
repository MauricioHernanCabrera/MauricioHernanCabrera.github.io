workbox.googleAnalytics.initialize()



workbox.routing.registerRoute(new RegExp('/^https://fonts.(?:googleapis|gstatic).com/(.*)/'), workbox.strategies.cacheFirst({ "cacheName": "cuando-rindo-font-vuetify", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 31536000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('https://use.fontawesome.com/.*'), workbox.strategies.cacheFirst({ "cacheName": "cuando-rindo-font-awesome", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 31536000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/portfolio/.*'), workbox.strategies.cacheFirst({ "cacheName": "portafolio", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 2592000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({ "cacheName": "nuxt", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 2592000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({ "cacheName": "todo", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 2592000 } }), 'GET')
