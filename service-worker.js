if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const f=e=>s(e,d),n={module:{uri:d},exports:r,require:f};i[d]=Promise.all(a.map((e=>n[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"a86be88f503994bfd69d984b12675f41"},{url:"archives/2022/10/index.html",revision:"9d797c5b5b39358a506c9fc769c919cf"},{url:"archives/2022/11/index.html",revision:"02ced9849f4315003e8bcbf01a7280a0"},{url:"archives/2022/12/index.html",revision:"8e2cc451b382c81efaae1079be0f6347"},{url:"archives/2022/index.html",revision:"fab470bdcfc47b415c61755fbee066b3"},{url:"archives/2023/01/index.html",revision:"a4ba8914fa4b1956085dffe1c83c3847"},{url:"archives/2023/02/index.html",revision:"e4ea0404cc7061485815597d59e2bf46"},{url:"archives/2023/03/index.html",revision:"5cdf70f508c544f9e67565028e758521"},{url:"archives/2023/05/index.html",revision:"ea80d85b317b4e6e9588ac25e5a652c4"},{url:"archives/2023/07/index.html",revision:"68fd8fd05914722586ee898d0aeeb667"},{url:"archives/2023/index.html",revision:"6f6ecb2e2f3f90f2406a052393efed1e"},{url:"archives/2023/page/2/index.html",revision:"f13ea952d38e7de840b313bd0666e302"},{url:"archives/index.html",revision:"8fbee1759a4a161ac653479abc0b75f3"},{url:"archives/page/2/index.html",revision:"bc89b4626d05a08e0d91cc5c34814d37"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"a23b3f2a2541bc5fd951056630e91fff"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"c4a0470ec8893309192315924747a146"},{url:"css/music.css",revision:"9b9aaefb9bd26692ceac45dcb84865b2"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"cffaf7d92e7efaddba6fa7836eefcc53"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"6dc5d867fdef8502d4aeb2c40b680a13"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"f2789401b1c51816a5fcbde5cd2a752b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/meting.js",revision:"e8c0d978bb0818d5ed54d6f8383e5c73"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/txmap.js",revision:"29ccf00a8f4483b4fb19329838a4eaaf"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"ba6952ba85d1106f3195465aa21b0b89"},{url:"music/index.html",revision:"f369d1d6eb24e3e6ec46aabe27df6c87"},{url:"page/2/index.html",revision:"94b4f39701f5276e0c23fa03369c50de"},{url:"posts/7nianji/index.html",revision:"16e3879057fa0bae6c688c2ff22e3a3d"},{url:"posts/B13/index.html",revision:"870b7016096453d021bf65a16c7b6048"},{url:"posts/bashiboyi/index.html",revision:"152b81a1d589419a881d2c8021fecb19"},{url:"posts/hexo1/index.html",revision:"abbef064a3ce8cc9bc95821a5c8ae33f"},{url:"posts/hexo2/index.html",revision:"6ad073e9bc6c7337e3df5477f399f26c"},{url:"posts/hexo3/index.html",revision:"3e03d84d64aa6cf17dca96dbd922e37c"},{url:"posts/hexo4/index.html",revision:"6134a6efa52912d15b95d5bf9bb4a14d"},{url:"posts/huoying/index.html",revision:"1673a44719632bc47a040f3b2ab58b45"},{url:"posts/photoshop/index.html",revision:"8de9cc8c3b8eecb8edf6ee73bf3e6383"},{url:"posts/year2022/index.html",revision:"bf50cf6ff671869eb78f3364a2970a70"},{url:"posts/youqu/index.html",revision:"9a2ab6b2607da4cc1d94a4aa4d90bc18"},{url:"posts/yuming/index.html",revision:"f7baa8d2b30ce280e65f2e634ca4bbf6"},{url:"posts/zhiqian/index.html",revision:"a965c049b34144ac6273eae5de585457"},{url:"posts/zhouji1/index.html",revision:"4e938854133b847100fce8a7f887b2c9"},{url:"posts/zhouji2/index.html",revision:"a0b4753a342e16d05ae4dd8435db9348"},{url:"posts/zhouji3/index.html",revision:"2ba210fb6874e22cb3fe33c006b78fa0"},{url:"posts/zuowen1/index.html",revision:"e88baabb7674c5796f0a6751199df16a"},{url:"posts/zuowen2/index.html",revision:"e9aee053f136aa5b562d895b008938cc"},{url:"reward/index.html",revision:"d5525b859a69cb4718d6326877da9926"},{url:"tags/butterfly/index.html",revision:"c0948c30cf1f807406de633af00e04f0"},{url:"tags/index.html",revision:"39d66af77a7173522018cd4ffe91a9ba"},{url:"tags/photoshop/index.html",revision:"59067fe133412f6b5aaeeb576353eb52"},{url:"tags/周记/index.html",revision:"a2031846a526c622f6b069a01ff5263c"},{url:"tags/域名/index.html",revision:"749c52c9c8381275811f528e1a589bc1"},{url:"tags/好文/index.html",revision:"de8c983e8ef19a49fbe474c5037d9f25"},{url:"tags/年度总结/index.html",revision:"b60c5b0e55417d8c2e10b8468050a785"},{url:"tags/教程/index.html",revision:"061f130d364a58236fcd804cef1d2669"},{url:"tags/数学/index.html",revision:"8564158cdb470ffecf840b9740b3f79e"},{url:"tags/校园/index.html",revision:"8ceba53616414a09006e2766bc65edff"},{url:"tags/火影/index.html",revision:"33e5f3bdd18b7e0c82ce32c8a8504793"},{url:"tags/白嫖/index.html",revision:"7aade19497d8bf7c6992277534a3214d"}],{})}));
//# sourceMappingURL=service-worker.js.map
