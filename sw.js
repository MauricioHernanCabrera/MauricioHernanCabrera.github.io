importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16c223831ea241cae2f6.js",
    "revision": "2b488347aaa3003f06cd9e4d1a85a04d"
  },
  {
    "url": "/_nuxt/38484ba6e613bc20ab14.js",
    "revision": "578fb67036fd15fda7d66a3a2fa6685a"
  },
  {
    "url": "/_nuxt/42cacd8af88781a3f67b.js",
    "revision": "60c6299e98e57f90051304c55db3a303"
  },
  {
    "url": "/_nuxt/438a9d03c97f9bf9cb9c.js",
    "revision": "8e30085f2ecb1f7af40d1e8fabc2dd72"
  },
  {
    "url": "/_nuxt/73591b3f32469583415f.js",
    "revision": "c615f51800cd274534de42b7ea493434"
  },
  {
    "url": "/_nuxt/7cfc4e2b3b259b17b0de.js",
    "revision": "31921cb83ba05bf11c12011d6ee96692"
  },
  {
    "url": "/_nuxt/8aa44f203f1286d88162.js",
    "revision": "8d313596f2b9db8f064a4910a8050d74"
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
