if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>s(e,r),n={module:{uri:r},exports:a,require:f};i[r]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"5be791347ffadbab386de5983ff26fb4"},{url:"archives/2022/10/index.html",revision:"d98236ff8f46c04ecb1f2cab76ca810e"},{url:"archives/2022/11/index.html",revision:"2e54c2164bc9eb5b100a27b4ac7fe7c0"},{url:"archives/2022/12/index.html",revision:"10c1c0137c6e14a2e44ddbfde2a6e414"},{url:"archives/2022/index.html",revision:"1d3f6e89256ab3c9ddf5276aa308cdea"},{url:"archives/2023/01/index.html",revision:"fe68370435dc7bb9fb62eb9af415bfbf"},{url:"archives/2023/02/index.html",revision:"7750f1753ab3b3987125e7cb5bcfa7ea"},{url:"archives/2023/03/index.html",revision:"492d2d17f1352c83c53c14f68034a246"},{url:"archives/2023/index.html",revision:"7e4580746997239713acdf5bb2d19912"},{url:"archives/index.html",revision:"f3c25c20dde1d9089d25913912c9eab0"},{url:"archives/page/2/index.html",revision:"9efd1001cec444a0638c982c7d8b644e"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"da982e83e6f3b900a73169bbcaec32ee"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"ece2d2f149e40f6bd90fb8a1cec40a9c"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"967855d00dc74c0041709db991872556"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"b9d370ce5a2ad8826961b513b6d83efc"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"b9db5bcf1dcad8e2048892cd6bcf2f2b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/meting.js",revision:"ed2f534c93ff2e20943d5efc4e8dc1e9"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"5710b4992ebf1e2801f4b2272ef6d86f"},{url:"music/index.html",revision:"69fe785b421fa1fbf53647dd707ea20c"},{url:"page/2/index.html",revision:"da08118c1eae983228b2553e3bd36f91"},{url:"posts/B13/index.html",revision:"47663a2797e4fb07261cdb2aea615fdc"},{url:"posts/bashiboyi/index.html",revision:"044debd4e18e950262db48f769bdce62"},{url:"posts/hexo1/index.html",revision:"845a5c689caea63fe09d2cbf385f7736"},{url:"posts/hexo2/index.html",revision:"4680eedafa341a629edce6f259f5ec98"},{url:"posts/hexo3/index.html",revision:"02db96e85b637035db81fad74d51b510"},{url:"posts/hexo4/index.html",revision:"e1c688ca6496dd4d15cf5db3f805b563"},{url:"posts/photoshop/index.html",revision:"6dba9d134df132730255004e39dc3786"},{url:"posts/year2022/index.html",revision:"1997a0d4924533990d8f22dfceb2c074"},{url:"posts/yuming/index.html",revision:"d49354d9577b44b83afc2dc9b02a7259"},{url:"posts/zhiqian/index.html",revision:"7029004caf35c36ebbcc273e967902e6"},{url:"posts/zhouji1/index.html",revision:"f619765eb8b3ee402fa5bb2ddc4e3392"},{url:"posts/zhouji2/index.html",revision:"7557dcf57410c1bbf991ccbc75d620da"},{url:"posts/zhouji3/index.html",revision:"b8dc74080a602eca4d563568c31aec38"},{url:"posts/zuowen1/index.html",revision:"0640597fc1cd5938de0cf9adfd096db2"},{url:"posts/zuowen2/index.html",revision:"a87af6f08cfb92b1829b0d5f88c736ba"},{url:"qingchun/index.html",revision:"d2a7292919c663b45fd091ca2e6ac8c9"},{url:"reward/index.html",revision:"7135bd569edab57cc752eeb83576d840"},{url:"shuoshuo/index.html",revision:"925a93fd76dda382d53aa7ac88593ddf"},{url:"tags/butterfly/index.html",revision:"f80df5899043015e4015af0dde471991"},{url:"tags/index.html",revision:"a7b664ae69b4bfa1493efaa1af748432"},{url:"tags/photoshop/index.html",revision:"6d7b22dfc5911b8eccec68fd6eeb930a"},{url:"tags/周记/index.html",revision:"7ca36364b92eccb2dfae686cdef6fea1"},{url:"tags/域名/index.html",revision:"69920896467f96c1d8c3137a4fd0e6c3"},{url:"tags/年度总结/index.html",revision:"6d397c3d106e62963e101aae305b1314"},{url:"tags/教程/index.html",revision:"1e36804f530f0f20514eb1d2559007a2"},{url:"tags/数学/index.html",revision:"ff3ffe7770958de0cb53938a556b1f90"},{url:"tags/校园/index.html",revision:"7a048530c85bb85982d3595f8096d2e0"},{url:"tags/白嫖/index.html",revision:"099ff8200a15205a290cbb1f242db0df"}],{})}));
//# sourceMappingURL=service-worker.js.map
