if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),f={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"03ec25aa79b2ac0249c26e9d1998236f"},{url:"about/index.html",revision:"fb62e20b3adac3455cc6ffedd454c094"},{url:"archives/2023/11/index.html",revision:"d55efabc864e89eddfad6fce938fc333"},{url:"archives/2023/index.html",revision:"21034c4756193f1522d6c73e5a4e992a"},{url:"archives/index.html",revision:"ba8852e3d83b376622108bf38f9679be"},{url:"categories/AI/index.html",revision:"7ed875afebf415e221562ade4d8ad770"},{url:"categories/Butterfly/index.html",revision:"fe845a938ad019e0e06501256bc6bc64"},{url:"categories/chatgpt/index.html",revision:"d4aff4aaed1f02b07c5eecac23d54f51"},{url:"categories/index.html",revision:"967a3bfff38ff06e3ea2333048df008e"},{url:"categories/教程/index.html",revision:"370cb67dfccb7c449038af9bd4d644a2"},{url:"categories/知识/index.html",revision:"98cc21a7af53e78cb2cc78c23e74c330"},{url:"comments/index.html",revision:"248f29cb751b0c9c3d1f408267da4acf"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/icat.css",revision:"fc4312322ec61b2aa45f4ce5adeea5c4"},{url:"css/index.css",revision:"fa21ca16774e1be32b2f72cac25c6935"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"echart/index.html",revision:"fadfbfad9bc6580a0d6a6918fd007f1c"},{url:"essay/index.html",revision:"a861ed487b112a66f63fb7521adf0a6e"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"21cc08349fb4e4efaacbbd65b8b4ed32"},{url:"js/commentBarrage.js",revision:"6d4fc0c935cd70a9b3623d32083975a1"},{url:"js/extend/comment/twikoo.js",revision:"96382ace6bff4eb5351a7e05f2359f03"},{url:"js/extend/comment/waline.js",revision:"469096baf344e30d42d8ab2fe34d439d"},{url:"js/extend/covercolor/local.js",revision:"7697c2774878f3aee788504ae848ee0a"},{url:"js/extend/search/algolia-search.js",revision:"18eb8d163d170ef76634e7eebb6386a1"},{url:"js/extend/search/local-search.js",revision:"c9f53147dd58880679b51c5b1b4a3e3e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/main.js",revision:"87bffdbb13089cc800e3e17a50f94613"},{url:"js/rightside.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"0741dcf06e9522dbcff387a6f61f4e40"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"9c4fb49ba2974b528e4b300880610c82"},{url:"music/index.html",revision:"b34a1feb8d758c269a4ac383ee1e4906"},{url:"posts/286470e0.html",revision:"5e209601291c7e0a3de36e9846c9d1f0"},{url:"posts/381da2ef.html",revision:"7d409ca557d4ec18546c72bb3f3b052b"},{url:"posts/5abaf631.html",revision:"a3f8adf1d67bedde96996f5253872b1f"},{url:"posts/78a7974c.html",revision:"e123d6eacb87d80aa8ad24d857b26809"},{url:"posts/aa9c54d4.html",revision:"4c61f01a4f419b8acb92a3a6f7946f50"},{url:"posts/af19e490.html",revision:"ad5400ed6536ec276fff97ed713c5608"},{url:"posts/e29ba27e.html",revision:"b5593cda5426e1c39d4c58bd3617fcbb"},{url:"posts/efe4d5b4.html",revision:"43e000e53d13baebb6735516ca27d6d3"},{url:"sw-dom.js",revision:"c194fda8bd13079b45f40028fc77f552"},{url:"sw.js",revision:"a555f108f19d969a95d8e412af934504"},{url:"tags/Apple/index.html",revision:"25b44a60bb106ed724f6e29bb55301e9"},{url:"tags/Butterfly/index.html",revision:"4fed0c2044e0aa8d7ea5b9881d4cedc2"},{url:"tags/chatgpt/index.html",revision:"4ef710a9e8d2d3e56bd8763715ca79e7"},{url:"tags/index.html",revision:"d5bdacead792d9362a1aff387750f673"},{url:"tags/教程/index.html",revision:"2db7977804de0fa7ca985e6daf61e4da"},{url:"tags/演讲/index.html",revision:"7a27d7517264ac0b7b387a6f76685518"},{url:"tags/知识/index.html",revision:"4bab132ff6d3f833efe902884e3cfb90"},{url:"tags/苹果/index.html",revision:"232a3bb53409dff57e89523a334364ed"},{url:"tlink/index.html",revision:"1881564031977c087041703a3560e22a"},{url:"/",revision:"index-20231225091037642"}],{})}));
//# sourceMappingURL=service-worker.js.map
