'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b5efe676202270243ab64652407972eb",
"version.json": "8ca7e98a0664a0f9309f2240432a756f",
"splash/img/light-2x.png": "786a41a021587127c75848a8e9a9e8df",
"splash/img/dark-4x.png": "9a7d22cda5fd370848ed9ddc5f92f9c0",
"splash/img/light-3x.png": "8a66b3d835c743b336f5cb313002ba3e",
"splash/img/dark-3x.png": "8a66b3d835c743b336f5cb313002ba3e",
"splash/img/light-4x.png": "9a7d22cda5fd370848ed9ddc5f92f9c0",
"splash/img/dark-2x.png": "786a41a021587127c75848a8e9a9e8df",
"splash/img/dark-1x.png": "55a2ac1028579f4d13f411f2fdbebd88",
"splash/img/light-1x.png": "55a2ac1028579f4d13f411f2fdbebd88",
"index.html": "dc9cc79354fd258ad51da821358dcebe",
"/": "dc9cc79354fd258ad51da821358dcebe",
"main.dart.js": "481e797d387a9cd0ba1161946b767590",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "6c180167d6bf6ff8dca2310a5b8ece58",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8ad938fd8953584a4781db1d55666058",
"main.dart.wasm": "724763841970f8df576c66fcd29fb43d",
".git/config": "9aa74e4c8c57bd2728f053e85b40ef57",
".git/objects/0d/74d451ec4f5b74bb6c7ae306fc8261fe4116d4": "6a7b2070bc059dae51afd4ece20ccd38",
".git/objects/95/004de6e14dbdd85265d87a12b582c39fdcb4dc": "d4354fc547c8a595766fb9a276f0643d",
".git/objects/92/77cd16d63ccae9da7c9961a8cb08acfea24dd3": "11d4b6006123563bd5d5ad84e6f24dcb",
".git/objects/3e/b4c88b0f9a453c328ffa83b9534c4eaf9cf51a": "32f9206ac8c5ac22a5f4023a9db969ef",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/9b/b691f82ebb0edd46d76c090c686987a3e1feed": "1a2197ab436c43d5a7317dc46e470fcd",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/63ef54a533340b83f8f4f9ad3a978c9fa1d177": "deac1658b898a615b5456a51f741f191",
".git/objects/51/2c35342cf6c45872cceaa88bd80835e515bc5e": "92eab277f78852890d59cc8f6d74d887",
".git/objects/3d/75b9b2cdc5dc70316c7b4217fe6d7474f6ad1c": "2e888c666b22a1aac488ff54e641472c",
".git/objects/58/1902fcc75656bf29540c42e0dbd17bb6c78621": "c75fd7d1efc7d1fb212562d2579fc627",
".git/objects/93/690722c1016c19afd3fbf6e82df8a5204a0677": "9c2ef6697db27d9170e2c076b5bc7967",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/033e30b011dc5248785b905210f9441ec4d8c5": "5058b1182ababab952ad476aaa940f35",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/052cba48d118603a54869ad9ebc80938449a1e": "20ed22795b46bc147c4e5585d641b7c1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d1/0e1844fc1cc2db7d422de062335e67c201dfbd": "5951ca4717ef63f536c8597a9c073801",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4043f2e906bf5511872e1c653be2789500b2cf": "9ebdeac5ea3e81147bfefb8884bf17a1",
".git/objects/f3/39ed1e7fb0278ad306082f9c0c1a84fe307f65": "0a45247328e8107bbfc61f3603b74417",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/f4d33208a8c2d558e7bb80ea2a55051f79205f": "fff0b8cee86f4c38f60a69476cb888f7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0339e48fbb3ac03eb87d368c6f21e6e0f75a8f": "2352638a6e0b50b3325466c73743bbc0",
".git/objects/f5/4e648fa1015463b045969246a1646b29dbb97b": "77d187eb2d727e863afb0f73e352a029",
".git/objects/f5/2dd34a9db1d2e3263b6f958a2b0a7889b8b5ef": "70380e3c5964de93aecf4277152b7bd6",
".git/objects/e4/8b54e12e810d133192aa17e35a4066e9ea92ff": "1d2fb41c22f2a34fe7f3b954f2f95f60",
".git/objects/c8/521737fe42b807856cd2b30f603c1e8604f3c7": "5e6be710711184394ee2498c4643d286",
".git/objects/87/02385113302875b7ea41789b4cca21055b1723": "2f1425a8f8e6208652fe560bc4113e70",
".git/objects/87/7cfd3b26dec776a7510ab426d6cd8370aeea8c": "714e95321882e2d61423b350deafb6a6",
".git/objects/28/7cc2d834d9044667c84e59766c5dc9e81fd01a": "a234540ad99273a02c7757f323bca65e",
".git/objects/7b/719931aed8e870c45a6adf8eb138c4927a871a": "6c2e4dbbbeacf522e4c71b1881d69c25",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/25117bbc807600ecaa88cd4826c0bc563fa592": "b242e9be07723ae08824653a1b1946cd",
".git/objects/21/ebff0df9669b5390d2f9e92e0c255d463085c2": "2d96ef48c4ac42bb7f09fa2907a4e0f6",
".git/objects/75/6d3820ce2f4f5c47b2cbb28e1cf46dad4da7bb": "8a1c5126cea6c83723677793617f1bb6",
".git/objects/44/702cbd2fb4e168e03d5251c7b0588ea32bb591": "d437b2600216074a050d29f632c008cd",
".git/objects/2a/e7d7833d63e0882b150acb46e796e0a4282899": "32d153268b088f71043f407db1a002c0",
".git/objects/43/cd74af31cd0f3e9c9a81ccbcd730085a801089": "285165bb21091199a033c5359fd275bd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/0d2b116fe6c9146516e53cfae298bed63aaff5": "e08426f2d8ba45390ce56264a06e4706",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/08/ad7187f9226f613a2bdef34673a98ed6c8e29e": "08d01f560dbed6772cdbc485ee64af37",
".git/objects/01/c5d0a2fc1caf35e81271a39e8821341328072f": "5e48bdae4a818d8b25506a17a9a692d7",
".git/objects/6c/60f201fd760697857e5a8fb990cca05837e1c2": "c86051b6c5a1fc5e1bab997ea302a3da",
".git/objects/39/8f43e466d7f30dcbe8b27a2bdd6fe525be2175": "773d8a03bc65b50bbfe7626d8a664fde",
".git/objects/52/93315e23988e8542832257a1d245c03121fdf0": "2bef1073c8ada1199f6c033e57181d0c",
".git/objects/97/d90ddc45e309caf59f51d15b8afc5cac8a6c88": "db681fd2dcd3ca166d2f1e484389de82",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/633a0749a4fc7852055ae34ea30304acd1d965": "c5cae028045200409ec2f2d90f05c287",
".git/objects/b1/0e1dbf724417c85986d42555709d044978f581": "3ca19a97d2516aeb877ce16719e423e1",
".git/objects/d2/ba65804cda1d30778258370aa1c89a0bb211e3": "9690e193da6c33006bdabfd09166561f",
".git/objects/aa/89b2db05cce71c2230b2255a5a7719eedeefd5": "61f1ca7688df93ffc49b6966ed8c0bf0",
".git/objects/af/40cf5406995a93fd4debb96833e1904c6ebd88": "8e791e213c52318ee7cf5e7ce18dfa8f",
".git/objects/af/db0470bb3b07e9c44f3cca20bb751cf4ec3d0e": "d1a280e27e34d424f8b31d0628149a8f",
".git/objects/b7/1a08b2f4c6cbb526ed033207f8c10d140a2909": "e241d46d85b9f60c59f1ef2ef3db0014",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "87b0c4cbc0d8b799df3a50cce3dd305e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/add27bfb15bd9aef162de50fea4e8e5352122f": "9462cf87017447398e149c817907bdaa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/f4032962e3a5a667a03e64eb0601f71b0beae5": "1f7ec42959324d1f118d9dddd7adda79",
".git/objects/cc/edc41be6fa3dfe5fb6f34ec3d0853335c2b7e7": "e99de87e368016a611fc6037e8467489",
".git/objects/e6/12b830629455e6c279a03b4427ac622fc9f89f": "40af6765f1e002334fb471c98fa9fde0",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/f9/6e636e1a78f880475166ae85d8a6fa5e3301ee": "d1af329871b1f15c995dd746ba31df00",
".git/objects/f7/cde65a18d0b7e8627d26cece45a830d28eee77": "190d7b371a25f22992a95b4ab8a319bb",
".git/objects/e8/6402e7c1103dec2dc2d1c31ee6fcb9601825b0": "036303591646c8034cebd5ddada4e3b9",
".git/objects/c5/1ae44914b7e2ac3022945b696ccbb8d409147d": "b120c8c4602a085bfce7b47d32da3cd6",
".git/objects/e7/3c4496b66a0cc3ac12d2b27bafa926d182af33": "f83e141fcdcf58e1a581a993d9cbfc28",
".git/objects/41/869324605accc4095cb3c6d1d40334345c1fb7": "17094ba2c601e7c38adbc71fe57931ee",
".git/objects/77/7847c5247ec4ea79eae91fa572cbe9759008da": "0db2ab70755b4b4fec23ac016b34b7d3",
".git/objects/70/0910350520e0ad65885d48b9fba092b72a5c1b": "8237dcf4882739de2cefeb785e564857",
".git/objects/23/74693daa03bb6a81fdb4abf48116ddcea62e56": "30d8b5a77e084e28e153843f4b7c1061",
".git/objects/4f/fd55c83a379a3cfcb806f2b4ff46ad3c4eb4c1": "ac7681b5b91a6c2b0440a39b417bf9e9",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1c/f5490023f7dc86634c0ced3d379f3ddb0d4323": "002774cbb9366676864c3fc96acfd701",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/78/5d830761c2e9af4d3b21fa5f8767640751f3f7": "aaaade30bf4705d055eebe4f8773ab50",
".git/objects/7f/5d94addafdb14b38f7ad746387f49ec2f6bef1": "8624c8b1e2cecdf5acb2fa49b62cb7d8",
".git/objects/7f/c35bb4d96412ed162ca1e4d0c1863e675c278d": "bdc8969872033df460e3d781f10a8f66",
".git/objects/7a/6fad5edb891b8e53355af47415d359c552319d": "020d653751522ea43c6459a35cb2f386",
".git/objects/14/27d4a5618226104638c638f3a81027d1bded0d": "989f11b5d882332ec6d91ed75f36e494",
".git/objects/8e/5473fc06bc003de97f7e17adb9c92c7553b5cc": "d75c1ff45d91c8164f51ce27359e5c49",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a7bea7364abfdcf42f9811f87fe88d0",
".git/logs/refs/heads/main": "1a7bea7364abfdcf42f9811f87fe88d0",
".git/logs/refs/remotes/origin/main": "3ddb70fb18e1dde0938371bf2f52d98d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "82c68f58e888717f1dcb66970125744f",
".git/refs/remotes/origin/main": "82c68f58e888717f1dcb66970125744f",
".git/index": "112f4d637c88b45a0fd864a30b8a22d3",
".git/COMMIT_EDITMSG": "49855b94c11f434b0a70c36788077f41",
"assets/AssetManifest.json": "209207d73f4932042278d9ce5bc75cba",
"assets/NOTICES": "d94dbcb93dbb925225fb0aa0c9a64c29",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "0d827bf63601dfe04e9b107303d288fb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "583ef3cd81481b0ef54e950e0fc87996",
"assets/fonts/MaterialIcons-Regular.otf": "d0e77efa11542360c92d774b3aac08fd",
"assets/assets/images/no_fuel.jpg": "8933a2961040e47230128dc64a8e49e3",
"assets/assets/images/splash_logo@3x.png": "98974d3ca8e07a107f6b5898ff28676a",
"assets/assets/images/splash_logo@2x.png": "0f87e807b78df548f6d93b34234aeed9",
"assets/assets/images/neutral_park.jpg": "bb2c9a96a7854cc167c948e5d4af7b76",
"assets/assets/images/battery_dead.jpg": "c729c8610b41df46bd9b4a6009a1d4e3",
"assets/assets/images/splash_logo.png": "951d222222baae705e88db6f3135dfec",
"assets/assets/suggestions/engine_wont_start.json": "b78dc62ce643d277ef5cb618480ecfd8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
