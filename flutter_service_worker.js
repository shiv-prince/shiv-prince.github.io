'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cdb2553ab870b52347a74b799d0ddfb4",
".git/config": "fd35538a878026fde359cd898e3b1afa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "83f11fb106e94fc1d8df6c53a1aa5f81",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8b966884fb2c27f6fdbbd9d7b50f252",
".git/logs/refs/heads/main": "75671ccf0a8afe9f29f451e9d8db4838",
".git/logs/refs/remotes/origin/main": "b284eaacd379588fb437ee04371cb48e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/bad3d6539e86292f8465528c672611d30326f3": "5c51d7e594d181dcc4fdf8754d5f1d60",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/a59453e309f427771e914c60264ade5e8f1718": "dbf400a03d48d004bbbcec8f25fd4d41",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/000a05ba8fe68d2d109de5680098be9d38980b": "01abe0348d68f834f5802a3be5065520",
".git/objects/12/937f85ca17cb7c0dd7b85a43e032d94bf4e72a": "5bda1c10d8620de0abf1935812a28253",
".git/objects/19/027724e1807ae012d054fd0245a189682df667": "42b0d7eedc64e0a8bca5aaa19b983bd0",
".git/objects/1c/7055a6fd32f4c38228495434b47d02da448a0b": "d44ff115c718c99290bad64d6550d8a1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/2ecbdfec0d91dda2917716dae945968ca585b7": "f3d6f147c9265405d95b32375468df29",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/13cf8410a6d9a2f477a6aaf3a23ed5e50f3948": "6270f0611c12c49ee519ec12a53ad95c",
".git/objects/37/a12de590f63948f3b5c63072527fe788f33fd5": "0a7734201f8b6f0dfd742afdc758ee28",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/ef2e496092396c05590b420706f16041246444": "8230f53a073abe8ebe4d54f87868bf2e",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/ab7c092f5f1fc5e485ebe52925d0a5e823b582": "a76a227499596fa81329bd1ad21f0a5c",
".git/objects/4e/043e91168676578c2b53fd57e95a1f253815fb": "aaa678814efd44fda82946becdd4a4af",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/0df9666990c92d073258b44d21d9e84e48ca34": "458e9d9aa17ae723d59b7ca274ae1d05",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/f5c3fe89b90fb7f032a092408e266a4cd42f84": "b13c95a39ae1d209ab1ba6365234ffd7",
".git/objects/60/83f117d4441ce484997b9206fa772fd1e3292e": "f7322f664e9606fd702073460ad9794e",
".git/objects/60/f4ac386c066e0f1938fc22c4222c2ba66ac0ea": "e25a1c08ac135a44d56e95bb87fc037c",
".git/objects/66/eb3972a467d5b39bd043eea19683de3dc36798": "92b43c02c0f0464b2dc83ce8ca5fe81b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/74/45a104118230025dc33d81c0706151e9611654": "0c62fad2924c71e73a506398730c0599",
".git/objects/81/c63796f703398a6e997d6b18e1eeb4698e66d3": "d565222f4938cdfee14cecd46f63c6ad",
".git/objects/82/69ace4c86f0f18e316dffdc0241786459a15a4": "635ce27eaa8ee1073a5687bbddbb0117",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2a0bd9371398ef6366d8fca85b7c43c19daad0": "fd00bede3846d1b10caccd36a8e5ed72",
".git/objects/8d/bd36f49435c25304756995cc1e9a4863cf3213": "27064bc6bbdda67e3494c7b75026082e",
".git/objects/8f/0257b493ace8934744147674e3e748f78c01ed": "173b20cb94cbd1683a541358ea8df910",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/807547513a17081063cc83534ee427d1ab6764": "e39eaaa75f3bdc99bcecb482041e74a7",
".git/objects/9c/7e92963dcb6b9c6719114139a60d975ff24630": "1eb0af45768f2b603290d0a7cbfc0bf2",
".git/objects/9d/86f85bef5bf9833474bd4d89876b7c2bc33988": "106fa7ae39887ec7e082619b9084ced4",
".git/objects/9e/bac154b02ecb0a44b9014419baa47ac40b56e1": "0ad325efa1d1f46de95690b834b06705",
".git/objects/9f/0f119dd216d17be67718583dc7fcae42eff32a": "bdc429f5f5cd18fa48d6d17147ca6b5b",
".git/objects/a7/58120dd4a658c6d8c9351a748fb08a9346c5b0": "dd3db4aa8a914322f93d8fb4cc49eb01",
".git/objects/b2/3bfb526bfb7b894d4fd90ab212e6f5b2684b21": "8b56ecfc249867be831f02f8ca8293d6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c33ffa1b23ab1be6c2d5a3105d32c54fda4b14": "c483dc2112f2142611d3cf68b5778d19",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c8/0cf0874a818d7304642e08b0fb96c3088c9727": "fbf6b171def297029769a3a5d76c7e80",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/b0334f6e463665f6eaf1f462381c0da74a9a35": "10cefb2f9a0f59063c42ac5ce350084a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/1970ab584b95f556962ee5a3053b4fa60e040e": "a28d8722e4c6de06824aaa716ea99ff7",
".git/objects/f4/2b64cfa94808edd69effae82ff045bad5e7053": "9b12141f486a720979be4a2fb2b12496",
".git/refs/heads/main": "c9329e7a9a05c406402a64184ef16251",
".git/refs/remotes/origin/main": "c9329e7a9a05c406402a64184ef16251",
"assets/AssetManifest.bin": "c8c7500bd086e5980214fd526abb7d94",
"assets/AssetManifest.bin.json": "e1f4d953c7709f2139c42d9cdd65b3c6",
"assets/AssetManifest.json": "ca9af70c1a6eb6bf1c5f504beb963e66",
"assets/assets/atria-logo.png": "03c21896a262449657863006754c7e33",
"assets/assets/bg.png": "cb1d3df11021f2451b16727d4fbe5bf5",
"assets/assets/done.json": "bd03355216acb8fa9b8c2e8e5c18623b",
"assets/assets/Group.png": "4c72bbc42083e3c1b457b0cbbcf47aea",
"assets/assets/info.png": "4c60bb5ba16165bf65330467263c0768",
"assets/assets/lions-logo.png": "84501fd87914f60cae7d9252e57470ba",
"assets/assets/listening-music.json": "c135b28e73c20c9125d7310215d01868",
"assets/assets/look.png": "31f8abeb940986b007c395895ec8a3fa",
"assets/assets/norisk.png": "fa7c9489265c8731cce1286574236952",
"assets/assets/risk.png": "bdfd1f5ccfce82ab0e4dbcda4258538f",
"assets/assets/robot.json": "97cbd6a81353c22396e5f38631feec64",
"assets/assets/send.json": "377379c186496c30ba272b31de61e7ab",
"assets/assets/srcish-logo.jpeg": "245d24ea18789a434200ea4481e40a38",
"assets/assets/submit.json": "c43af4f73d0d8d32a310abf01a74a646",
"assets/assets/thankyou.json": "f81791729bdf3efbd5a3bf05557c831b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "97117c3d54641212392c01bae78fa398",
"assets/NOTICES": "281a826e6b78cd5f9c2557b5155c21dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c164c5df9d579679ccbb03486b73a27e",
"/": "c164c5df9d579679ccbb03486b73a27e",
"main.dart.js": "45474bf52dd223d64868d2d8fcda4cb2",
"manifest.json": "63f52671f7b32504b9461d73797c1f3b",
"version.json": "85f981eb43650cc95efb748341b13095"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
