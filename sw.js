(()=>{const e="AnZhiYuThemeCache",t="https://id.v3/",n=()=>caches.match(t).then((e=>e?.json())),s=n=>caches.open(e).then((e=>e.put(t,new Response(JSON.stringify(n)))));self.addEventListener("install",(()=>{self.skipWaiting()})),self.addEventListener("activate",(e=>e.waitUntil(clients.claim())));let r={simple:{clean:!0,search:!1,match:e=>"blog.lisui.top"===e.host&&["/404.html","/css/index.css"].includes(e.pathname)},cdn:{clean:!0,match:e=>["cdn.cbd.int","lf26-cdn-tos.bytecdntp.com","lf6-cdn-tos.bytecdntp.com","lf3-cdn-tos.bytecdntp.com","lf9-cdn-tos.bytecdntp.com","cdn.staticfile.org","npm.elemecdn.com"].includes(e.host)&&e.pathname.match(/\.(js|css|woff2|woff|ttf|cur)$/)}},c=e=>{if(e.startsWith("https://npm.elemecdn.com"))return{timeout:3e3,list:[e,`https://cdn.cbd.int/${new URL(e).pathname}`]}};const a=(e,t,n=null)=>{if(!n&&!(n=c(e.url)))return u(e,t);const s=n.list,r=new Array(s.length),a=n=>u(new Request(s[n],e),t,{signal:(r[n]=new AbortController).signal}).then((e=>o(e)?{r:e,i:n}:Promise.reject()));return new Promise(((t,c)=>{let o=!0;const l=()=>{o=!1,Promise.any([h,...Array.from({length:s.length-1},((e,t)=>t+1)).map((e=>a(e)))]).then((e=>{for(let t=0;t!==s.length;++t)t!==e.i&&r[t].abort();t(e.r)})).catch((()=>c(`请求 ${e.url} 失败`)))},i=setTimeout(l,n.timeout),h=a(0).then((e=>{o&&(clearTimeout(i),t(e.r))})).catch((()=>(o&&(clearTimeout(i),l()),Promise.reject())))}))},o=e=>e.ok||[301,302,307,308].includes(e.status),l=new Map;self.addEventListener("fetch",(t=>{let n=t.request,s=new URL(n.url);if("GET"!==n.method||!n.url.startsWith("http"))return;let r,i=s.hostname+s.pathname+s.search;const u=e=>{t.respondWith(r?e.then((e=>{for(let t of r)t(e.clone())})).catch((e=>{for(let t of r)t(e)})).then((()=>(l.delete(i),e))):e)},m=f(s);if(m){let t=`https://${s.host}${s.pathname}`;t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),m.search&&(t+=s.search),u(caches.match(t).then((s=>s??a(n,!0).then((n=>{if(o(n)){const s=n.clone();caches.open(e).then((e=>e.put(t,s)))}return n})))))}else{const e=c(n.url);u(e?a(n,!1,e):h(n).catch((e=>new Response(e,{status:499}))))}})),self.addEventListener("message",(e=>{"update"===e.data&&m().then((t=>{t.type="update",e.source.postMessage(t)}))}));const i=(e,t,n,s)=>(s||(s={}),s.cache=t?"no-store":"default",n&&(s.mode="cors",s.credentials="same-origin"),fetch(e,s)),h=(e,t)=>i(e,!1,!1,t),u=(e,t,n)=>i(e,t,!0,n),f=e=>{if("localhost"!==e.hostname)for(let t in r){const n=r[t];if(n.match(e))return n}},m=async()=>{const r=await a(new Request("/update.json"),!1);if(!o(r))throw`加载 update.json 时遇到异常，状态码：${r.status}`;const c=await r.json(),l=await(e=>n().then((t=>{const{info:n,global:r}=e,c={global:r,local:n[0].version,escape:t?.escape??0};if(!t)return c.escape=0,s(c),{new:c,old:t};let a=new d,o=((e,t,n)=>{for(let s of t){const{version:t,change:r}=s;if(t===n)return!1;if(r)for(let t of r)e.push(new p(t))}return!0})(a,n,t.local);return s(c),o&&(r!==t.global?a.force=!0:a.refresh=!0),{list:a,new:c,old:t}})))(c);if(l.list){const n=await(n=>caches.open(e).then((e=>e.keys().then((s=>Promise.all(s.map((async s=>{const r=s.url;return r!==t&&n.match(r)?(e.delete(s),r):null}))))).then((e=>e.filter((e=>e)))))))(l.list);l.list=n?.length?n:null}return l};function d(){const e=[];this.push=t=>{e.push(t)},this.match=t=>{if(this.force)return!0;if(t=new URL(t),this.refresh)return f(t).clean;for(let n of e)if(n.match(t))return!0;return!1}}function p(e){const t=t=>{const n=e.value;if(Array.isArray(n)){for(let e of n)if(t(e))return!0;return!1}return t(n)};this.match=(()=>{switch(e.flag){case"html":return e=>e.pathname.match(/(\/|\.html)$/);case"end":return e=>t((t=>e.href.endsWith(t)));case"begin":return e=>t((t=>e.pathname.startsWith(t)));case"str":return e=>t((t=>e.href.includes(t)));case"reg":return e=>t((t=>e.href.match(new RegExp(t,"i"))));default:throw`未知表达式：${JSON.stringify(e)}`}})()}})();