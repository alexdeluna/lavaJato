const CACHE_NAME = "lavajato-v1"

const urls = [

"/",
"/index.html",
"/visual.css",
"/app.js"

]

self.addEventListener("install", e=>{

e.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>cache.addAll(urls))

)

})

self.addEventListener("fetch", e=>{

e.respondWith(

caches.match(e.request)
.then(response=>response || fetch(e.request))

)

})
