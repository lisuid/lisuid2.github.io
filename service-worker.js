if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),l={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"55435b3b3383a848986970eacfd08798"},{url:"about/index.html",revision:"32d0da4d8927d838040676f5ec818996"},{url:"archives/2023/11/index.html",revision:"2eface9ddab8b091ea0cced05f76676b"},{url:"archives/2023/index.html",revision:"084730ecb808d8d8198fda89c981c406"},{url:"archives/2024/01/index.html",revision:"5b53539ef7a296039ae740704de19fc2"},{url:"archives/2024/index.html",revision:"94b40b15a3a8de4c020487949a5476d1"},{url:"archives/index.html",revision:"722b92bb2e87200fa9f0124f52237fc9"},{url:"categories/AI/index.html",revision:"fe170f1d9bca628d8abf9a7a3aa97f6e"},{url:"categories/Butterfly/index.html",revision:"4ec145a6a6570ce007663ad26100f1ff"},{url:"categories/CDN/index.html",revision:"f277439e8f0d0f104e47899f576bd742"},{url:"categories/chatgpt/index.html",revision:"ded40484951a034ae38476200d79bc3d"},{url:"categories/index.html",revision:"757de077c718af96773aa59685913a7a"},{url:"categories/教程/index.html",revision:"bf834fd1f94bb7b458746dd475148414"},{url:"categories/知识/index.html",revision:"cc3c56308d36e20d81cc304313742671"},{url:"css/custom.css",revision:"83a635b70319f30f6f5900c989713bf9"},{url:"css/icat.css",revision:"27c627293934bb331ed04b6ff33130b3"},{url:"css/index.css",revision:"37ebf173fe6f51a0bddcfeb4fae544d8"},{url:"css/universe.css",revision:"0fb6d3a0ae65975ab712cba344e8bae9"},{url:"echart/index.html",revision:"e6c808d0afd20d464c683e620475866b"},{url:"essay/index.html",revision:"d523129dc866290a942330cabdfc3b63"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"3d1ac60faf5fc97dda76ec4357c5b37a"},{url:"js/commentBarrage.js",revision:"741b6405d4185f8cf7886d8e18205865"},{url:"js/extend/comment/twikoo.js",revision:"169317819935b34c6a8f947574c2fb34"},{url:"js/extend/comment/waline.js",revision:"5e30002f8444ee70aa4990c6daf4754f"},{url:"js/extend/covercolor/local.js",revision:"7109d4d4c2158ab0804bd95beb9bc3d4"},{url:"js/extend/search/algolia-search.js",revision:"1c3637504565e4280a602262c9489373"},{url:"js/extend/search/local-search.js",revision:"dc550b3874d26d97b8183c9d4d705aac"},{url:"js/fps.js",revision:"e991005a97d257dad304a92102c69466"},{url:"js/main.js",revision:"80b61156fb02463bcc9164d2799bc43c"},{url:"js/rightside.js",revision:"40e15c2774010e34a69de48f6ed98e9d"},{url:"js/txmap.js",revision:"a59217f4a4e73d595ceaab0a7b0f9e50"},{url:"js/universe.js",revision:"c8c96de7a14bba0d6bce5844c6b059ad"},{url:"js/utils.js",revision:"8183531ac0df04850b5103a4c7950300"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"8f1a6f024a95fe0c34989ef7e8885865"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"ef3075618f1f96764eaa048bac79a118"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"2fbfea682fa845cd059ad6f9ac939a96"},{url:"music/index.html",revision:"9053acd60c28c8b0dc053d6c0884264c"},{url:"posts/286470e0.html",revision:"16cccfdb1261ee8a949398ed8f595b2a"},{url:"posts/381da2ef.html",revision:"2c1d55de46744ef7293f69e7927648d5"},{url:"posts/55a65cc5.html",revision:"f26871847071d0d1007e36a7640a3044"},{url:"posts/5abaf631.html",revision:"d6476dd28cdc6a4fe70b27a9faf96c32"},{url:"posts/78a7974c.html",revision:"b1f4e5a8cb867e3e3dccd32389eb0763"},{url:"posts/aa9c54d4.html",revision:"c8d72b2c69cac04e709101d6ef62c380"},{url:"posts/af19e490.html",revision:"ebe70b09cb265f4cc17750d70404c80e"},{url:"posts/e29ba27e.html",revision:"5bc61a8104c52d82fb55574f0c3fdd9e"},{url:"posts/efe4d5b4.html",revision:"b972a899a5693226bb2fc531b516ec02"},{url:"sw-dom.js",revision:"78450ac2c27e8a39fa168ca8da3c2c3d"},{url:"sw.js",revision:"08ceaf8d4e83c20bd0eafc3eff901fa0"},{url:"tags/Apple/index.html",revision:"8f91f8705632ac076a043be9b13fc457"},{url:"tags/Butterfly/index.html",revision:"be3c1287e9a22ceef35f0f192b3e9fe0"},{url:"tags/CDN/index.html",revision:"b17c37ee9b9b62551f549f5c27a5447a"},{url:"tags/chatgpt/index.html",revision:"a3d388694e052e985ef1eb4e41335728"},{url:"tags/index.html",revision:"b754201992bc168c0608da9c3b8a5b1d"},{url:"tags/教程/index.html",revision:"138f00f57e64988517c4b41750f310ca"},{url:"tags/演讲/index.html",revision:"d26b767c5f571952eeadf05746655657"},{url:"tags/知识/index.html",revision:"59981ec1d951c434fe8bcdb828a6cc36"},{url:"tags/苹果/index.html",revision:"1e40bb938dd4471b8fbfb313b00b2b79"},{url:"tlink/index.html",revision:"45ab715f070935321ceaca14cbec8ce1"},{url:"/",revision:"index-20240106140146482"}],{})}));
//# sourceMappingURL=service-worker.js.map
