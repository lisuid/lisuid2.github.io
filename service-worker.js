if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),b={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>b[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"88223ab9c853a4c7c8b953e7a48eabbf"},{url:"about/index.html",revision:"7b0cccb393d4ec62fddf210f22b9580a"},{url:"archives/2023/11/index.html",revision:"65b14aba5c217c6f9b059e0d70ebe461"},{url:"archives/2023/index.html",revision:"65b14aba5c217c6f9b059e0d70ebe461"},{url:"archives/index.html",revision:"36f575898f3f888b1091fda4bd128609"},{url:"categories/chatgpt/AI/index.html",revision:"469f04e5d451b33aa073e8493873ddce"},{url:"categories/chatgpt/index.html",revision:"8dce4b8fd9e9954a2f7c564cd41143ed"},{url:"categories/index.html",revision:"38ac2b2cc53a7d82a97337e1ca96620e"},{url:"categories/教程/Butterfly/index.html",revision:"db7aa2e0c522ae9321e249483352cc7b"},{url:"categories/教程/index.html",revision:"f2aaf52d6958f9eb32f335df379447b5"},{url:"categories/知识/index.html",revision:"d739bb8360d640f8642f15238d722d4f"},{url:"css/commentBarrage.css",revision:"55130ea714a4bbc11b28beca53d3fd1c"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/home.css",revision:"87dbcda01edc377f675ad95542e7b5de"},{url:"css/icat.css",revision:"fc4312322ec61b2aa45f4ce5adeea5c4"},{url:"css/main.css",revision:"ffd35c6865acd76afda2d84824bcdd63"},{url:"css/search/algolia-search.css",revision:"305ead04fdbe691c04f0856b7f012ee7"},{url:"css/search/local-search.css",revision:"4913b56e34cce051f2f808c0d9ce05a9"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"7c24c6662b270d35b0930ce85e7935e2"},{url:"essay/index.html",revision:"84490ab3c1d449c96bff215a9475d4aa"},{url:"img/default.png",revision:"f1aec48a75046ee47e853009f7802847"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/pwa/16.png",revision:"cc7f2573a9a830990efeb0be5d421859"},{url:"img/pwa/180.png",revision:"38b5b18458230cbcbfc6a9203ef6f47d"},{url:"img/pwa/192.png",revision:"ad2a0e3a1062b69ff8211d465949a525"},{url:"img/pwa/32.png",revision:"d51a1d8a4b5aad5d5704e0f422210c0c"},{url:"img/pwa/512.png",revision:"b83d8cc648073ce73ea29a040bcd93a7"},{url:"img/pwa/logo.png",revision:"a597784a0927e1d569a74a0e57808ca8"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8c70ca3817a5ab25e813cc1b7f18f7eb"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"1362ffc301d4706388a30ba17300a44e"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"8e97ac6bb2740f44c8338c7da7f37da5"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"ca7fd175db361cda2e026040ba6f279d"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"8934a83117a9660dde927b2506d0ad13"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"daa649a0ad0e9b0829d5d4f1d407c808"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"84d2db7aea18393589f95550ef74a048"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"2d58a2168e0505c9d1b099cf93676ac0"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"c04e0e984c37f2a8d86a8ef1b64efbc3"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"66ad4dbcd2a1a824f9e41320e38823ed"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"810708b1919d66198d23d7f72cd2eefb"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"005de9c802dbc3317cd777929573fbfd"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"dc9ef8ab498fe95ca6fc85bb9e06aa74"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"88e9ee1523fa4bbfddb95ab4a33ddd92"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"06173c00a81550bba28bb866df396b4d"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"83a43d2fa5ea6444a1ff3492c171e169"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"c7544f2da0a263ab196be81a452a33cd"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"09f4c019368ea963ac17aededb2bfd27"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"c46a8db80da3cd238298c8f93d537422"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"c1660a84dd5c806dc3fedc9d1b7f31ad"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"23a07d5b877934dfd1ae657161badf55"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"2f3176649bafab723cc1127c5fde99ef"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"3135464e632bd77959bd903eff3e8b31"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"562de60a1dedeb55ca7cd236babaa1c6"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"0ee7e0e96b28d1d7b9190bdf159e029e"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"cd074bf0c729f6ae0e6749f0a0ee01e2"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"b73df74147cd47f28d0c76b23dd530a3"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"ddfb6f028ae495c1f82e9cef9d07a7b3"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"e3ef83833b7d52611cfd2bfaae3eca1b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"69d5272bf0a70eb2d6080dacaad36470"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"30c0dae495a567a2e93330b773ce2503"},{url:"js/commentBarrage.js",revision:"13d171fe8b490d50ea1f7612e7481835"},{url:"js/extend/console/comment.js",revision:"d35d127a2368cb2326030c9c2f93744c"},{url:"js/extend/covercolor/local.js",revision:"edb4f0434a17d51cca4bd97352036be9"},{url:"js/extend/covercolor/web.js",revision:"bfd9b7e0da6aa1c1c2227a93d5ddfa80"},{url:"js/extend/search/algolia-search.js",revision:"d7be4c936da4af87291a9e8afac30f01"},{url:"js/extend/search/local-search.js",revision:"71bc5eb7f4a35bd99e74e1237f49182b"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/main.js",revision:"6dfd3f7749b44bf5b7a245060cb7a5f6"},{url:"js/rightmenu.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"8ad683b86c923f3b3491fb9c350405cb"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"862f4aa7b0260954d59370083a15bd55"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"1f3b20553b03eae81abdb1b9247876e2"},{url:"posts/286470e0.html",revision:"60ad4fc1d4c9d974b696fd9b52489f1b"},{url:"posts/381da2ef.html",revision:"6eb4a6bc5d501dace8c53a6ac75cde4e"},{url:"posts/5abaf631.html",revision:"4d0a39e3b81f0b505b9c201b9a4491aa"},{url:"posts/78a7974c.html",revision:"da076c3b5a96aca72cedc337dccfc566"},{url:"posts/aa9c54d4.html",revision:"bf28e011975fd9914f99a4b421385d23"},{url:"posts/af19e490.html",revision:"4ff267ef9448cff6b052ac3aa8c5056e"},{url:"posts/e29ba27e.html",revision:"c777ed67924508013d2c559a1ef9ea72"},{url:"posts/efe4d5b4.html",revision:"f267ed3bd5e595ac953b640d53b4c48b"},{url:"tags/Apple/index.html",revision:"d58034d0375d621b20a2ab4a5a3ed9d9"},{url:"tags/Butterfly/index.html",revision:"3e92b27f6c41904edc6acccc973d386b"},{url:"tags/chatgpt/index.html",revision:"10c90ae242964c32b0c27b653e41070a"},{url:"tags/index.html",revision:"977a18cdd2f71067a27211cc982f8eab"},{url:"tags/教程/index.html",revision:"0d2e4383f6811b3c6ced9d6633ce3ca6"},{url:"tags/演讲/index.html",revision:"57a2eb5d7af515749aad1ae8cf8c63ca"},{url:"tags/知识/index.html",revision:"825100d87d5d1e5ee61634fc014ae8cc"},{url:"tags/苹果/index.html",revision:"d8b04b9228512a1ed42939f36cb3cc97"},{url:"tlink/index.html",revision:"94c391c92a44b9415969c94302502268"},{url:"/",revision:"index-20231108053837634"}],{})}));
//# sourceMappingURL=service-worker.js.map
