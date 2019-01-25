importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08d68d18448f8a1fdfd1.js",
    "revision": "31bb1939fb9568bc28e1cad2acb1bff3"
  },
  {
    "url": "/_nuxt/1f8f3cd327e7cef6cfcd.css",
    "revision": "86de8653a429c78c4e233ecf471a02f6"
  },
  {
    "url": "/_nuxt/52b752df467ea4c2f893.js",
    "revision": "0c81da6019790bbf4e5eb512a5cd57f4"
  },
  {
    "url": "/_nuxt/58f9a4215f9802e458d1.css",
    "revision": "23379c62282e6a616db3a6e2b648ca9c"
  },
  {
    "url": "/_nuxt/7991133fa6ec3560a882.js",
    "revision": "e39d4bce86725f71d7e626d4b2559c4c"
  },
  {
    "url": "/_nuxt/9320798e3337651668b3.css",
    "revision": "acbdeb5d26ab98b9332e0b7294f7cf6c"
  },
  {
    "url": "/_nuxt/ad0568636aab522a7517.js",
    "revision": "53568fcedf82efb304d5d59da9c5747b"
  },
  {
    "url": "/_nuxt/d28b7b3c77173f0cbd77.js",
    "revision": "a6f609bf20bb536dd4b52ca79d30bd35"
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
