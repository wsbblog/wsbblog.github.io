if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const f=e=>s(e,a),n={module:{uri:a},exports:r,require:f};i[a]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"f2950ba744795c5debe2df8c7dd08e87"},{url:"archives/2022/10/index.html",revision:"cca49e3d8b50b1e4a2ac9738731bac32"},{url:"archives/2022/11/index.html",revision:"38f8fce3caa7efbf6f642b3dd1ce9ffe"},{url:"archives/2022/12/index.html",revision:"0ba7c685949940f708c96ffe656dfe12"},{url:"archives/2022/index.html",revision:"56f580721843226aa7f4b333b0f043e3"},{url:"archives/2023/01/index.html",revision:"3ca681f90a954f971b86f3717d8e918c"},{url:"archives/2023/02/index.html",revision:"17833d57abb5f2ff241c0cb254484f22"},{url:"archives/2023/03/index.html",revision:"5a74b2f9eac76211f21462766975d0e3"},{url:"archives/2023/05/index.html",revision:"7f9fe8ecb727cf2d290fe2be86d301c7"},{url:"archives/2023/07/index.html",revision:"c4ee2719b32c491e52d16d9e9a6ac86d"},{url:"archives/2023/index.html",revision:"c9abfa008b501312b54210e95cbac7a7"},{url:"archives/2023/page/2/index.html",revision:"09ea5c568da355da855e5f5613b7a6fa"},{url:"archives/index.html",revision:"e00941f5d5b5d0b7f56330c7ba32f552"},{url:"archives/page/2/index.html",revision:"d60959e67c0eea3b6b3e0706977bc988"},{url:"css/custom.css",revision:"2868997efe5105960a655f7c801b3212"},{url:"css/font.css",revision:"6839f50d67ac0c17fc55a912a4f1c456"},{url:"css/index.css",revision:"e3376857c1489675b03e9ec9cebc79de"},{url:"css/music.css",revision:"fcaa1c5f7d8580588023cba3b46921d9"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"f93d512bcdaf73222a8a6a2554b61311"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"4c6bf3a7b5610f66d2a08db6e60b8ca7"},{url:"js/anzhiyu.js",revision:"94e238521517f2ccb2f6208fc85dc830"},{url:"js/anzhiyufunction.js",revision:"8ce6973ddd3c9c9aa42a5e232da7e5f3"},{url:"js/anzhiyuOnlyOne.js",revision:"e6287676ec0f13b92ed8ac6370103583"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"f2789401b1c51816a5fcbde5cd2a752b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/meting.js",revision:"653310cfd91dbcbafd78cfbbc44b06b7"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tianligpt.js",revision:"df529c49e4d7395909538590ab20e29c"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/txmap.js",revision:"1d81b2720e4de821e0d13eea2c6a9693"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"8c0fbae9cfbd0b3e1fdcef2c908458f5"},{url:"music/index.html",revision:"3202c6b05c5f29a25e7a11ddf010fc92"},{url:"page/2/index.html",revision:"e5f470f17cd686f2e345dc23a4ae06e2"},{url:"posts/7nianji/index.html",revision:"4414b67e987d1194dd1814c9b898919d"},{url:"posts/B13/index.html",revision:"4bdadff0057c77227449f99452893880"},{url:"posts/bashiboyi/index.html",revision:"bb9a88e282c62743eeb0d9a17418a121"},{url:"posts/hexo1/index.html",revision:"acc7807043f6647f61f071846f463f0f"},{url:"posts/hexo2/index.html",revision:"eb3d8c2ac7244807b9abfaf58463cf39"},{url:"posts/hexo3/index.html",revision:"beef20631e0d8c4a08bf17451626e61b"},{url:"posts/hexo4/index.html",revision:"1930a6c4d7896f3532af4a40d630d266"},{url:"posts/huoying/index.html",revision:"d175c8bfd51d1943164b7deeb0a7325d"},{url:"posts/photoshop/index.html",revision:"ce231e37c0e0a070fbbe98e34b7cf8d8"},{url:"posts/year2022/index.html",revision:"a1330ca1cdd9a27301bdfeeda5c25a7a"},{url:"posts/youqu/index.html",revision:"bbcde4d2f8d1795ff6db13e11d92a93a"},{url:"posts/yuming/index.html",revision:"9585fa470ed9c702522b05cf7a5b7333"},{url:"posts/zhiqian/index.html",revision:"89003158207596eb928c70e6879de5a3"},{url:"posts/zhouji1/index.html",revision:"178f145b9df4bf5eb85cee74599a7bf7"},{url:"posts/zhouji2/index.html",revision:"35e21a1db904225ee451610d99685346"},{url:"posts/zhouji3/index.html",revision:"1ee633edba770162fe51b4580502084b"},{url:"posts/zuowen1/index.html",revision:"5a79857c6967a3a77047401dcc539eb7"},{url:"posts/zuowen2/index.html",revision:"f906444eb16822a204b869a4979ca648"},{url:"reward/index.html",revision:"b3573761da93c33b68200a6a23cf0db4"},{url:"tags/butterfly/index.html",revision:"38b42faf61478005375a9bea9495b730"},{url:"tags/index.html",revision:"703ec7d5b8a31e197faecd98112135b9"},{url:"tags/photoshop/index.html",revision:"0777bccc5566c6baa76d5cb1956eb733"},{url:"tags/周记/index.html",revision:"855d2dd802fda7945372998391f64131"},{url:"tags/域名/index.html",revision:"f1d4b92e3079ff564cff133b4c7a81f7"},{url:"tags/好文/index.html",revision:"0cd8995d6eb8f9de9a5d6f45fcb11200"},{url:"tags/年度总结/index.html",revision:"b26e2497589cb5d44fbb984f2a9ad6c2"},{url:"tags/教程/index.html",revision:"6bb8af3d9daf2f7ecca8e309a374a475"},{url:"tags/数学/index.html",revision:"d8036592546a03fb63bacf4c9bcc23a2"},{url:"tags/校园/index.html",revision:"6770de8291ea698a50612900559727be"},{url:"tags/火影/index.html",revision:"ba3d0238793e91a8d3615b57fb1f8a66"},{url:"tags/白嫖/index.html",revision:"2700d647165eee6c93cf5f9722b6d20e"}],{})}));
//# sourceMappingURL=service-worker.js.map
