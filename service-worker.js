if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),l={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"eeceeeb6a5187c5b7a31e1f0ad82dbeb"},{url:"about/index.html",revision:"3785b5125f96f8e94fca75cb8f58c589"},{url:"archives/2023/11/index.html",revision:"1c0a5da964a37805ac2c37865f94c138"},{url:"archives/2023/index.html",revision:"1c0a5da964a37805ac2c37865f94c138"},{url:"archives/index.html",revision:"c56ea7f39aea1e7f063c131f724397e4"},{url:"categories/chatgpt/AI/index.html",revision:"46c1f67d2fdf4b6305040caf05f6f804"},{url:"categories/chatgpt/index.html",revision:"a16cbec31f8f49d590fc561543042f64"},{url:"categories/index.html",revision:"17287ad49943972ae323ee141832556f"},{url:"categories/教程/Butterfly/index.html",revision:"80efdbc75657c6a9952ad38e7e189772"},{url:"categories/教程/index.html",revision:"56eac7cf3fea79ef9757e34323220edc"},{url:"categories/知识/index.html",revision:"bc079a4362a1a8198852933143b5560c"},{url:"css/commentBarrage.css",revision:"55130ea714a4bbc11b28beca53d3fd1c"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/home.css",revision:"87dbcda01edc377f675ad95542e7b5de"},{url:"css/icat.css",revision:"fc4312322ec61b2aa45f4ce5adeea5c4"},{url:"css/main.css",revision:"ffd35c6865acd76afda2d84824bcdd63"},{url:"css/search/algolia-search.css",revision:"305ead04fdbe691c04f0856b7f012ee7"},{url:"css/search/local-search.css",revision:"4913b56e34cce051f2f808c0d9ce05a9"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"7c24c6662b270d35b0930ce85e7935e2"},{url:"essay/index.html",revision:"6dfc4c794d5caea8a04bb9ed2e6c8dcd"},{url:"img/default.png",revision:"f1aec48a75046ee47e853009f7802847"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/pwa/16.png",revision:"cc7f2573a9a830990efeb0be5d421859"},{url:"img/pwa/180.png",revision:"38b5b18458230cbcbfc6a9203ef6f47d"},{url:"img/pwa/192.png",revision:"ad2a0e3a1062b69ff8211d465949a525"},{url:"img/pwa/32.png",revision:"d51a1d8a4b5aad5d5704e0f422210c0c"},{url:"img/pwa/512.png",revision:"b83d8cc648073ce73ea29a040bcd93a7"},{url:"img/pwa/logo.png",revision:"a597784a0927e1d569a74a0e57808ca8"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8c70ca3817a5ab25e813cc1b7f18f7eb"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"1362ffc301d4706388a30ba17300a44e"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"8e97ac6bb2740f44c8338c7da7f37da5"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"ca7fd175db361cda2e026040ba6f279d"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"8934a83117a9660dde927b2506d0ad13"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"daa649a0ad0e9b0829d5d4f1d407c808"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"84d2db7aea18393589f95550ef74a048"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"2d58a2168e0505c9d1b099cf93676ac0"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"c04e0e984c37f2a8d86a8ef1b64efbc3"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"66ad4dbcd2a1a824f9e41320e38823ed"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"810708b1919d66198d23d7f72cd2eefb"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"005de9c802dbc3317cd777929573fbfd"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"dc9ef8ab498fe95ca6fc85bb9e06aa74"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"88e9ee1523fa4bbfddb95ab4a33ddd92"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"06173c00a81550bba28bb866df396b4d"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"83a43d2fa5ea6444a1ff3492c171e169"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"c7544f2da0a263ab196be81a452a33cd"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"09f4c019368ea963ac17aededb2bfd27"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"c46a8db80da3cd238298c8f93d537422"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"c1660a84dd5c806dc3fedc9d1b7f31ad"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"23a07d5b877934dfd1ae657161badf55"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"2f3176649bafab723cc1127c5fde99ef"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"3135464e632bd77959bd903eff3e8b31"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"562de60a1dedeb55ca7cd236babaa1c6"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"0ee7e0e96b28d1d7b9190bdf159e029e"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"cd074bf0c729f6ae0e6749f0a0ee01e2"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"b73df74147cd47f28d0c76b23dd530a3"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"ddfb6f028ae495c1f82e9cef9d07a7b3"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"e3ef83833b7d52611cfd2bfaae3eca1b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"69d5272bf0a70eb2d6080dacaad36470"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"c6e39e1c495b8f347cb22268ec1e9b0a"},{url:"js/commentBarrage.js",revision:"13d171fe8b490d50ea1f7612e7481835"},{url:"js/extend/console/comment.js",revision:"d35d127a2368cb2326030c9c2f93744c"},{url:"js/extend/covercolor/local.js",revision:"edb4f0434a17d51cca4bd97352036be9"},{url:"js/extend/covercolor/web.js",revision:"bfd9b7e0da6aa1c1c2227a93d5ddfa80"},{url:"js/extend/search/algolia-search.js",revision:"d7be4c936da4af87291a9e8afac30f01"},{url:"js/extend/search/local-search.js",revision:"71bc5eb7f4a35bd99e74e1237f49182b"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/main.js",revision:"6dfd3f7749b44bf5b7a245060cb7a5f6"},{url:"js/rightmenu.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"8ad683b86c923f3b3491fb9c350405cb"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"862f4aa7b0260954d59370083a15bd55"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"418ad6da85a947ed3a9beb4c111905fa"},{url:"posts/286470e0.html",revision:"343816cfa49faf51954cbd459f09f785"},{url:"posts/381da2ef.html",revision:"df567d4c82721e79967f64a3355a6ac1"},{url:"posts/5abaf631.html",revision:"feea62680e7cf04eaa68d48ecb52b465"},{url:"posts/78a7974c.html",revision:"10b24e8edd58fab9cc8f0dc527407b26"},{url:"posts/aa9c54d4.html",revision:"f067210c2736adad41659ec5c0a47362"},{url:"posts/af19e490.html",revision:"d870b8b20dc7c0c0c6e3ea4423220b64"},{url:"posts/e29ba27e.html",revision:"2334834938a483b13205d8bac34b0366"},{url:"tags/Apple/index.html",revision:"0102dcb96e8f23b40e868f6d40015544"},{url:"tags/Butterfly/index.html",revision:"f11b2340fc2e878b1b57be8efc57107b"},{url:"tags/chatgpt/index.html",revision:"9c46d9a93b1a52cd199c67c4e4e466fe"},{url:"tags/index.html",revision:"4d720428c1dcac2e0922dc474833f053"},{url:"tags/教程/index.html",revision:"51b506be79c2782cc91f38f210132894"},{url:"tags/演讲/index.html",revision:"520f2ba83f4e583d8fc6bb7e8493d1a4"},{url:"tags/知识/index.html",revision:"e601a9d1aa16659d40958cefe6cdd02a"},{url:"tags/苹果/index.html",revision:"85a4a6a274c83cafa49200e4d00e46d7"},{url:"tlink/index.html",revision:"823cbe92e273a1d12928df32f87aaba9"},{url:"/",revision:"index-20231107141329965"}],{})}));
//# sourceMappingURL=service-worker.js.map
