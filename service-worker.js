if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const n=e=>a(e,r),f={module:{uri:r},exports:d,require:n};i[r]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(c(...e),d)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8e5cb0ca1a3c1421d10cc3e3b01a2ef3"},{url:"about/index.html",revision:"731c2c1f85d231ef2fe3f95f0456a262"},{url:"archives/2023/11/index.html",revision:"2107578d14dc8080f5fd5d6502f39206"},{url:"archives/2023/index.html",revision:"2107578d14dc8080f5fd5d6502f39206"},{url:"archives/index.html",revision:"2207d77b1f91ba3ce62ceab805c12e4c"},{url:"categories/chatgpt/AI/index.html",revision:"c92842ea28ad43ae291716aaebd4d13e"},{url:"categories/chatgpt/index.html",revision:"871920ffc2d371f1cbfc692aeed1acf6"},{url:"categories/index.html",revision:"23833c5c76360aa759add1657c99a951"},{url:"categories/教程/Butterfly/index.html",revision:"4b781716ee3b4db15b7622c499c77c40"},{url:"categories/教程/index.html",revision:"e038aa943da7a62523365ef98e477195"},{url:"categories/知识/index.html",revision:"09b97885b4625acbf7eac5f10e723305"},{url:"css/commentBarrage.css",revision:"55130ea714a4bbc11b28beca53d3fd1c"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/home.css",revision:"87dbcda01edc377f675ad95542e7b5de"},{url:"css/icat.css",revision:"fc4312322ec61b2aa45f4ce5adeea5c4"},{url:"css/main.css",revision:"ecaa399e633a63ba54c8a8bbd1baa95b"},{url:"css/search/algolia-search.css",revision:"305ead04fdbe691c04f0856b7f012ee7"},{url:"css/search/local-search.css",revision:"4913b56e34cce051f2f808c0d9ce05a9"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"7c24c6662b270d35b0930ce85e7935e2"},{url:"essay/index.html",revision:"899dee90d91239c7204942e28a42e2e2"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"5266fc90117abe2d0694df0538e97834"},{url:"js/commentBarrage.js",revision:"13d171fe8b490d50ea1f7612e7481835"},{url:"js/extend/console/comment.js",revision:"d35d127a2368cb2326030c9c2f93744c"},{url:"js/extend/covercolor/local.js",revision:"7e8aaf388bcfc77e9bf1c0f2351c77b5"},{url:"js/extend/search/algolia-search.js",revision:"d7be4c936da4af87291a9e8afac30f01"},{url:"js/extend/search/local-search.js",revision:"71bc5eb7f4a35bd99e74e1237f49182b"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/main.js",revision:"fff422a7be30fa9dc834728d64b29902"},{url:"js/rightmenu.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"8ad683b86c923f3b3491fb9c350405cb"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"cb68893846f154df5dd46e964aea155e"},{url:"posts/286470e0.html",revision:"15681fd24f58659b34fb471ca8f09dcc"},{url:"posts/381da2ef.html",revision:"6881bf2bc7988d747c289339549d4497"},{url:"posts/5abaf631.html",revision:"9d9144ff4a0aa9b3c3f98f4a31e966f1"},{url:"posts/78a7974c.html",revision:"cb10f22f13913bf10b4f9ee8ac1714e2"},{url:"posts/aa9c54d4.html",revision:"561ab24ad1a6ac641d4aeb9ac77d3810"},{url:"posts/af19e490.html",revision:"83258ecb3b9f73948edb1fac3d721653"},{url:"posts/e29ba27e.html",revision:"8aeed03abab309cd9e0b8a0ac86a3407"},{url:"posts/efe4d5b4.html",revision:"494a6e3952c48fd6a999cb25f89db1eb"},{url:"tags/Apple/index.html",revision:"403eadfedf3c25e6c1e2aa244357d90a"},{url:"tags/Butterfly/index.html",revision:"55888cf7befcf0c8346df141b8429b6d"},{url:"tags/chatgpt/index.html",revision:"5bb12a7f767d99562da095f4eb7ca661"},{url:"tags/index.html",revision:"01141884885f9d86fbab71ace575c4fe"},{url:"tags/教程/index.html",revision:"18c8cfea87e3aceaa7f75a9c60b015c7"},{url:"tags/演讲/index.html",revision:"9b0598e2f7a602b9bee2044d78d661c4"},{url:"tags/知识/index.html",revision:"6fe79fb9524677b8764993a47918445a"},{url:"tags/苹果/index.html",revision:"d6ae3da6fd6596ea41727a28552308bc"},{url:"tlink/index.html",revision:"7010c428637fb68af9bf4844324f7a61"},{url:"/",revision:"index-20231115142058034"}],{})}));
//# sourceMappingURL=service-worker.js.map
