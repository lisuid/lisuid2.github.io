if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const b=e=>a(e,s),n={module:{uri:s},exports:r,require:b};i[s]=Promise.all(c.map((e=>n[e]||b(e)))).then((e=>(d(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1b1ccd5c07fa2e4a0a3bff2cc2cc3045"},{url:"about/index.html",revision:"140dab5f138c7b6bdaaab4c39d23c4b6"},{url:"archives/2023/11/index.html",revision:"752d91e0f97b4fb7b7fd2add4bb1b34b"},{url:"archives/2023/index.html",revision:"ab6db1bf749ea59c8297deb279c68df8"},{url:"archives/2024/01/index.html",revision:"861ef4c95ca494210a8c61894dded5d1"},{url:"archives/2024/index.html",revision:"d39ca40462436ee10658fbc66495cc00"},{url:"archives/index.html",revision:"78d00dc5bc4460a4308a3bd56ea9c5ba"},{url:"categories/AI/index.html",revision:"90f290893dbbc36d459666f37b5803c3"},{url:"categories/Butterfly/index.html",revision:"c8375203524d7e45babc2f0af9ef2cab"},{url:"categories/CDN/index.html",revision:"d6787d96bee65fa53e8417a5d7c44b47"},{url:"categories/chatgpt/index.html",revision:"471edfac6e0cf3e7006bfc3182e641fa"},{url:"categories/index.html",revision:"6ac9bf77190e70e7a210181065bc00d2"},{url:"categories/教程/index.html",revision:"b80eaed7ed23f4a82fa3f5499bab65d7"},{url:"categories/知识/index.html",revision:"8abf38dbb68dccab17caa5f180848d3d"},{url:"css/custom.css",revision:"83a635b70319f30f6f5900c989713bf9"},{url:"css/icat.css",revision:"27c627293934bb331ed04b6ff33130b3"},{url:"css/index.css",revision:"392083320bb0bf619286bd5acdcc1946"},{url:"css/universe.css",revision:"0fb6d3a0ae65975ab712cba344e8bae9"},{url:"echart/index.html",revision:"eccc4afa285b6de0044c58d84ba5e801"},{url:"essay/index.html",revision:"b7010ccc4982634fad83667c748e2a85"},{url:"img/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"index.html",revision:"2cf5b9f6395073c4705f4c5eb03a6164"},{url:"js/extend/comment/twikoo/commentBarrage.js",revision:"f0e15e8b29d8d353d8ff9332d23eacf7"},{url:"js/extend/comment/twikoo/twikoo.js",revision:"be09d1743a3036a47aa8deab82cd3c0c"},{url:"js/extend/comment/waline/commentBarrage.js",revision:"b6e5397e6b4c672a29fb3294f30c89d0"},{url:"js/extend/comment/waline/waline.js",revision:"b0381444bfd3afbc72800f3cec1f0ab6"},{url:"js/extend/search/algolia-search.js",revision:"c80f2e12c576513561182c4a3070a9cc"},{url:"js/extend/search/local-search.js",revision:"ebb7eff31807e4b12eb7063943d678a8"},{url:"js/fps.js",revision:"e991005a97d257dad304a92102c69466"},{url:"js/main.js",revision:"0a1e44c391c2888abdb8f7d86bc68b6e"},{url:"js/music.js",revision:"5c726936b2cb595455653e2a9220cd2d"},{url:"js/universe.js",revision:"c8c96de7a14bba0d6bce5844c6b059ad"},{url:"js/utils.js",revision:"5acf73dd2d1a33b26186cabd8ca3683a"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/cover-color.min.js",revision:"87d5d2b93b3110ac6261d07b10104039"},{url:"lib/friends_post.js",revision:"ef3075618f1f96764eaa048bac79a118"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/rightside.min.js",revision:"40f8e9e8c2b497a1a9da28c23a5e0e9a"},{url:"lib/sco-ai.min.js",revision:"055dc138baab10d1feb82c9ae1f0c164"},{url:"lib/snackbar.min.css",revision:"891dfff3276bf6fb860fdcc51299d549"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/txmap.min.js",revision:"23c4b7351175fd69bf7004a5ff38d49a"},{url:"lib/universe.min.js",revision:"56c7a6788d4800804fbdadcc1dfa5941"},{url:"lib/view-image.min.js",revision:"201b35d09697a88fd21a4fc84765e9f3"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"f20760f08b4a6dc55d0a2f87cab42a85"},{url:"music/index.html",revision:"135e4b1e00df598bae51415eb5f774ae"},{url:"posts/286470e0.html",revision:"2562558b59a961d4dd6c952a7d486f07"},{url:"posts/381da2ef.html",revision:"6fc71943fa3a5c878b45bcdfbb6fdab5"},{url:"posts/55a65cc5.html",revision:"9bf852f4ba12cf7d9e940ff66c782ce9"},{url:"posts/5abaf631.html",revision:"8064485d3bc207cbf8f3e85adb945072"},{url:"posts/78a7974c.html",revision:"4d874ea1789665850ff90486712f5da1"},{url:"posts/aa9c54d4.html",revision:"e5da751dd8b823811b117e11e9b88c8e"},{url:"posts/af19e490.html",revision:"2d93e38aa87c2634dd11b701be93c71a"},{url:"posts/e29ba27e.html",revision:"e68e88c68d2bd23b181366f7e70156cd"},{url:"posts/efe4d5b4.html",revision:"2b91686b82ee5c4e5f64ce79078bbfc6"},{url:"sw-dom.js",revision:"78450ac2c27e8a39fa168ca8da3c2c3d"},{url:"sw.js",revision:"08ceaf8d4e83c20bd0eafc3eff901fa0"},{url:"tags/Apple/index.html",revision:"0141cc3e2620dd76b1ceb4b0ecc5d411"},{url:"tags/Butterfly/index.html",revision:"f6f4f6e12f5012192df88462eeaea6aa"},{url:"tags/CDN/index.html",revision:"69afbb1b688714386db140223d3c643d"},{url:"tags/chatgpt/index.html",revision:"56ee7750bb2cda2431d9af9415f5e32c"},{url:"tags/index.html",revision:"485d26e7d528828af107038c38e4260c"},{url:"tags/教程/index.html",revision:"1e2e83832074778245edfda53439001c"},{url:"tags/演讲/index.html",revision:"7ceda042ab2438655d121c5efd772bf2"},{url:"tags/知识/index.html",revision:"efc67f7fbbbee1b86e43d702b5971d8d"},{url:"tags/苹果/index.html",revision:"b34aa438cac6cc9a951bb5259971bb33"},{url:"tlink/index.html",revision:"5b45cfa6cdd12a0e87ca1195958ed8a7"},{url:"/",revision:"index-20240117085748555"}],{})}));
//# sourceMappingURL=service-worker.js.map
