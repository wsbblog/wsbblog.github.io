if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>s(e,r),n={module:{uri:r},exports:a,require:f};i[r]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"5be791347ffadbab386de5983ff26fb4"},{url:"archives/2022/10/index.html",revision:"0ebada8680aceb872eb7f2c8adfd648c"},{url:"archives/2022/11/index.html",revision:"cfc2d141be384b72df43734c85fae16e"},{url:"archives/2022/12/index.html",revision:"119af35ca0cab6593fc093cd771a88a6"},{url:"archives/2022/index.html",revision:"1a4ae1abdb78d8621e5e9700054e1b90"},{url:"archives/2023/01/index.html",revision:"8442aa1200a510a0c7666fa7466bf814"},{url:"archives/2023/02/index.html",revision:"98589ce60d0419d8c6217ab7de312230"},{url:"archives/2023/03/index.html",revision:"840457607aa8f281989f0a3c51f1c217"},{url:"archives/2023/index.html",revision:"530686ce5fde6ba4de44d74472fcc2d9"},{url:"archives/index.html",revision:"51b97d46e9000054faaf6ea0c502d062"},{url:"archives/page/2/index.html",revision:"3539858af69b23063e8fa8c0654c70b5"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/custom.css",revision:"824ff87d02ef35669af58c681e3c72e6"},{url:"css/font.css",revision:"5a0365bbc1f676ad7e4a1ac8bac9062d"},{url:"css/index.css",revision:"30fd0ef155e00d7356d49ba6d5f74571"},{url:"css/mycss.css",revision:"991bc081a5353e6ed47822946225b80c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/xinnian.css",revision:"9a1d372f9e1e25d8aa9026bec89cfa06"},{url:"fcircle/index.html",revision:"5dc38f4655b7827f3dc5a1e9597bee2e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wsb.webp",revision:"a0a5829d423e61be2b389efe96e40da5"},{url:"index.html",revision:"388949e4e1e2f2c5f25c711db2842b79"},{url:"js/cointup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/console.js",revision:"75f08073b0452c3714f004b13d04d79e"},{url:"js/custom.js",revision:"b9db5bcf1dcad8e2048892cd6bcf2f2b"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/footer.js",revision:"f22fd87911129919c1bcc21d959310be"},{url:"js/fps.js",revision:"0780bded189a6c3e99875e04ad2c9deb"},{url:"js/gulpflie.js",revision:"6747183d08145b472deeed70aa533a99"},{url:"js/main.js",revision:"ed11423939c5b633ed7bcbd18d67ff53"},{url:"js/meting.js",revision:"ed2f534c93ff2e20943d5efc4e8dc1e9"},{url:"js/music.js",revision:"68fefaf5aa2dd74a0de905f73fc2a7b7"},{url:"js/nav.js",revision:"2900856ad3783cd6dfab312aeafab756"},{url:"js/reward.js",revision:"93ca7b011e56f146c4e5935c15bf73e0"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"bbe99c7714cefb86bfc5c1dac694baa2"},{url:"music/index.html",revision:"69fe785b421fa1fbf53647dd707ea20c"},{url:"page/2/index.html",revision:"19b53f4f8ca88e130eec6d288a58bd9b"},{url:"posts/B13/index.html",revision:"47663a2797e4fb07261cdb2aea615fdc"},{url:"posts/bashiboyi/index.html",revision:"044debd4e18e950262db48f769bdce62"},{url:"posts/hexo1/index.html",revision:"845a5c689caea63fe09d2cbf385f7736"},{url:"posts/hexo2/index.html",revision:"4680eedafa341a629edce6f259f5ec98"},{url:"posts/hexo3/index.html",revision:"02db96e85b637035db81fad74d51b510"},{url:"posts/hexo4/index.html",revision:"e1c688ca6496dd4d15cf5db3f805b563"},{url:"posts/photoshop/index.html",revision:"6dba9d134df132730255004e39dc3786"},{url:"posts/year2022/index.html",revision:"1997a0d4924533990d8f22dfceb2c074"},{url:"posts/yuming/index.html",revision:"d49354d9577b44b83afc2dc9b02a7259"},{url:"posts/zhiqian/index.html",revision:"7029004caf35c36ebbcc273e967902e6"},{url:"posts/zhouji1/index.html",revision:"f619765eb8b3ee402fa5bb2ddc4e3392"},{url:"posts/zhouji2/index.html",revision:"7557dcf57410c1bbf991ccbc75d620da"},{url:"posts/zhouji3/index.html",revision:"b8dc74080a602eca4d563568c31aec38"},{url:"posts/zuowen1/index.html",revision:"0640597fc1cd5938de0cf9adfd096db2"},{url:"posts/zuowen2/index.html",revision:"a87af6f08cfb92b1829b0d5f88c736ba"},{url:"qingchun/index.html",revision:"0de467eef471ba80edd423191a74bd47"},{url:"reward/index.html",revision:"7dc6f58ad8b7d226dec7a55adab546ee"},{url:"shuoshuo/index.html",revision:"300c399265e93ebebcca7dcdf56ca1c1"},{url:"tags/butterfly/index.html",revision:"4483bb2df9f79596ff0d69aa5ef66a8c"},{url:"tags/index.html",revision:"39be0b5f398d2504c958c2d8fa1d7925"},{url:"tags/photoshop/index.html",revision:"2e573fa1682781fbdb1bb9bf4d7d1013"},{url:"tags/周记/index.html",revision:"33fb36ff171f29538271bbc392877956"},{url:"tags/域名/index.html",revision:"5324496768836e17c6a6ccebe28caf3b"},{url:"tags/年度总结/index.html",revision:"da40a8d641580179097ecc558f4f4b38"},{url:"tags/教程/index.html",revision:"4c00225420aeddcf1168712223e34edc"},{url:"tags/数学/index.html",revision:"566415c31e65c61671fc84284ebe74fe"},{url:"tags/校园/index.html",revision:"3404f4b8de1ad70a73781191bb337b45"},{url:"tags/白嫖/index.html",revision:"25eced3cde0cd639dcf5651c14d67741"}],{})}));
//# sourceMappingURL=service-worker.js.map
