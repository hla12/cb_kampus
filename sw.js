var CACHE_NAME = 'static-cache';
var urlsToCache = [
	'/',
	'index.html',
	'css/min.css',
	'pages/ub.html'
	,'pages/um.html'
	,'pages/kmhp.html'
	,'pages/unisma.html'
	,'index.js'
	,'img/cbub.jpg'
	,'img/um.jpg'
	,'img/unisma.jpg'
	,'img/mcb.jpg'
	,'img/cbkampus.jpg'
	,'img/cbi.jpg'
	,'img/polinema.jpg'];
self.addEventListener('install', function(event){
	event.waitUntil(
	caches.open(CACHE_NAME).then(function(cache){
		return cache.addAll(urlsToCache);
	})
	);
});/*
this.addEventListener('fetch', function(e){
	console.log('fetching:', e.request.url);
	e.respondWith(
		caches.match(e.request()).then(function(response){
			return response || fetch(e.request);
		})
	);
});*/