'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5e2ef3617aa39b1e9b4810420f555884",
".git/config": "adc1e07939eb326b880fe603e238bc3d",
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
".git/index": "bee7a518918bc9a3ef7bb289961e40e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f03a647025a5a4c1af88b79cb6591a46",
".git/logs/refs/heads/main": "2105b66430550713e49d221232cc8394",
".git/logs/refs/remotes/origin/main": "c4f01957f17395eb43d7f5d9f88fd3a1",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/3493989c4e7452c4f8a14d99b2c38cd814e2a2": "486d8f5e7f93b07836d69ddf25b8f12c",
".git/objects/04/3d3bb888a2aac1dd44aa522ed9d701b7622746": "dbbb870bbfed7c2cf8da43b6cfb0aa76",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/09/64fe12978cea2464150081a2ee30867af18077": "5d9e1f3f3ec310f4686c6a2f70956706",
".git/objects/09/a42e6a4eae890b05b0ac37bf2e36e19eb689fb": "c2050c509a7b509b45dce3e66bc43c96",
".git/objects/0c/5a4764f185c8eb25472cdacaa0984ebf4bbd56": "d876db6e01e69d5108617d976a058011",
".git/objects/13/a446873b096d1924291a57f6132ff168b8be4a": "0a5723b8e921c9ecd5c41d2fe008a1d9",
".git/objects/15/c789b48f4e38d5a103c997b7fdc5e9b5866b58": "a8a1071e2b798896ae56f982fbc161ff",
".git/objects/1f/92f25387c45279d3cb0bd00dd3e33e7882571e": "7e20ed906a028740f7d45a532d50ac9f",
".git/objects/26/0ec1958277762536166cf9f41b7bff5dbdc49b": "f74927472f453965b01c9f7ab5128abf",
".git/objects/26/e27ab52fd236b490e46574a1b4d9f75c10b578": "456ef1cbc6282b90361d00628d737d7d",
".git/objects/27/962f94dcdc7e5149d32696a0c119c923165878": "d6c1beb9a132b03e0e976cbaec0f2e09",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/ca9619f2ff429ce1f6663f64e9b785333f1c8a": "ee96477700a17fd0d20ac865926ac9f8",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/38/56948779096a28d6f246d61d8db574ff49ef4e": "7e5be14aad16d9908deaffce97d0a621",
".git/objects/38/8ab03a03706e58b7d2a79f77064b7724c9e8f8": "2badd015f9700d878ba52145c3101dde",
".git/objects/39/048afec159ed13e17d034444973d045d127ab4": "5315e0b86cb715a2be7503b1e44e5f8a",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/e00703baff48839f9d5b2ef5f6dbc7a6193f4e": "f205bbb7ed7b9e8a6878997642e6c519",
".git/objects/40/5fa0c8895c82d642805007cc6f8185ace04913": "833b80fc2c0ff34193cd55daae372825",
".git/objects/42/9d394519f67161aa0e8cd70d601d09083e9071": "bbdcc55d168865b62953b9cfbff11a61",
".git/objects/43/f005cadf34962d29acbd4c0116dd393c3860a9": "5c271be4f6bb11cf7cb594f5f1fa8700",
".git/objects/44/566af4e742df94b1c02a0bb198ec86b244e2c4": "5bdc0f112b968aa6abbe7507a9ec9d9a",
".git/objects/44/a18bdd87d0fddbbee9e9868fcdbb9635e79f88": "269f97be303ee40a473618bf172e6a51",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/2410091976749c20cc967604ce3cadb5e51533": "17acb43db713dcb255d8213b29644264",
".git/objects/4c/0c3af4105d67a0c1a09599bae605fcc35a1d12": "4e98c63d3c9b362c819ce301e7d92189",
".git/objects/4c/f19e01cfc2f0e6a767939e2cda631065390434": "1cad395e8cbaf905ab8ea963184708e9",
".git/objects/52/30a2a78bc73583b1cb2c7048499dd3ccba1716": "3c9e9032ad2b3caab8e260fbf1b862fe",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/55/bbe2b589ab880d77d780e9a78a379829606731": "97c66e5fa5c611b2304a3639277f2568",
".git/objects/56/17161b99652146bc042952b1460824256b6a3b": "df54aa49493b589fe2319819b31d5a02",
".git/objects/58/d61ad0f8df37cf954bfe720b168bb2caf5bb44": "f917ea6f684e36137efdfbbf23296278",
".git/objects/59/7057700f548473756bd2d6ca4e9887a9bffe99": "1ccb0fb364727e2ca728c512e1e336cd",
".git/objects/61/be37b2ac3bbbf627b0e8d4a302d603052ffa5a": "6ec8b6349b754084a2bb3a8bb1e071b3",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6b/7a09a182b147c700d1f5727654967ea1ec8bb0": "a332401fe6092c0289baa55d6c961dd6",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/d54aef24c2ecc0b6e135c2e806a3edc24a4693": "3bb652167d9d9124361c1cc23ac2466e",
".git/objects/71/ff6be7d0b35f9a3179a4f72f041cae76078ef4": "1c962dcaa6a856a1d77de41f9fbb771f",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/b94544195cfa91ce3c9d4814f5cf4b2134fa7a": "2c7aa5794976ec340d002b090429f44e",
".git/objects/76/867bf39eaf9b0b27b2faef06f9d49c4dfc40c3": "d82515017e75b8f23a4443d735a7bc10",
".git/objects/77/5c21d2d4b4a938ac1142a00573145b73f67cc7": "335cec49ab8ac3f54853f56721e10124",
".git/objects/79/fe16cf130fd84c3f43b1b16b886e1c15df6bff": "e256eb5c61df37b707b8c027f5c0a027",
".git/objects/84/3804c5d5443a6f6ae768990cf466a54c5483df": "4831c5404531b60586e56c2f8ca8f249",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/599548848087331ab86adac659ae4aa1ef29f2": "ab3736107b706b3126675800073e181e",
".git/objects/90/6e920c18e981a34095a1d78dbf4a5873f310c9": "4251a1cb97c0399aa01063c0506a1ee2",
".git/objects/97/6e51106e80bdf1d83bd139daf2749be1fb41ed": "34ce4f066e3cd240ff487c717fdf4fcc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a0/51e2c2061819310b0094fff622bf781a1bf506": "035f4be9eabf65604d730dd1a0684a50",
".git/objects/a2/bb22486a374787b42e129365f853d05ea8685d": "a6194cee34d3e729cf60189c927f48ff",
".git/objects/a5/3527ecedbce1729c9ddebe062ec56ab4c16320": "114a0a50e1543d8f1f5080ea1fe0c8c1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b3/80d2d9a0e68667745a2d4e582cb61e47b9f6b8": "a098d4b19c126cc4774e7ddc02a8aed1",
".git/objects/b6/289767a2509504cba011cf1e1d8dca64445ad1": "d6f4ec282118e50098060f1a9bc20095",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/df537b92844c6d1ef80614f0894d9e4e1c423e": "1189091365942b608a32b7c022cbabcb",
".git/objects/bb/3ee232520b8d2229ddb5990f349cce60b7e372": "0efe0a2caae72417664ec5fb4e941360",
".git/objects/bc/f6a6284be27563ea5a04aa0d4cc440bfd3ac6d": "62b5a4bb60604a19449a4a4885e103ff",
".git/objects/bd/59a15769d1e8ee767587b89698b8912cbcc40b": "a12dd567dd23ad46ef3f5b5d5f34ec61",
".git/objects/bf/d85ddb64779a49b0e49776e6d8c161ee79e6dc": "db206bd33de7891d5b5e92157c7ebe0c",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/b46b89110b7e0788d4ace8846e9e39f500b097": "5ad23d7eb572e67397c3e0574e0ac549",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cb/c8025b7aba941404c69f56c844aad7969dc08d": "ed75b84ac1fe26f4638eae1d92c43811",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/d98ea03a7ba812507c12e3c4ca288ad52dbdb1": "c22455d5db04fbc11ace7cbc10605bb9",
".git/objects/ce/d5fdddab3da11e8ffc7c0241b03af70f5afca5": "54109fc514fcc329ac2aeac82fd4aafd",
".git/objects/cf/c266eb3ba96738ccd6c1979eabddad7f18b619": "db57fb2eac5fe6fc0397d748d0079b1a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/c51ecdcb02586cff8a89b7520033f6f6349b24": "aff0fa96826b7352cca26378798cb40b",
".git/objects/d6/62b2eabc9be379ece5cc61b7d62d0c16530c04": "32c4171c3fc4761190265a1e7ae3206a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/88398e3c68df29fe3452ad411586dca2242df1": "6041e44adc25bf2cff8176af363818b2",
".git/objects/d7/b4955de40a25cfc1047bd9c8f9040663292e63": "e22c9198104f01cb5c08fd6b7d80e3b2",
".git/objects/dc/1e4148712949b86e0e0f2091cf764efa03ec5d": "c7f1ff26395afc4fa48ffcef4455fc69",
".git/objects/dd/a33892ce71322708d879fd156456feec6079bb": "afc3212e1d953848c83cdf606f41a181",
".git/objects/df/0263b6f9e063b5f53226645c8cd503131cd379": "607e659111d7aa60f5360545581a1ba4",
".git/objects/e8/957fa258679cf72f7bf3bdcadb4e32aef96277": "26d7b1fbd109dff762aa597498f197b8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/415b4a1e06f914b5b6464aee59139340af7519": "0829e85c0c3890199f18b86a6c1dd8f6",
".git/objects/f3/9936fee06c413430438a6d14ea408bb6b700d5": "817488ecbd1ef2412b4bc16689c26ff7",
".git/objects/f5/16146c4780f3f1128f5e5e46ead18917fc65dd": "4dd41ac20da6151a8306f4c72c0c2425",
".git/objects/f6/4acce887efdd72f8d3d30796d7ed8e60ae218a": "65072acfba117673830dd0174ac316d3",
".git/objects/ff/b6ae136bc0736bcf4bfb025d80dfd8dfb72507": "eb682b20a4209176a84e7124d0ee4fbb",
".git/refs/heads/main": "f14b60086ecc29920a45f65d52a13436",
".git/refs/remotes/origin/main": "f14b60086ecc29920a45f65d52a13436",
"assets/AssetManifest.bin": "2ba3a02ccd6f3e106c1265745111036f",
"assets/AssetManifest.bin.json": "314bf41ca9f5ea7a59c5c083562754f1",
"assets/AssetManifest.json": "1408ee266eb8376344fecc2dc5447abc",
"assets/assets/carousel.jpeg": "f0dd0c04f73367adcd09077ecca1402f",
"assets/assets/logo/logo.jpg": "5a01fb99f1ab3117aa23d7412a6e893d",
"assets/assets/splash/meged1.png": "65b1ad013b5df2a5825415900bc7eaed",
"assets/assets/splash/merged2.png": "8c624430a6c8f6af988999f1eda14ff4",
"assets/assets/splash/merged3.png": "b144c9f2ed14486eb82ddff84688d8fe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ffae2df90cd247b998ba48e535d8d2b7",
"assets/NOTICES": "affc291c061f56e36d6758d6732f4b0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "19fc52b312676ea3066a1575e567326c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4658958acf6a11a4221f2b88f6e0bb17",
"icons/Icon-192.png": "e64bbd054c05a2120113183de337faff",
"icons/Icon-512.png": "92adda003d3be5d48fc0ca0c976e4af1",
"icons/Icon-maskable-192.png": "e64bbd054c05a2120113183de337faff",
"icons/Icon-maskable-512.png": "92adda003d3be5d48fc0ca0c976e4af1",
"index.html": "9dd13e97aad89b5d7bf7f6d27c4fe250",
"/": "9dd13e97aad89b5d7bf7f6d27c4fe250",
"main.dart.js": "7bdcbcbcb6d459147bb74b0c4e923010",
"manifest.json": "4ccc8c325be1a721493cf806fb02bacd",
"version.json": "deb81fff15768e0028ab10450780fd9f"};
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
