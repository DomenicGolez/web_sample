'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f41191bb585c1ce8dcdea2d25fbaea8a",
".git/config": "6f5f73d7f95021fb3f3453b7b70c58de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc49ec8b56e62cd49625c2099430904f",
".git/logs/refs/heads/gh-pages": "bdebbcea0225af67cf8549a007127a6e",
".git/logs/refs/remotes/origin/gh-pages": "91d1e9f2e72e905f5859fd2dacbe840c",
".git/objects/04/5345f0f17e68454d72ab5c61179842c489b105": "0ce7e5247767670395320bca92d0de5f",
".git/objects/04/e47eb68f74f6bd0279582b2af91b725a50fa9b": "f1dc07259f05756104600794878c0725",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/73b6fecb512305c414fc190791f7358d2f5c5f": "cd835732f73aa56e53f8fa906b21d692",
".git/objects/09/af3afa36a02ce28a783c2a593df299e732cf68": "9ba66293ca90dbfb0c01a505dba5fea0",
".git/objects/0a/2801ed35f85cb4ba77e580d42281a81930f345": "58bda0dfe0c23b16eb105e545a084fb2",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/be0bf8644fb21c26c530689f18cfad0864da61": "ec39b07f4a2cd059fe6898316fffaadf",
".git/objects/1c/edf4d0d815b47de74e9a6710d66059f459f792": "b40c5d833c98eb4a3424036bd805cbf7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/2d4893360e1140eaa2b0e37ebbc9f156064d6c": "11dd46fae279a80dd862024ac0c7af67",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/caf7801c2085962f6ab5988b88c3c624f064f1": "c1b284b29ddb103454bdb36868ec5eae",
".git/objects/30/c62c7d51570ad3895d93768941bbd87e47cd66": "220c36eb5f2a04fbe3f953f6f1303b91",
".git/objects/35/42fa8d092e7a34d13570fe91c721308eed038f": "9189328b93a7eaef8ff0474e26e0dc06",
".git/objects/42/edf5b6fc155b3214c7d8093ea85363300eb0b9": "cd9e3b016e3c9d439f7d6472697678a0",
".git/objects/43/c93eeca85a719996d42757af23920eb8b7556f": "a469bd2ebecba2407814d95bc5136386",
".git/objects/48/10f07af732c31b87dd8f2fe7941d47f8811005": "eb13fe1b21fbfd7e42e34a33e487eae8",
".git/objects/4a/2460eae4cf80f0a1e459d2e376396d2e83204e": "9f23646dafe9ca07e3bcb548ef3df100",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/d52858e5337b6af425b48bc4f95d2d6e7fae53": "6e02049426f4cc50e5255c16cdf2c538",
".git/objects/4d/9c624d376b28321ad849aafe672892deb5ad79": "3afb72d119c5213ce7914d394d8ee6d1",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/3fab48253143c6219a20dc30d6bf1517c63cda": "62308e67d598991b1bfd7d630c8ffb3b",
".git/objects/61/1447d6ff7b1281164a0dcae5f296693fb30359": "c9f86601f9994815a6ea503a30eeb03d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/8682a43daf390249bead7e789f489c4422b940": "70fda1d2ce2669bd3c0093869a1e21ed",
".git/objects/7c/5ab3e5d546c1aca94a9370bd031b060b3bc4eb": "a1dc9e40d427fe104dd9ecfc0998acca",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9518b02fd1cdfd145e6263983d7239a059d166": "c7097bbbf7b9306e901caa8357f71ade",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/00c50d7576bda2fa5ce92993259d7b4f5dff05": "6311f0ba78ccc1c17271e2d4019946fe",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a2/08627972dbe045b93ecbeca416e2db4d6ab8ed": "d31e0ccc133da1bd75f51dce3c7aec2a",
".git/objects/a6/9ca2ec091ba933e8123125770251304eef66b7": "34d7ab0b67ffcb8f91291780f08b2164",
".git/objects/a8/8565c7d9b9f66d057062b8cb0392d8600dbc70": "f69edc78627a5f2a11145a53aaaabb53",
".git/objects/ab/60eb1bbc42bbf6c7a03c023ab6526c0d46a3d2": "e128e50a533f9f2df7a1e5a6297442fe",
".git/objects/af/0915663b721f3a14fc5d6d3d18b976b6d5074d": "a567e6d88066978b4556ce2ce5dba7e7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/32b6650a2f055a83763e71d7b258045a985549": "7b84765381fa85c08c523c9597a90250",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/5b4e9f105f1796c229a755a04e0df430cf26a7": "ecf5c15b460416b92015841b62bcc9f9",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/275dcaa6adcdb4b741a4b5ab1357367ba016d5": "f6b2173941ca79146b70ff26018c93e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/bca87c2860f279b345165d99d3e316d098891e": "4aad96202935c2b6c4fea6a3557a7fa4",
".git/objects/df/e1f73696834f35fe4aa7ac8095e1ace0e580e6": "1eb549492165d478b3233ab1e49fa319",
".git/objects/e2/afd8f626ca9b5622830ad347380210ee2e0e35": "3f5a8d3a0fc393142b20acee4e29c650",
".git/objects/e5/ad8bf64c8464e567f0cead678e45016aa079eb": "fbd6ddb2d0c469856caa93cc65237003",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/44be5bd953827880507ff2f612c8a758d9a980": "09e14fd8d3b8b8865016e6fd4588e8b0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/1f814fed63981b8c142b692523245f6578ba9c": "0aadefe28280b282e0bbb9927d36deb5",
".git/objects/f9/068a91632def02df2499629f74b4bfa38c4dc2": "d48bece352ffa4b3313a1823d48ad7c1",
".git/refs/heads/gh-pages": "40b4ac0049fdc788dd11e6382b2d2d0f",
".git/refs/remotes/origin/gh-pages": "40b4ac0049fdc788dd11e6382b2d2d0f",
"assets/AssetManifest.bin": "b3877ce741d760e530bea2740dab0452",
"assets/AssetManifest.bin.json": "c2f01cf998702ff0e7874df07fdff2fa",
"assets/AssetManifest.json": "45c61453a056a3647956d17c34918d61",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d9b89054f47852048bbbed6db21de09a",
"assets/images/background.png": "e7c53ce84b7afae3315d031f438857ad",
"assets/images/beer.png": "acd6fed938b9d11aa2dffac5f1aa0d1f",
"assets/images/bottle.png": "7caf6190a8e5df13b5550ede69f87406",
"assets/images/calls.png": "15618ed5970555f79ef40674cdada212",
"assets/images/cocacola.png": "f83dbd5750ac47c56ca0f7fe6c09ca8c",
"assets/images/email.png": "92a4b842f300ea088fe4096cdb063e83",
"assets/images/image1.png": "cff0e25913c8828595536d816a5b453b",
"assets/images/image2.png": "115f97adf843051627a215056bfe499f",
"assets/images/image2_error.png": "ad8ef7e5df74f48a8699639c1def08c8",
"assets/images/image3.png": "c234c14b06535d63f0bd6bca3ebff7f7",
"assets/images/image4.png": "1358ec5fcc20b2e46740d0b629a54d52",
"assets/images/image5.png": "dd95c88d80a8af98c220592a61e319ba",
"assets/images/image5_error.png": "8712b534b8f44fc3bc9b46806c54f80e",
"assets/images/nikelogo.png": "510043fb0b80b32b036cf45273d9c36b",
"assets/images/shoe.png": "588fcc3ab13a6ab19a119f9213875145",
"assets/images/spreadsheet.png": "23aaf7b54bcd5385705d2ddc1a353ca0",
"assets/images/sprite.png": "1ed241ba3810171527e9b18af316150f",
"assets/NOTICES": "6a4741e5d436851ddb0ba678d43927fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "20fb1e7eb82ef9ab308eea3d2cac8dea",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac0499faf36e728c429638f0cd44b784",
"/": "ac0499faf36e728c429638f0cd44b784",
"main.dart.js": "96837c586416701b79e254c9774b6756",
"manifest.json": "99d835d2a97eb215c59efb09192bc542",
"version.json": "cb84d38cc1b7b6bdb09af7e0bbd4a097"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
