if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),f={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"dd89453f66a81b4f31637fbfe8fab491"},{url:"about/index.html",revision:"a509847d88716dd033da49ad5fda1b9e"},{url:"archives/2023/11/index.html",revision:"a9f33174235a2724426bde5af01d8ec6"},{url:"archives/2023/index.html",revision:"fcded80c8684afac1d3b5071c8e05d47"},{url:"archives/index.html",revision:"a6ba76723c0a4d42f1727edaf5a927a8"},{url:"categories/AI/index.html",revision:"9820c998b4e0889bbca8df0e908805dd"},{url:"categories/Butterfly/index.html",revision:"f3f133ff8902babb1d4ad54a2e5becd7"},{url:"categories/chatgpt/index.html",revision:"70b59dffe2b7ff247c18fbe4917d5ee9"},{url:"categories/index.html",revision:"1ff3c56c88e56880af67f0a9cdb9aa99"},{url:"categories/教程/index.html",revision:"e624aef4b70515704d08f40bc37b10e4"},{url:"categories/知识/index.html",revision:"01ca2fbf9b9460a6ca10251928485eb2"},{url:"comments/index.html",revision:"3b2d34200d63a5238ba9c2fbcb21452c"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/icat.css",revision:"fc4312322ec61b2aa45f4ce5adeea5c4"},{url:"css/index.css",revision:"fa21ca16774e1be32b2f72cac25c6935"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"echart/index.html",revision:"2ae4d9427c6559a1398eb010d31f9445"},{url:"essay/index.html",revision:"f141fb9a1c7ca04ce25fddb57c0692f2"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"b4b4a5d8c6d398c385a3cdd4aaf99f2f"},{url:"js/commentBarrage.js",revision:"6d4fc0c935cd70a9b3623d32083975a1"},{url:"js/extend/comment/twikoo.js",revision:"96382ace6bff4eb5351a7e05f2359f03"},{url:"js/extend/comment/waline.js",revision:"469096baf344e30d42d8ab2fe34d439d"},{url:"js/extend/covercolor/local.js",revision:"7697c2774878f3aee788504ae848ee0a"},{url:"js/extend/search/algolia-search.js",revision:"18eb8d163d170ef76634e7eebb6386a1"},{url:"js/extend/search/local-search.js",revision:"c9f53147dd58880679b51c5b1b4a3e3e"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/main.js",revision:"87bffdbb13089cc800e3e17a50f94613"},{url:"js/rightside.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"0741dcf06e9522dbcff387a6f61f4e40"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"1c08e62ddcb7ff1abac67938b7090256"},{url:"music/index.html",revision:"7ad7a6e125b893b5083e7910046db574"},{url:"posts/286470e0.html",revision:"16d89539427a055fb2397f2b67bb5fd2"},{url:"posts/381da2ef.html",revision:"c3db05f26b78a581a336c04e06ccf36b"},{url:"posts/5abaf631.html",revision:"41ec903a334de29f39d20045a1ca0412"},{url:"posts/78a7974c.html",revision:"3e38b2ca60a003b16a496d35fed4f844"},{url:"posts/aa9c54d4.html",revision:"df350251516fbcb8573f9a4d862c9be1"},{url:"posts/af19e490.html",revision:"e33628ea83f4812743f24c89a86ae441"},{url:"posts/e29ba27e.html",revision:"58e3746f66116a4e0f4a96710603f4a6"},{url:"posts/efe4d5b4.html",revision:"9d08aadd64f0b5065e496e0450dc0d4d"},{url:"sw-dom.js",revision:"c194fda8bd13079b45f40028fc77f552"},{url:"sw.js",revision:"a555f108f19d969a95d8e412af934504"},{url:"tags/Apple/index.html",revision:"6e01423f1e410fc074f4e90f4066d700"},{url:"tags/Butterfly/index.html",revision:"8490b60a69060218db289a335dd4408e"},{url:"tags/chatgpt/index.html",revision:"b1b9444b7fc555f08475876f815c757b"},{url:"tags/index.html",revision:"a7b3de075fc0a3b0df76315651de9d42"},{url:"tags/教程/index.html",revision:"034923efc082fe8a8d1509cf650af509"},{url:"tags/演讲/index.html",revision:"667c7febed97667c3f51cb3a08b29498"},{url:"tags/知识/index.html",revision:"6b39f89dfe95fe5c576abc3b26a90159"},{url:"tags/苹果/index.html",revision:"fb3ee9ce0ad1f5cb76074ee37569a8ba"},{url:"tlink/index.html",revision:"fbcab5d8f076b778a9cad063bd6622b1"},{url:"/",revision:"index-20231228104253121"}],{})}));