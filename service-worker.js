if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const f=e=>s(e,a),b={module:{uri:a},exports:r,require:f};i[a]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(d(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"293924b54208cf05a2837af04cec46a5"},{url:"archives/2022/10/index.html",revision:"54e5f6adc2e09c42c651d1f632a9916a"},{url:"archives/2022/11/index.html",revision:"443e666c74b7bebbe9ea53beba07dbf8"},{url:"archives/2022/12/index.html",revision:"b4c470125828d126e845b51af1b9822f"},{url:"archives/2022/index.html",revision:"0013f4b4f7c08c93012d09cb6cf0ea78"},{url:"archives/2023/01/index.html",revision:"dab14f2d5db3c4cecbac481e66a1f462"},{url:"archives/2023/02/index.html",revision:"73ddc6d1e3079b797a759e0496ae50cc"},{url:"archives/2023/03/index.html",revision:"8b83d92e860a8b5630bddddc3f35125b"},{url:"archives/2023/05/index.html",revision:"3fb568ce1f49cc09335f4833e637d307"},{url:"archives/2023/07/index.html",revision:"eaac1fd365383dd932064c3a20280713"},{url:"archives/2023/index.html",revision:"034388703fa872843b7db9c9de68fc3f"},{url:"archives/2023/page/2/index.html",revision:"2260311c89ed6a16e7a1992a451683f7"},{url:"archives/index.html",revision:"918f06f2820d407d958d13fd7fdb038f"},{url:"archives/page/2/index.html",revision:"2f6da0166cba18a1e4facbe4331a7809"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"a23b3f2a2541bc5fd951056630e91fff"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"7ca3bd3a4d1aa4b4db520c0ffa73ebb0"},{url:"css/music.css",revision:"fcaa1c5f7d8580588023cba3b46921d9"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"057aa5041a3b9b5c6431fa98bab7de7e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"35c07a9ecccb79afb440dd899e727eed"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"f2789401b1c51816a5fcbde5cd2a752b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/meting.js",revision:"e8c0d978bb0818d5ed54d6f8383e5c73"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/txmap.js",revision:"29ccf00a8f4483b4fb19329838a4eaaf"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"6ae4a3dfa2781931b38f818a9a43f0b2"},{url:"music/index.html",revision:"a8766ac5200424b5430b7da728d28c50"},{url:"page/2/index.html",revision:"bd5687320a166fb6e9dc36c462500d90"},{url:"posts/7nianji/index.html",revision:"b56eacfd9473becaa8dafebb6ac3b2d8"},{url:"posts/B13/index.html",revision:"71ca5c7146fecdb74a9b48bf6ff9ab8f"},{url:"posts/bashiboyi/index.html",revision:"949e174c06fc4d150f78c386b28281bb"},{url:"posts/hexo1/index.html",revision:"9f3099965ac05e211aa161223560ddc8"},{url:"posts/hexo2/index.html",revision:"4da4bd0433cde3476317a06eb7ce45ab"},{url:"posts/hexo3/index.html",revision:"f774fa2e2f65b878aec5653ab6c7fad5"},{url:"posts/hexo4/index.html",revision:"00b72151c1c1492cc6cbeaf8cfdd8a32"},{url:"posts/huoying/index.html",revision:"53abcbeac55596c21bf2eb1de0197c48"},{url:"posts/photoshop/index.html",revision:"277d594204c79b05eb13e5d106a733ba"},{url:"posts/year2022/index.html",revision:"fc742c95c8f901af2001c51243bbfc47"},{url:"posts/youqu/index.html",revision:"dd1e447e0a9bfff7288fe3fe4b900aff"},{url:"posts/yuming/index.html",revision:"e96b0439f6be3bdf8cd03151a60a05be"},{url:"posts/zhiqian/index.html",revision:"7f48df69e0587437f20af15e65e59e07"},{url:"posts/zhouji1/index.html",revision:"451f8b3ae784f9a542ea3f8c7dbc8d3c"},{url:"posts/zhouji2/index.html",revision:"43a2393e6035f3c71b4c0ebb46ab2f62"},{url:"posts/zhouji3/index.html",revision:"a8bb2c378ce9e5d64db2a8e7f6eb7938"},{url:"posts/zuowen1/index.html",revision:"e7738cf6cee910f4aa4be3701bd28716"},{url:"posts/zuowen2/index.html",revision:"faf099c9c550057ea7a39a2c72c9da9c"},{url:"reward/index.html",revision:"5594e62c80a4ae66b672a1942dd81f9e"},{url:"tags/butterfly/index.html",revision:"c13c3c1c1c8efe51afa78d7c232626eb"},{url:"tags/index.html",revision:"af608c2ec0ff9c7ed3775f2933ac9f94"},{url:"tags/photoshop/index.html",revision:"53e6c6df6973aae2b0c395148ba1edaf"},{url:"tags/周记/index.html",revision:"c2edd6e2616daf2af9c6601ae914b1d4"},{url:"tags/域名/index.html",revision:"db3983357d980ecd6ee6cb8903d4c8f5"},{url:"tags/好文/index.html",revision:"c012661072914a20d9198d3bcf329322"},{url:"tags/年度总结/index.html",revision:"1d22f530af839c13bf9eeca11d2b7cba"},{url:"tags/教程/index.html",revision:"9b9b4f7880f7fbc692ec310344738c72"},{url:"tags/数学/index.html",revision:"2519d5ebfb0033c784cf3c8427cbca4f"},{url:"tags/校园/index.html",revision:"0d1df63cc49db9114e1c230e59432cd6"},{url:"tags/火影/index.html",revision:"ac8e85f1beb24be233904008047a3f1a"},{url:"tags/白嫖/index.html",revision:"fce716c2a69e358edf0f2fe43b740d40"}],{})}));
//# sourceMappingURL=service-worker.js.map
