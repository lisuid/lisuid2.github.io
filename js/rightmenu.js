let rm={};rm.stopdragimg=Array.from(document.getElementsByTagName("img")),rm.stopdragimg.forEach((function(e){e.addEventListener("dragstart",(function(){return!1}))})),rm.showRightMenu=function(e,t=0,n=0){let o=document.getElementById("rightMenu");o.style.top=t+"px",o.style.left=n+"px",e?(o.style.display="block",stopMaskScroll()):o.style.display="none"},rm.hideRightMenu=function(){rm.showRightMenu(!1),document.getElementById("rightmenu-mask").style.display="none"},document.querySelector("#rightMenu").style.display="block",rmWidth=document.querySelector("#rightMenu").offsetWidth,rmHeight=document.querySelector("#rightMenu").offsetHeight,document.querySelector("#rightMenu").style.display="none",rm.reloadrmSize=function(){document.querySelector("#rightMenu").style.display="block",rmWidth=document.querySelector("#rightMenu").offsetWidth,rmHeight=document.querySelector("#rightMenu").offsetHeight,document.querySelector("#rightMenu").style.display="none"};let domhref="",domImgSrc="",globalEvent=null;function imageToBlob(e){const t=new Image,n=document.createElement("canvas"),o=n.getContext("2d");return t.crossOrigin="",t.src=e,new Promise((e=>{t.onload=function(){n.width=this.naturalWidth,n.height=this.naturalHeight,o.drawImage(this,0,0),n.toBlob((t=>{e(t)}),"image/png",.75)}}))}async function copyImage(e){try{const t=await imageToBlob(e),n=new ClipboardItem({"image/png":t});await navigator.clipboard.write([n])}catch(e){console.error("Failed to copy image: ",e)}}function stopMaskScroll(){document.getElementById("rightmenu-mask")&&document.getElementById("rightmenu-mask").addEventListener("mousewheel",(function(e){rm.hideRightMenu()}),!1),document.getElementById("rightMenu")&&document.getElementById("rightMenu").addEventListener("mousewheel",(function(e){rm.hideRightMenu()}),!1)}window.oncontextmenu=function(e){if(document.body.clientWidth>768){let t=e.clientX+10,n=e.clientY,o=document.getElementsByClassName("rightMenuOther"),i=document.getElementsByClassName("rightMenuPlugin"),c=document.getElementById("menu-copytext"),l=document.getElementById("menu-pastetext"),m=document.getElementById("menu-commenttext"),d=document.getElementById("menu-newwindow"),r=document.getElementById("menu-copylink"),a=document.getElementById("menu-copyimg"),s=document.getElementById("menu-downloadimg"),u=document.getElementById("menu-search"),g=document.getElementById("menu-searchBaidu"),y=document.getElementById("menu-music-toggle"),h=document.getElementById("menu-music-back"),p=document.getElementById("menu-music-forward"),w=document.getElementById("menu-music-playlist"),E=document.getElementById("menu-music-copyMusicName"),f=e.target.href,k=e.target.currentSrc,v=!1;for(let e=0;e<o.length;e++)o[e].style.display="block";if(globalEvent=e,selectTextNow&&window.getSelection()?(v=!0,c.style.display="block",m.style.display="block",u.style.display="block",g.style.display="block"):(c.style.display="none",m.style.display="none",g.style.display="none",u.style.display="none"),f?(v=!0,d.style.display="block",r.style.display="block",domhref=f):(d.style.display="none",r.style.display="none"),k?(v=!0,a.style.display="block",s.style.display="block",domImgSrc=k):(a.style.display="none",s.style.display="none"),"input"===e.target.tagName.toLowerCase()||"textarea"===e.target.tagName.toLowerCase()?(v=!0,l.style.display="block"):l.style.display="none","METING-JS"===e.target.nodeName?(v=!0,y.style.display="block",h.style.display="block",p.style.display="block",w.style.display="block",E.style.display="block"):(y.style.display="none",h.style.display="none",p.style.display="none",w.style.display="none",E.style.display="none"),v){for(let e=0;e<o.length;e++)o[e].style.display="none";for(let e=0;e<i.length;e++)i[e].style.display="block"}else for(let e=0;e<i.length;e++)i[e].style.display="none";return rm.reloadrmSize(),t+rmWidth>window.innerWidth&&(t-=rmWidth+10),n+rmHeight>window.innerHeight&&(n-=n+rmHeight-window.innerHeight),rm.showRightMenu(!0,n,t),document.getElementById("rightmenu-mask").style.display="flex",!1}},rm.downloadimging=!1,rm.writeClipImg=function(e){const t="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?0:1e4;rm.hideRightMenu(),utils.snackbarShow("正在下载中，请稍后",!1,t),0==rm.downloadimging&&(rm.downloadimging=!0,setTimeout((async function(){await copyImage(e),utils.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议"),rm.downloadimging=!1}),1e3))},rm.switchDarkMode=function(){sco.switchDarkMode(),rm.hideRightMenu()},rm.copyUrl=function(e){var t=e,n=document.createElement("input");n.id="copyVal",document.body.appendChild(n),n.value=t,n.select(),n.setSelectionRange(0,n.value.length),document.execCommand("copy"),document.body.removeChild(n)},rm.rightmenuCopyText=function(e){navigator.clipboard&&navigator.clipboard.writeText(e),utils.snackbarShow("复制文本成功",!1,2e3),rm.hideRightMenu()},rm.copyPageUrl=function(){var e=window.location.href;rm.copyUrl(e),utils.snackbarShow("复制本页链接地址成功",!1,2e3),rm.hideRightMenu()},rm.sharePage=function(){window,rm.copyUrl(url),utils.snackbarShow("复制本页链接地址成功",!1,2e3),rm.hideRightMenu()};var selectTextNow="";function selceText(){var e;e=document.selection?document.selection.createRange().text:window.getSelection()+"",selectTextNow=e||""}function replaceAll(e,t,n){return e.split(t).join(n)}function addRightMenuClickEvent(){document.getElementById("menu-backward").addEventListener("click",(function(){window.history.back(),rm.hideRightMenu()})),document.getElementById("menu-forward").addEventListener("click",(function(){window.history.forward(),rm.hideRightMenu()})),document.getElementById("menu-refresh").addEventListener("click",(function(){window.location.reload()})),document.getElementById("menu-top").addEventListener("click",(function(){utils.scrollToDest(0,500),rm.hideRightMenu()})),Array.from(document.getElementsByClassName("menu-link")).forEach((function(e){e.addEventListener("click",rm.hideRightMenu)}));var e=document.getElementById("menu-darkmode");e.onclick=null,e.addEventListener("click",rm.switchDarkMode),document.getElementById("menu-randomPost").addEventListener("click",(function(){toRandomPost()}));var t=document.getElementById("menu-commentBarrage");t.onclick=null,t.addEventListener("click",sco.switchCommentBarrage);var n=document.getElementById("rightmenu-mask");n.addEventListener("click",rm.hideRightMenu),n.addEventListener("contextmenu",(function(){return rm.hideRightMenu(),!1})),document.getElementById("menu-copy").addEventListener("click",rm.copyPageUrl),document.getElementById("menu-pastetext").addEventListener("click",rm.pasteText),document.getElementById("menu-copytext").addEventListener("click",(function(){rm.rightmenuCopyText(selectTextNow),utils.snackbarShow("复制成功，复制和转载请标注本文地址")})),document.getElementById("menu-commenttext").addEventListener("click",(function(){rm.rightMenuCommentText(selectTextNow)})),document.getElementById("menu-newwindow").addEventListener("click",(function(){window.open(domhref),rm.hideRightMenu()})),document.getElementById("menu-copylink").addEventListener("click",rm.copyLink),document.getElementById("menu-downloadimg").addEventListener("click",(function(){sco.downloadImage(domImgSrc,"sco")})),document.getElementById("menu-copyimg").addEventListener("click",(function(){rm.writeClipImg(domImgSrc)})),document.getElementById("menu-searchBaidu").addEventListener("click",rm.searchBaidu),document.getElementById("menu-music-toggle").addEventListener("click",sco.musicToggle),document.getElementById("menu-music-back").addEventListener("click",sco.musicSkipBack),document.getElementById("menu-music-forward").addEventListener("click",sco.musicSkipForward),document.getElementById("menu-music-copyMusicName").addEventListener("click",(function(){rm.rightmenuCopyText(sco.musicGetName()),utils.snackbarShow("复制歌曲名称成功",!1,3e3)}))}document.onmouseup=document.ondbclick=selceText,rm.readClipboard=function(){navigator.clipboard&&navigator.clipboard.readText().then((e=>rm.insertAtCaret(globalEvent.target,e)))},rm.insertAtCaret=function(e,t){const n=e.selectionStart,o=e.selectionEnd;if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(n||"0"==n){var i=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length,e.scrollTop=i}else e.value+=t,e.focus()},rm.pasteText=function(){rm.readClipboard(),rm.hideRightMenu()},rm.rightMenuCommentText=function(e){rm.hideRightMenu();var t=document.getElementsByClassName("el-textarea__inner")[0];let n=document.createEvent("HTMLEvents");n.initEvent("input",!0,!0);let o=replaceAll(e,"\n","\n> ");t.value="> "+o+"\n\n",t.dispatchEvent(n);var i=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,i-80),t.focus(),t.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")},rm.searchBaidu=function(){utils.snackbarShow("即将跳转到百度搜索",!1,2e3),setTimeout((function(){window.open("https://www.baidu.com/s?wd="+selectTextNow)}),"2000"),rm.hideRightMenu()},rm.copyLink=function(){rm.rightmenuCopyText(domhref),utils.snackbarShow("已复制链接地址")};