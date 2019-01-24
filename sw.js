importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d1ecf5c48eb78501c40.js",
    "revision": "9bcae2d95874c4abf445482f1d1ed110"
  },
  {
    "url": "/_nuxt/1f8f3cd327e7cef6cfcd.css",
    "revision": "86de8653a429c78c4e233ecf471a02f6"
  },
  {
    "url": "/_nuxt/2accd0d7d5e5a3497497.js",
    "revision": "c6180852401200ddd720300f5df0654d"
  },
  {
    "url": "/_nuxt/9e441ba4bcf0ba6828fc.css",
    "revision": "0e1c6d928e991f2750a456bcb85f6573"
  },
  {
    "url": "/_nuxt/a354076f21763d9e9524.js",
    "revision": "cdc3eeb64f36cb95d3cc28b79953d505"
  },
  {
    "url": "/_nuxt/aef7cdc288edde698ee3.js",
    "revision": "388bc85335cb69c94e74e22d200c92c9"
  },
  {
    "url": "/_nuxt/e0e0bd63ef27e6c63078.js",
    "revision": "0ff295cab468eb87b1a589fb0bc596c1"
  },
  {
    "url": "/_nuxt/f2ef1b37747dae10675b.css",
    "revision": "acbdeb5d26ab98b9332e0b7294f7cf6c"
  }
], {
  "cacheId": "mauriciohernancabrera",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.googleAnalytics.initialize()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
workbox.routing.registerRoute(new RegExp('/portfolio/.*'), workbox.strategies.cacheFirst({"cacheName":"portafolio","cacheExpiration":{"maxEntries":10000,"maxAgeSeconds":2592000}}), 'GET')
workbox.routing.registerRoute(new RegExp('/^https://fonts.(?:googleapis|gstatic).com/(.*)/'), workbox.strategies.cacheFirst({"cacheName":"cuando-rindo-font-vuetify","cacheExpiration":{"maxEntries":10000,"maxAgeSeconds":31536000}}), 'GET')
workbox.routing.registerRoute(new RegExp('https://use.fontawesome.com/.*'), workbox.strategies.cacheFirst({"cacheName":"cuando-rindo-font-awesome","cacheExpiration":{"maxEntries":10000,"maxAgeSeconds":31536000}}), 'GET')
workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

