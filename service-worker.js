if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const f=e=>s(e,d),n={module:{uri:d},exports:r,require:f};i[d]=Promise.all(a.map((e=>n[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"011ac02a03c72feb36b62ac5d0ad8c3a"},{url:"archives/2022/10/index.html",revision:"30f0aef68a92ca1cbb080cc4be069977"},{url:"archives/2022/11/index.html",revision:"c09b79fbee3918fbf60d792c8c28f8c7"},{url:"archives/2022/12/index.html",revision:"0f606d1df9f22311cb75ee4a6626e0a7"},{url:"archives/2022/index.html",revision:"c9368db13879f8c43276ff7dfffe5953"},{url:"archives/2023/01/index.html",revision:"114e41478943f5624e194198fca2b1d6"},{url:"archives/2023/02/index.html",revision:"1c620aa6fd49040a7436c7f29873c8f0"},{url:"archives/2023/03/index.html",revision:"6d8c4caef344a987e444f2bb415e8788"},{url:"archives/2023/05/index.html",revision:"76b999a5765d259942bf301908ec1b9a"},{url:"archives/2023/07/index.html",revision:"5310f8a8f0ebc38d10a858cd5b9950fc"},{url:"archives/2023/index.html",revision:"1a785960729b3b90f829d5aa4eaaded1"},{url:"archives/2023/page/2/index.html",revision:"488bd69013038e9cb24afc99f319ee7a"},{url:"archives/index.html",revision:"fc677848e4f67febad778acdcd35c9c9"},{url:"archives/page/2/index.html",revision:"8a94e84057de84fe001c7aaeadd15168"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"a23b3f2a2541bc5fd951056630e91fff"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"7ca3bd3a4d1aa4b4db520c0ffa73ebb0"},{url:"css/music.css",revision:"fcaa1c5f7d8580588023cba3b46921d9"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"66357f6be7d7a494b7429906c1741788"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"2abde98fc1649936bdb62ea9ab3c58f8"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"f2789401b1c51816a5fcbde5cd2a752b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/meting.js",revision:"e8c0d978bb0818d5ed54d6f8383e5c73"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/txmap.js",revision:"29ccf00a8f4483b4fb19329838a4eaaf"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"0f140b8d6c8ffd9c81f79253c304f21c"},{url:"music/index.html",revision:"f369d1d6eb24e3e6ec46aabe27df6c87"},{url:"page/2/index.html",revision:"7cc089ce7e719df82185b716cc0a1f0f"},{url:"posts/7nianji/index.html",revision:"16e3879057fa0bae6c688c2ff22e3a3d"},{url:"posts/B13/index.html",revision:"870b7016096453d021bf65a16c7b6048"},{url:"posts/bashiboyi/index.html",revision:"152b81a1d589419a881d2c8021fecb19"},{url:"posts/hexo1/index.html",revision:"0b92a422c960000a07b7ac47dd3300d7"},{url:"posts/hexo2/index.html",revision:"0a5a8eef10131a002d35512d1bfc9b21"},{url:"posts/hexo3/index.html",revision:"3e03d84d64aa6cf17dca96dbd922e37c"},{url:"posts/hexo4/index.html",revision:"6134a6efa52912d15b95d5bf9bb4a14d"},{url:"posts/huoying/index.html",revision:"1673a44719632bc47a040f3b2ab58b45"},{url:"posts/photoshop/index.html",revision:"8de9cc8c3b8eecb8edf6ee73bf3e6383"},{url:"posts/year2022/index.html",revision:"bf50cf6ff671869eb78f3364a2970a70"},{url:"posts/youqu/index.html",revision:"9a2ab6b2607da4cc1d94a4aa4d90bc18"},{url:"posts/yuming/index.html",revision:"ec2fc9ea30248f4f234d406a98393ed4"},{url:"posts/zhiqian/index.html",revision:"a965c049b34144ac6273eae5de585457"},{url:"posts/zhouji1/index.html",revision:"4e938854133b847100fce8a7f887b2c9"},{url:"posts/zhouji2/index.html",revision:"a0b4753a342e16d05ae4dd8435db9348"},{url:"posts/zhouji3/index.html",revision:"2ba210fb6874e22cb3fe33c006b78fa0"},{url:"posts/zuowen1/index.html",revision:"e88baabb7674c5796f0a6751199df16a"},{url:"posts/zuowen2/index.html",revision:"e9aee053f136aa5b562d895b008938cc"},{url:"reward/index.html",revision:"5fb564fcd9d29a142eaacc9414a75af1"},{url:"tags/butterfly/index.html",revision:"4eb7f4b01bb16a7b842be5d0445ccd48"},{url:"tags/index.html",revision:"40bb2c4ce7b66aa65ae1f508a3dcc02a"},{url:"tags/photoshop/index.html",revision:"4ab93ec114a0762b6b79dd95fbbf3685"},{url:"tags/周记/index.html",revision:"726b18646b3d353077982d211c446606"},{url:"tags/域名/index.html",revision:"74b9f24a359c100c37c6678db02c23ab"},{url:"tags/好文/index.html",revision:"e587a048a68d91c452805e5b70ea9dd6"},{url:"tags/年度总结/index.html",revision:"5e89d754774459fe18a69249a80b0c2c"},{url:"tags/教程/index.html",revision:"12b9cb6637af5f533f32ec4eb74a667e"},{url:"tags/数学/index.html",revision:"0a8a147fdd0148e684ca571e1ec4e0fc"},{url:"tags/校园/index.html",revision:"8f13677803a375290472dae0f370b574"},{url:"tags/火影/index.html",revision:"be2f933e7b586cd1cfc22d3a8f1c67c3"},{url:"tags/白嫖/index.html",revision:"71aa6c43baf8b18392e94695cdaec50c"}],{})}));
//# sourceMappingURL=service-worker.js.map
