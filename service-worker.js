if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),f={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"dd89453f66a81b4f31637fbfe8fab491"},{url:"about/index.html",revision:"a509847d88716dd033da49ad5fda1b9e"},{url:"archives/2023/11/index.html",revision:"a57da361d54cff51dc35bafdd2e37a40"},{url:"archives/2023/index.html",revision:"8b36fc96a7bc05cae8bcd3dba42c518b"},{url:"archives/index.html",revision:"1354e99f235b60ca1011c11bf45dea31"},{url:"categories/AI/index.html",revision:"a9fd40881ea6e94d987417dccca3a5e8"},{url:"categories/Butterfly/index.html",revision:"075a3bf82d99e1995c37c6d4bb2acf84"},{url:"categories/chatgpt/index.html",revision:"ff8344025c329d7bc7cccfa5825d2915"},{url:"categories/index.html",revision:"5a135e904f26e01e1f46ba50f33afc26"},{url:"categories/教程/index.html",revision:"9359658036ed9c3cb74457455064a676"},{url:"categories/知识/index.html",revision:"d41c8750dae5c9de8ab554ce9b62c296"},{url:"comments/index.html",revision:"3b2d34200d63a5238ba9c2fbcb21452c"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/icat.css",revision:"fc4312322ec61b2aa45f4ce5adeea5c4"},{url:"css/index.css",revision:"fa21ca16774e1be32b2f72cac25c6935"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"echart/index.html",revision:"2f8fc294dcdc6764114aea318db14ad9"},{url:"essay/index.html",revision:"f141fb9a1c7ca04ce25fddb57c0692f2"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"2113cd9e6120e713da6f5720f79d22a4"},{url:"js/commentBarrage.js",revision:"6d4fc0c935cd70a9b3623d32083975a1"},{url:"js/extend/comment/twikoo.js",revision:"96382ace6bff4eb5351a7e05f2359f03"},{url:"js/extend/comment/waline.js",revision:"469096baf344e30d42d8ab2fe34d439d"},{url:"js/extend/covercolor/local.js",revision:"7697c2774878f3aee788504ae848ee0a"},{url:"js/extend/search/algolia-search.js",revision:"18eb8d163d170ef76634e7eebb6386a1"},{url:"js/extend/search/local-search.js",revision:"c9f53147dd58880679b51c5b1b4a3e3e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/main.js",revision:"87bffdbb13089cc800e3e17a50f94613"},{url:"js/rightside.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"0741dcf06e9522dbcff387a6f61f4e40"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"1c08e62ddcb7ff1abac67938b7090256"},{url:"music/index.html",revision:"7ad7a6e125b893b5083e7910046db574"},{url:"posts/286470e0.html",revision:"a39d392d35ca5d7696992c342b688fc1"},{url:"posts/381da2ef.html",revision:"c5f53a47883a76ffe6184dae9f28f094"},{url:"posts/5abaf631.html",revision:"e57d60c45f31b74055dbd11ebeec0396"},{url:"posts/78a7974c.html",revision:"75635dcbcac41b5685d5005bce4b0b45"},{url:"posts/aa9c54d4.html",revision:"8a33262e97907462f2925d025d7bf6e6"},{url:"posts/af19e490.html",revision:"af7a4ada310be141791781955385f1b2"},{url:"posts/e29ba27e.html",revision:"f0c86714c7b4068482fae954c137d4d4"},{url:"posts/efe4d5b4.html",revision:"5e6e1e36b188432d7a61cfc2bf04bfe0"},{url:"sw-dom.js",revision:"c194fda8bd13079b45f40028fc77f552"},{url:"sw.js",revision:"a555f108f19d969a95d8e412af934504"},{url:"tags/Apple/index.html",revision:"97f4e51f073e20a3b5bc49c0d083a870"},{url:"tags/Butterfly/index.html",revision:"ba0a688c8c7c055f0aafecfa93a52f5b"},{url:"tags/chatgpt/index.html",revision:"666040cd92625135867d82c3b58d4f88"},{url:"tags/index.html",revision:"a7b3de075fc0a3b0df76315651de9d42"},{url:"tags/教程/index.html",revision:"d4927f81a29f50b210846f57ff86ad3d"},{url:"tags/演讲/index.html",revision:"b41c98d42f312fee36fae9097078a5d4"},{url:"tags/知识/index.html",revision:"14d50b9b8816a8622745586aac0b0438"},{url:"tags/苹果/index.html",revision:"d1101de984baf05f5cd48016daf2b764"},{url:"tlink/index.html",revision:"fbcab5d8f076b778a9cad063bd6622b1"},{url:"/",revision:"index-20231228104556926"}],{})}));