if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>s(e,r),n={module:{uri:r},exports:a,require:f};i[r]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"d4bea51d49bd068ab4c2021dba9a336d"},{url:"archives/2022/10/index.html",revision:"a66ab1ba07303dd893c0481195dbf413"},{url:"archives/2022/11/index.html",revision:"7eabdb84678ed1f899782a16981e6bd6"},{url:"archives/2022/12/index.html",revision:"ab45029111505aef25278aab4cf456be"},{url:"archives/2022/index.html",revision:"b0728a70472508482528215d194ce99b"},{url:"archives/2023/01/index.html",revision:"f23b7d1cfde2893ec614d7e1e127557c"},{url:"archives/2023/02/index.html",revision:"e26d8bb384bf4037ccd8f92b15c60d66"},{url:"archives/2023/03/index.html",revision:"c938337d379fe6687a916450f5fe7165"},{url:"archives/2023/index.html",revision:"2581f67ed23b9392c6d4b36caee44d4d"},{url:"archives/index.html",revision:"d2ed3357f1c6d84e48a456cd886f0d41"},{url:"archives/page/2/index.html",revision:"880e766d58fb6a08ac71e9b23339c589"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"3fb9d6279693e4634acd05505e810d61"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"30fd0ef155e00d7356d49ba6d5f74571"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"b72f7f950f120a16a224f3349be27ec9"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"bbf85d315cb93e68229b2dd5868b6a8f"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"b9db5bcf1dcad8e2048892cd6bcf2f2b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"38086c5a49fbf9877dfadc08c018a775"},{url:"music/index.html",revision:"54897f879781aef5ce88b5d583897eae"},{url:"page/2/index.html",revision:"06b9cf5894f309f68222b873a868d6f7"},{url:"posts/B13/index.html",revision:"1b8ad5b4b50babf8ba7e7dbfc00fd521"},{url:"posts/bashiboyi/index.html",revision:"140f4fcae591da6bd2d96a95fb7a5e37"},{url:"posts/hexo1/index.html",revision:"3b4132cf49bd62d704fffa0cea287be0"},{url:"posts/hexo2/index.html",revision:"0721c6bca5ab411e6705110bb864c67d"},{url:"posts/hexo3/index.html",revision:"ee4c6144a4600c9730aad0e66b9f2423"},{url:"posts/hexo4/index.html",revision:"55031dd51a7cd136e2de2d608a060f80"},{url:"posts/photoshop/index.html",revision:"05cbfefa4083c05e66bd96a53643ec1e"},{url:"posts/year2022/index.html",revision:"06809ba5c57e023d44954ce0164f5a35"},{url:"posts/yuming/index.html",revision:"78ba18b9332ecd78178ce68ca83b09e3"},{url:"posts/zhiqian/index.html",revision:"7dc448dfed7ea3f2118a2f6bac8db4f3"},{url:"posts/zhouji1/index.html",revision:"e20f5158ef65fec6ffb2605eaf48e4b7"},{url:"posts/zhouji2/index.html",revision:"20def78a5cd9c104466d8f115a3b126c"},{url:"posts/zhouji3/index.html",revision:"f991c4676a3f49b9611d3f359a059803"},{url:"posts/zuowen/index.html",revision:"5d1a5c797b2f0e3d6eddbc7f73ab789a"},{url:"qingchun/index.html",revision:"08116e595c6aedc031cd3cabeea97df2"},{url:"reward/index.html",revision:"24451f6dc75ff48d98ed86133870a2e8"},{url:"shuoshuo/index.html",revision:"4e74b4d7d89447599cbc20fb41e89fff"},{url:"tags/butterfly/index.html",revision:"aac8076cab8e6c30c4fc6e3c353332e9"},{url:"tags/index.html",revision:"50436c5446c95226e948a87c43501553"},{url:"tags/photoshop/index.html",revision:"a98688c9b1f581dea71663a03d0e9177"},{url:"tags/周记/index.html",revision:"aa25ddb907e5ef358f6d21c84892c830"},{url:"tags/域名/index.html",revision:"583517ba30975aaea597ee47c94fc3d7"},{url:"tags/年度总结/index.html",revision:"1c26d488163059d6bb5e97c2f800a05f"},{url:"tags/教程/index.html",revision:"8a3e507acecccf60ff0875f551ad6f04"},{url:"tags/数学/index.html",revision:"a6eac80a92d6bd95417a4e9a60c55cf7"},{url:"tags/校园/index.html",revision:"223d9376393e88409bca79b5474c6cc5"},{url:"tags/白嫖/index.html",revision:"b4259437e022b6258fcd271bffa1ec94"}],{})}));
//# sourceMappingURL=service-worker.js.map
