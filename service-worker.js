if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const f=e=>s(e,a),n={module:{uri:a},exports:r,require:f};i[a]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"d4bea51d49bd068ab4c2021dba9a336d"},{url:"archives/2022/10/index.html",revision:"21d50f228c4075462c0c84fee86a9d1c"},{url:"archives/2022/11/index.html",revision:"530910eeaa81c0866142c3d6431190d6"},{url:"archives/2022/12/index.html",revision:"4fe3b02798660be6a72c240ffa8d38c9"},{url:"archives/2022/index.html",revision:"1d5edfc1a7ae5b1b1a6927a02d4a941d"},{url:"archives/2023/01/index.html",revision:"10f134889354d55f5194aad017c2875c"},{url:"archives/2023/02/index.html",revision:"7ed6f5cc8fce7a8c11c9ea7917839ffb"},{url:"archives/2023/03/index.html",revision:"54cf8553805a6862126e1a123bb18056"},{url:"archives/2023/index.html",revision:"f0ecd6a3e9dff89f2147c4d75b94632d"},{url:"archives/index.html",revision:"086624e57a158b369542af54346f1668"},{url:"archives/page/2/index.html",revision:"8be597be214811d58852e817bb572f8c"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"3fb9d6279693e4634acd05505e810d61"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"30fd0ef155e00d7356d49ba6d5f74571"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"25ef3ed6cac89100247eded5ccca8d8b"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"bc497c72c56ed86c2b252c2f20a8ac8f"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"b9db5bcf1dcad8e2048892cd6bcf2f2b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"8afdf75767bfcb9d014a3f86310414d3"},{url:"music/index.html",revision:"54897f879781aef5ce88b5d583897eae"},{url:"page/2/index.html",revision:"824162e7f42ea604727a157d99f71ea7"},{url:"posts/B13/index.html",revision:"1b8ad5b4b50babf8ba7e7dbfc00fd521"},{url:"posts/bashiboyi/index.html",revision:"140f4fcae591da6bd2d96a95fb7a5e37"},{url:"posts/hexo1/index.html",revision:"3b4132cf49bd62d704fffa0cea287be0"},{url:"posts/hexo2/index.html",revision:"0721c6bca5ab411e6705110bb864c67d"},{url:"posts/hexo3/index.html",revision:"ee4c6144a4600c9730aad0e66b9f2423"},{url:"posts/hexo4/index.html",revision:"55031dd51a7cd136e2de2d608a060f80"},{url:"posts/photoshop/index.html",revision:"05cbfefa4083c05e66bd96a53643ec1e"},{url:"posts/year2022/index.html",revision:"06809ba5c57e023d44954ce0164f5a35"},{url:"posts/yuming/index.html",revision:"78ba18b9332ecd78178ce68ca83b09e3"},{url:"posts/zhiqian/index.html",revision:"7dc448dfed7ea3f2118a2f6bac8db4f3"},{url:"posts/zhouji1/index.html",revision:"e20f5158ef65fec6ffb2605eaf48e4b7"},{url:"posts/zhouji2/index.html",revision:"20def78a5cd9c104466d8f115a3b126c"},{url:"posts/zhouji3/index.html",revision:"f991c4676a3f49b9611d3f359a059803"},{url:"posts/zuowen/index.html",revision:"5d1a5c797b2f0e3d6eddbc7f73ab789a"},{url:"qingchun/index.html",revision:"6a9eb20e1f1b2d8edf9a856d16ee9669"},{url:"reward/index.html",revision:"9874579c6bd334bdf94d62cc701a3097"},{url:"shuoshuo/index.html",revision:"68bff4c7652e5f12ae2e9c3ec85f0c1c"},{url:"tags/butterfly/index.html",revision:"b63c265d59a87f7d01cd1c717a8aa51a"},{url:"tags/index.html",revision:"b2ee2ce44abc5f93c93e83a0e1f79a4b"},{url:"tags/photoshop/index.html",revision:"2df754feee8c6776da9b3f51c3624fd2"},{url:"tags/周记/index.html",revision:"63c7e8da304d0639a3bbae1f1d76b510"},{url:"tags/域名/index.html",revision:"eaf4113cdcdb52e0d0d5d6a335a51b42"},{url:"tags/年度总结/index.html",revision:"413441d5d2b4026a34840ae0bb195697"},{url:"tags/教程/index.html",revision:"61afa9403acd6e1656b781682830ac20"},{url:"tags/数学/index.html",revision:"f1c8f8da8e80e74ee2bbea8f9e950db9"},{url:"tags/校园/index.html",revision:"8f338f155f26479bdc950f1b91e0350c"},{url:"tags/白嫖/index.html",revision:"2d31112f3ed5c8d0e48fec379d487007"}],{})}));
//# sourceMappingURL=service-worker.js.map
