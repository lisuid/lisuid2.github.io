const $searchMask=document.getElementById("search-mask"),$searchDialog=document.querySelector("#algolia-search .search-dialog");class search{static openSearch(){utils.fadeIn($searchMask,"0.5"),utils.fadeIn($searchDialog,"0.5"),document.addEventListener("keydown",(function e(t){"Escape"===t.code&&(closeSearch(),document.removeEventListener("keydown",e))}))}static closeSearch(){utils.fadeOut($searchDialog,"0.5"),utils.fadeOut($searchMask,"0.5")}static cutContent(e){if(""===e)return"";const t=e.indexOf("<mark>");let a=t-30,n=t+120,c="",s="";a<=0?(a=0,n=140):c="...",n>e.length?n=e.length:s="...";return c+e.substring(a,n)+s}static search(){const e=GLOBALCONFIG.algolia,t=this;if(!(e.appId&&e.apiKey&&e.indexName))return console.error("Algolia setting is invalid!");const a=instantsearch({indexName:e.indexName,searchClient:algoliasearch(e.appId,e.apiKey),searchFunction(e){e.state.query&&e.search()}}),n=instantsearch.widgets.searchBox({container:"#search-input",showReset:!1,showSubmit:!1,autofocus:!0,placeholder:GLOBALCONFIG.lang.search.placeholder,showLoadingIndicator:!1}),c=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){const a="/posts/"+e.permalink.split("/")[4],n=e._highlightResult,c=n.contentStripTruncate?t.cutContent(n.contentStripTruncate.value):n.contentStrip?t.cutContent(n.contentStrip.value):n.content?t.cutContent(n.content.value):"";return`\n                <a href="${a}" class="algolia-hit-item-link">\n                ${n.title.value}\n                </a>\n                <p class="algolia-hit-item-content">${c}</p>`},empty:function(e){return`<div id="algolia-hits-empty">${GLOBALCONFIG.lang.search.empty}</div>`}}}),s=instantsearch.widgets.stats({container:".algolia-stats",templates:{text:function(e){return GLOBALCONFIG.lang.search.hit.replace("${query}",`<mark>${e.nbHits}</mark>`)}}});a.addWidgets([n,c,s]),a.start(),a.on("render",(()=>{pjax.refresh(document.getElementById("algolia-hits"))}))}}const searchClickFn=()=>{document.querySelector("#search-button > .search").addEventListener("click",search.openSearch),document.getElementById("menu-search").addEventListener("click",(function(){rm.hideRightMenu(),search.openSearch();let e=document.getElementsByClassName("ais-search-box--input")[0],t=new Event("input",{bubbles:!0,cancelable:!0});e.value=selectTextNow,e.dispatchEvent(t)}))},searchClickFnOnce=()=>{document.querySelector("#algolia-search .search-close-button").addEventListener("click",search.closeSearch),$searchMask.addEventListener("click",search.closeSearch)};window.addEventListener("load",(()=>{searchClickFn(),searchClickFnOnce(),search.search()})),window.addEventListener("pjax:complete",(()=>{searchClickFn()}));