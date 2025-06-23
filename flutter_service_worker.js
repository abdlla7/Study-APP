'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5ff9737f3edf265c0006522b47280ec2",
"assets/AssetManifest.bin.json": "9774031094866baacb2c26838465fb5c",
"assets/AssetManifest.json": "deca0e2dfd509d09e4d08f0bb9298fdd",
"assets/assets/audio/correct.mp3": "46f7a472b621ccef5488c250b41e6f83",
"assets/assets/audio/laser.mp3": "d9a4d1d0274963a46b482250c8cee1c7",
"assets/assets/audio/wrong.mp3": "b33fc6a84e453a9e8cc7091633ae00be",
"assets/assets/images/arabic.png": "4e228a724df1552aec226d8841410bd9",
"assets/assets/images/background.png": "73d323960f7870b27f1d0d87db02a31f",
"assets/assets/images/bullet.png": "55b7f78499fd734d653fc9f486147d1b",
"assets/assets/images/bullet_1.png": "3a4a1463fb5f9f621ea0cf1667d2adeb",
"assets/assets/images/bullet_2.png": "c07616e90ce922873fd53e5942ce82ac",
"assets/assets/images/bullet_icon.png": "f34c7e7580eb0d01251e848965afd63e",
"assets/assets/images/enemy_1.png": "dc794f625454c7d442dbb4d2cfdcb5b9",
"assets/assets/images/enemy_2.png": "9c9514dd4a9d7d5ba76718e23c0a9ac8",
"assets/assets/images/enemy_3.png": "0d0503db45429682d83ef345a8cc883a",
"assets/assets/images/enemy_shoot_1.png": "4bc757efc283ef8fc63ca89cb5edb8ee",
"assets/assets/images/enemy_shoot_2.png": "9c9514dd4a9d7d5ba76718e23c0a9ac8",
"assets/assets/images/enemy_shoot_3.png": "ae689220ebb917247cca386620f6a2c6",
"assets/assets/images/enemy_white.png": "9b926bf7477d7fa40be86e08948c5221",
"assets/assets/images/gun.png": "e6cb8a27473ccb1c325cd96927355f23",
"assets/assets/images/history.png": "0b3adbe2b65119f6c2a83afb03d3dc54",
"assets/assets/images/HomeHead.png": "b4a4731dc5a68494af84b5d8ac12c322",
"assets/assets/images/lose.png": "9f015ac82c0feaca0c22a41efb9adc23",
"assets/assets/images/player.png": "b80e60e328c3b3c242b760d04256a7d5",
"assets/assets/images/science.png": "93209596250d972a316d3551920ebcfc",
"assets/assets/images/slime-attack-0.png": "56c436ce63abaa93e02c3c19545f35e8",
"assets/assets/images/slime-attack-1.png": "82da42ed94b405dc26855aa52e2013e4",
"assets/assets/images/slime-attack-2.png": "9fe9f672f9b544321acce1e25bfa9961",
"assets/assets/images/slime-move-0.png": "73840f6292aa5748fa7e5471ecf34b91",
"assets/assets/images/slime-move-1.png": "9369ef0b83fa19f399a98273c9694913",
"assets/assets/images/slime-move-2.png": "5f748e093cf9e6115e40e4fbcebd541d",
"assets/assets/images/win.png": "c5e0189e27a7531afb1fb098bd55f397",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a76f0a807c0d0209a38e9393e5e21c0d",
"assets/NOTICES": "78aa7d32b7406fe2047588d3d1bd3925",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "786ac2515aaca38f8bc3eda60ebf4b76",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf6a1d51d0b6e220f64c70db58e13033",
"/": "bf6a1d51d0b6e220f64c70db58e13033",
"main.dart.js": "62cb08d479406f8e30897364dd22532e",
"manifest.json": "43ca141d626b77dafb1603e5bad9ac47",
"version.json": "e6d415c1f78615d8c11d0a8d044bed8d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
