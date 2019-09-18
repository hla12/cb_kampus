self.addEventListener('install', function(e){
	e.waitUntil(
	caches.open('gambar').then(function(cache){
		return cache.addAll([
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
			,'img/polinema.jpg'
		]);	
	})
	);
});
self.addEventListener('fetch', function(e){
	console.log('fetch:', e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});