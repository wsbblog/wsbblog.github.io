if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const c=e=>d(e,r),n={module:{uri:r},exports:f,require:c};i[r]=Promise.all(s.map((e=>n[e]||c(e)))).then((e=>(a(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"06202e1b9e0f3dd31aa67d70b7663509"},{url:"archives/2022/10/index.html",revision:"b9a671d1004374ab80ca3e8968d9d08a"},{url:"archives/2022/11/index.html",revision:"803d2040f69af20ca6e5af0bd91ec9ed"},{url:"archives/2022/12/index.html",revision:"47965f427b3eb851f7d65ed2d6a5645a"},{url:"archives/2022/index.html",revision:"92e6769a6bdc157baad97fb5d7a5e9d3"},{url:"archives/2023/01/index.html",revision:"312771277e6a06d0ef8097ce6b8471f7"},{url:"archives/2023/02/index.html",revision:"d43f1edb6aac005796a2ab1d60f09498"},{url:"archives/2023/03/index.html",revision:"c82c80912079a5f383d242156f520bff"},{url:"archives/2023/index.html",revision:"4aefd33ffecd5832a40dd345a70bfa97"},{url:"archives/index.html",revision:"74a8f6b2db6984a868fc86687254f3e4"},{url:"archives/page/2/index.html",revision:"834ddf3eb333332b315d7a9787bc44a1"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"944e905d2a03832320633e1c1386710b"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"30fd0ef155e00d7356d49ba6d5f74571"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"091db7325c84576e75398d1f707a5be7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"39ac79938bd779663a90e38c343eee31"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"b9db5bcf1dcad8e2048892cd6bcf2f2b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"cddeaf4ab54c504ac0495160e15914ae"},{url:"music/index.html",revision:"7f5c3fae080aafdc85388d4577bbb690"},{url:"page/2/index.html",revision:"6bb8aff50da9e53484a1ebcd9de72b91"},{url:"posts/B13/index.html",revision:"6541124b7b3f28e596633fc8409da8b2"},{url:"posts/bashiboyi/index.html",revision:"fda69dfd184cf6623dcefe4c3f8ff901"},{url:"posts/hexo1/index.html",revision:"12d94052d735c388ca3a66c3228955a0"},{url:"posts/hexo2/index.html",revision:"80daa84af4a435918bb72524fca9c2b9"},{url:"posts/hexo3/index.html",revision:"cf8a40f68fd0f4d3e63317bc2f45760a"},{url:"posts/hexo4/index.html",revision:"8d9d66b6ecb497633d4415ee9dd47d1f"},{url:"posts/photoshop/index.html",revision:"a59f66b25d1bcde0fe94f01b2680059d"},{url:"posts/year2022/index.html",revision:"b459d5f847ab095e8725faa7e1dcdadd"},{url:"posts/yuming/index.html",revision:"227dc45c8af178d984122f62a83fee5f"},{url:"posts/zhiqian/index.html",revision:"2db6dc95fd5cbabba8a185596bec74dd"},{url:"posts/zhouji1/index.html",revision:"38130b9bdf60b52aabe6417d7baa892e"},{url:"posts/zhouji2/index.html",revision:"b62c0fa66b45fdf4cbaf34e6df420680"},{url:"posts/zhouji3/index.html",revision:"f8d66ed3d19979104b40457d9847f5bb"},{url:"posts/zuowen1/index.html",revision:"97c0595f823ac564ba8748fd835629a8"},{url:"posts/zuowen2/index.html",revision:"8f3cc69ffe7b1d883ecf1a3d77258e9f"},{url:"qingchun/index.html",revision:"eab6e327d17fea6295676a2032c87097"},{url:"reward/index.html",revision:"85b742f56cc483477b5affbfcade930c"},{url:"shuoshuo/index.html",revision:"4e3d7a635d498949987db8477b2d3f0a"},{url:"tags/butterfly/index.html",revision:"8002c49cff31ff25c5b4adaaab98cef9"},{url:"tags/index.html",revision:"441e62adf0a3d746fa52b55a74209236"},{url:"tags/photoshop/index.html",revision:"29d3d5b359871cfefd457893ba7d0e90"},{url:"tags/周记/index.html",revision:"110e26d89b4b39112622d3302fa38540"},{url:"tags/域名/index.html",revision:"db9f4ad33543ea9c64cca0d02198f300"},{url:"tags/年度总结/index.html",revision:"f25bcebd8ab4a52c415314d43299f750"},{url:"tags/教程/index.html",revision:"a1f61804a20af7a5f67ca0eecd8f8ac7"},{url:"tags/数学/index.html",revision:"7c83eff0d8a9063db2936afc464bf8be"},{url:"tags/校园/index.html",revision:"4df18bcf2964a24c2704cf48d5573b18"},{url:"tags/白嫖/index.html",revision:"2c6814cd94f463995136ae863d718069"}],{})}));
//# sourceMappingURL=service-worker.js.map
