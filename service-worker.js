if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const f=e=>s(e,a),n={module:{uri:a},exports:c,require:f};i[a]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"57997c578ea9573cc4c65021a2b74a67"},{url:"archives/2022/10/index.html",revision:"2d7879b3f9b48a97a14a10a6f27a314a"},{url:"archives/2022/11/index.html",revision:"4d066327cb3710058f9575eff8d224d0"},{url:"archives/2022/12/index.html",revision:"a18d4a05e094c6c05e6c6b140aa13a57"},{url:"archives/2022/index.html",revision:"183af970a5337bcf23abedb1c3042828"},{url:"archives/2023/01/index.html",revision:"7d9876eec2e540077cbe80c63e3f04aa"},{url:"archives/2023/02/index.html",revision:"05436a9f80058d0bce4fdda3fae65780"},{url:"archives/2023/index.html",revision:"1f0a49a7e64a904fb120ed3be29e57bb"},{url:"archives/index.html",revision:"fbc8b99575ff40cb1c07749d7b42f48c"},{url:"archives/page/2/index.html",revision:"ce825478916c679fafb8e3b71ed975ff"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"3fb9d6279693e4634acd05505e810d61"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"30fd0ef155e00d7356d49ba6d5f74571"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"28d7623b73d46e47dc021398ff0db351"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"7e059f37711da48c9985e6a377c85da2"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"b9db5bcf1dcad8e2048892cd6bcf2f2b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"d71d7c940e6ca6dad12f06bdcd789f07"},{url:"music/index.html",revision:"e65e65de8c90682ae05f889a3c13bef9"},{url:"page/2/index.html",revision:"19016db7ce081db855a4a8e1546f3fd2"},{url:"posts/bashiboyi/index.html",revision:"960c6bedbbbc4460fe850b722c686fde"},{url:"posts/hexo1/index.html",revision:"3529983a1ec8a92dfc4f5dc14fd0c854"},{url:"posts/hexo2/index.html",revision:"ff2d318bfee9192e3def4c07bd975c28"},{url:"posts/hexo3/index.html",revision:"72672b234587fa68028722caed5ebd20"},{url:"posts/hexo4/index.html",revision:"cea6cd6ec9f7ddd75d5850b60024409f"},{url:"posts/photoshop/index.html",revision:"227d2d1d4e8a2add51d9438119305a63"},{url:"posts/year2022/index.html",revision:"e5653cd891349bdbb3841162ab7c57f6"},{url:"posts/yuming/index.html",revision:"65c13f0bdbed5f6489749cb191424afe"},{url:"posts/zhiqian/index.html",revision:"18ac6ab2c66a0dd3ec192179678ffdfb"},{url:"posts/zhouji1/index.html",revision:"68d35728ee08ca38d69e53dbfb50897b"},{url:"posts/zhouji2/index.html",revision:"57024b5111e338a8a0dbe09d0977d036"},{url:"posts/zhouji3/index.html",revision:"d8188161e6aaa125618fdbd99c412b6e"},{url:"posts/zuowen/index.html",revision:"2faae059e46eaee7463f7a923367ef19"},{url:"reward/index.html",revision:"95763db92784d7e9a3fe52ab6e144147"},{url:"tags/butterfly/index.html",revision:"a018e0b1e547e2b2a7e03d8aece5d99a"},{url:"tags/index.html",revision:"7fc70e084027bccc6660bb8b90b0e881"},{url:"tags/photoshop/index.html",revision:"50571b9920d7b51eff1e97e418e38898"},{url:"tags/周记/index.html",revision:"3e150b69491e8c140dfec30bded806d1"},{url:"tags/域名/index.html",revision:"1c8323f2555706925f04483fdc089123"},{url:"tags/年度总结/index.html",revision:"4699550f63a4a21167fa7797e50685f4"},{url:"tags/教程/index.html",revision:"eaed923447b4949510a6b51332412946"},{url:"tags/数学/index.html",revision:"12a79ff67435c5b5459aa191e383d4b5"},{url:"tags/校园/index.html",revision:"3f8b0e8a455a370f3bbea352cf898126"},{url:"tags/白嫖/index.html",revision:"fa9021ac832df541bbc0d2a6501d2b34"}],{})}));
//# sourceMappingURL=service-worker.js.map
