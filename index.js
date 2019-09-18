//register serviceWorker
if('serviceWorker' in navigator){
	navigator.serviceWorker
		.register('sw.bak.js', {
			scope: '.' 
		}).then(function(regist){
			console.log("Service worker registration sucecesful with scope: ", regist.scope); 
		}, function(err){
			console.log("Service worker failed to register", err);
});
}
//gawe nginstall 
let deferredPrompt;
const btnAdd = document.querySelector('.add-button');
btnAdd.style.display = 'none';
//funsgsi beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	deferredPrompt = e;
	btnAdd.style.display = 'block';
	btnAdd.addEventListener('click', (e) => {
		btnAdd.style.display = 'none';
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted'){
				console.log('user accepted A2HS');
				}	else {
					console.log('user dismiss A2HS');
				}
				deferredPrompt = null;
				});
			});
		});