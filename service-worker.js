if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),l={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2a3933a7c9519aeb4988220e49c825e9"},{url:"about/index.html",revision:"01346704852ed449409f738c8c4f98c7"},{url:"archives/2023/11/index.html",revision:"977772788cf10a835fde9b0c0ca776e5"},{url:"archives/2023/index.html",revision:"72e6a7393db8f7237ad440d93e920aac"},{url:"archives/index.html",revision:"4dba39ca72fa358ff5e9acd449a2f00b"},{url:"categories/AI/index.html",revision:"d5b56ab523eebfd689e125320f169a93"},{url:"categories/Butterfly/index.html",revision:"822b34af68c6fa37c215fcff674c1622"},{url:"categories/chatgpt/index.html",revision:"7c73080ec9fa4ba6b0c3fc86f50da9a9"},{url:"categories/index.html",revision:"29aab3e09301b373c3d699b901235be8"},{url:"categories/教程/index.html",revision:"cb5f4eb317b321a7b0656624dc401c32"},{url:"categories/知识/index.html",revision:"5f929fb79a06b92edb101eaf5319fdc2"},{url:"comments/index.html",revision:"3cc0c46dea440465c6a22809ab794991"},{url:"css/custom.css",revision:"83a635b70319f30f6f5900c989713bf9"},{url:"css/icat.css",revision:"27c627293934bb331ed04b6ff33130b3"},{url:"css/index.css",revision:"37ebf173fe6f51a0bddcfeb4fae544d8"},{url:"css/universe.css",revision:"0fb6d3a0ae65975ab712cba344e8bae9"},{url:"echart/index.html",revision:"aa31fb9cb967e7e57d015320e3076966"},{url:"essay/index.html",revision:"105817034c4a661c970d9250e60eaa74"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"4cd265939ff59806907dce48db4c901a"},{url:"js/commentBarrage.js",revision:"741b6405d4185f8cf7886d8e18205865"},{url:"js/extend/comment/twikoo.js",revision:"169317819935b34c6a8f947574c2fb34"},{url:"js/extend/comment/waline.js",revision:"5e30002f8444ee70aa4990c6daf4754f"},{url:"js/extend/covercolor/local.js",revision:"7109d4d4c2158ab0804bd95beb9bc3d4"},{url:"js/extend/search/algolia-search.js",revision:"1c3637504565e4280a602262c9489373"},{url:"js/extend/search/local-search.js",revision:"dc550b3874d26d97b8183c9d4d705aac"},{url:"js/fps.js",revision:"e991005a97d257dad304a92102c69466"},{url:"js/main.js",revision:"80b61156fb02463bcc9164d2799bc43c"},{url:"js/rightside.js",revision:"40e15c2774010e34a69de48f6ed98e9d"},{url:"js/txmap.js",revision:"a59217f4a4e73d595ceaab0a7b0f9e50"},{url:"js/universe.js",revision:"c8c96de7a14bba0d6bce5844c6b059ad"},{url:"js/utils.js",revision:"8183531ac0df04850b5103a4c7950300"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"8f1a6f024a95fe0c34989ef7e8885865"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"ef3075618f1f96764eaa048bac79a118"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"e476e172569f950a5177038b6c4f5968"},{url:"music/index.html",revision:"d8aa5f1c33c4b573764eddbdc1c41dd4"},{url:"posts/286470e0.html",revision:"bc00c33417bdacf89f7f8d9cbcbbe06a"},{url:"posts/381da2ef.html",revision:"c68595ab6b8c9d2dcab48ec11b89b475"},{url:"posts/5abaf631.html",revision:"3b62d27f2847bec2b4f00eb017222a32"},{url:"posts/78a7974c.html",revision:"422f3c166f9d2df5386c5abb302b8517"},{url:"posts/aa9c54d4.html",revision:"c3fd785cb196ece9928582c9b2807ff8"},{url:"posts/af19e490.html",revision:"7c0ca079398a31d64c51f5ce54c235fa"},{url:"posts/e29ba27e.html",revision:"88a664c42392ce1badde904450228d18"},{url:"posts/efe4d5b4.html",revision:"6ca007db12caf53fcf3a2c5cafa5b09e"},{url:"sw-dom.js",revision:"78450ac2c27e8a39fa168ca8da3c2c3d"},{url:"sw.js",revision:"08ceaf8d4e83c20bd0eafc3eff901fa0"},{url:"tags/Apple/index.html",revision:"3768a244d038cba976c78e1b35931892"},{url:"tags/Butterfly/index.html",revision:"16e95a65f995ce35e96ad6086e3372da"},{url:"tags/chatgpt/index.html",revision:"e9e88c56378f67d9982540aa66c79e7a"},{url:"tags/index.html",revision:"cb40506b8e7d0f9c5a82c95021717e7f"},{url:"tags/教程/index.html",revision:"cd52ec3357e34bd7467f1d9c126cf359"},{url:"tags/演讲/index.html",revision:"1571ccdc9ce2d6e8f841d63125795793"},{url:"tags/知识/index.html",revision:"e77be045eadbdb775111d26593258f52"},{url:"tags/苹果/index.html",revision:"0c5ff7e5e2763e71cf7498594c430a16"},{url:"tlink/index.html",revision:"4a5625787d7b494e4d94afe37f0c5659"},{url:"/",revision:"index-20231229045026870"}],{})}));
//# sourceMappingURL=service-worker.js.map
