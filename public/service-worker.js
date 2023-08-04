'use strict';

const CACHE_NAME = 'static-cache-v9';

const FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    'Boss.js',
    'Character.js',
    'Entity.js',
    'Game.js',
    'main.js',
    'Opponent.js',
    'Player.js',
    'Shot.js',
    'game.css',
    'install.js',
    'assets/bueno_muerto.png',
    'assets/bueno.png',
    'assets/game_over.png',
    'assets/jefe_muerto.png',
    'assets/jefe.png',
    'assets/malo_muerto.png',
    'assets/malo.png',
    'assets/shot1.png',
    'assets/shot2.png',
    'assets/you_win.png',
];

self.addEventListener("install", (e)=>{
    
    e.waitUntil(caches.open(CACHE_NAME).then((cache)=> cache.addAll(FILES_TO_CACHE)));
    self.skipWaiting();
});


self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches
            .match(e.request)
            .then((res) => res || fetch(e.request))
            .catch(console.log)
    );
});

/*self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            if (key === CACHE_NAME){
                return caches.delete(key);
            }
        })
    )
});
*/

self.addEventListener('activate', (evt) => { 
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key != CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    )
})
