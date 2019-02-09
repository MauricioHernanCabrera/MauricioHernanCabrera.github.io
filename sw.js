importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05feab7f2c76a8008488.js",
    "revision": "5c987a97ab0812e63aa7fdbdd2d080fd"
  },
  {
    "url": "/_nuxt/14f28851d2de90d97f73.js",
    "revision": "1e401fd0ad4d8c68e07b7633da249d0e"
  },
  {
    "url": "/_nuxt/18bbb8fc3e59e25fcb69.js",
    "revision": "905b05b94fd8784711aa1c35c84d9e34"
  },
  {
    "url": "/_nuxt/234d254bfeec39b7afb1.css",
    "revision": "a1b31b65c5f958b275d0cf75c74fdba0"
  },
  {
    "url": "/_nuxt/6856f7b06ffbb66fc34f.js",
    "revision": "8597668ef850dc7dd10263e98924c8f8"
  },
  {
    "url": "/_nuxt/88bd442e9d15cf648f3e.css",
    "revision": "f8828cec8c6571e8b6bfb6849350e902"
  },
  {
    "url": "/_nuxt/8e2f55db9566696ed0ef.css",
    "revision": "f4f25e64eb1bfb43aea503fe930f85fb"
  },
  {
    "url": "/_nuxt/b5ce488ba7be9be96262.js",
    "revision": "c4ed85b38f54fb67b8fcb309ef8336e4"
  }
], {
  "cacheId": "mauriciohernancabrera",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.googleAnalytics.initialize()

workbox.routing.registerRoute(new RegExp('/^https://fonts.(?:googleapis|gstatic).com/(.*)/'), workbox.strategies.cacheFirst({ "cacheName": "cuando-rindo-font-vuetify", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 31536000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('https://use.fontawesome.com/.*'), workbox.strategies.cacheFirst({ "cacheName": "cuando-rindo-font-awesome", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 31536000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/portfolio/.*'), workbox.strategies.cacheFirst({ "cacheName": "portafolio", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 2592000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({ "cacheName": "nuxt", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 2592000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({ "cacheName": "todo", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 2592000 } }), 'GET')
