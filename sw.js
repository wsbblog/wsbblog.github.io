const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "wsbのblog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4625eb775767498b5dc8c85a977d40fe","url":"./about/index.html"},{"revision":"5507224cc911a982eea4c13c7d2cc9be","url":"./archives/2022/10/index.html"},{"revision":"345faa7c6634723ac19ca569ced540ae","url":"./archives/2022/11/index.html"},{"revision":"7a075e9df2a78ae8c27ff4482056f2b1","url":"./archives/2022/12/index.html"},{"revision":"e1f4ce0ece7f0e8b66b03b1ede4fec84","url":"./archives/2022/index.html"},{"revision":"225daf73e4c1aae74a86d00d3a6b5a41","url":"./archives/2023/01/index.html"},{"revision":"aba9f3bb62ee53b2bfc794b706b11bd2","url":"./archives/2023/index.html"},{"revision":"bae94621b7ffb6a02fde5d23f0e8cfe0","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"a7419144e3e29960b0ce7d1355081305","url":"./css/custom.css"},{"revision":"4550927e8be17c8d6dcf8fcecabbead0","url":"./css/font.css"},{"revision":"29f790eaa3e22339522c87ebb4166573","url":"./css/index.css"},{"revision":"991bc081a5353e6ed47822946225b80c","url":"./css/mycss.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9a1d372f9e1e25d8aa9026bec89cfa06","url":"./css/xinnian.css"},{"revision":"781b1ab052683c695f702dc372cc424c","url":"./fcircle/index.html"},{"revision":"abf685f6c87bb53f6c1a683fb376c61a","url":"./index.html"},{"revision":"ac5341fdcb5757d947af5b44539ce708","url":"./js/cointup.js"},{"revision":"75f08073b0452c3714f004b13d04d79e","url":"./js/console.js"},{"revision":"b9db5bcf1dcad8e2048892cd6bcf2f2b","url":"./js/custom.js"},{"revision":"36b59b593d09fcd5d2b727a5787cd3a0","url":"./js/emoji.js"},{"revision":"0780bded189a6c3e99875e04ad2c9deb","url":"./js/fps.js"},{"revision":"6747183d08145b472deeed70aa533a99","url":"./js/gulpflie.js"},{"revision":"73e1a92da3a39646678bffb9e7817148","url":"./js/main.js"},{"revision":"93ca7b011e56f146c4e5935c15bf73e0","url":"./js/reward.js"},{"revision":"308de383b932f321e04751fd1f79cffb","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"b5e16e22903fc8af0ccb1a589506daa0","url":"./js/xinnian.js"},{"revision":"ad8d67b1525d76945a22d94f9db38e3b","url":"./link/index.html"},{"revision":"5671d5482d9c2d2f678c1c10fd31a2cd","url":"./posts/4098.html"},{"revision":"7be3603649072efd5a4f8da7cee5a9ba","url":"./posts/53443.html"},{"revision":"13f41b14de0d209b8bec7947203b29a5","url":"./posts/hexo1.html"},{"revision":"811579c3bd9d397b75c0654904672002","url":"./posts/hexo2.html"},{"revision":"55ddc45db73abd5d48ed345f47fd133c","url":"./posts/hexo3.html"},{"revision":"3b18a98d2042d5e145bdbef037c1ecdd","url":"./posts/hexo4.html"},{"revision":"682557ec80839858d685fbc5b37ff9de","url":"./posts/photoshop.html"},{"revision":"3110153cb91798429a658bfa59cb8bfb","url":"./posts/year2022.html"},{"revision":"f067100191deb8ad6a4bc7f6bcdbb244","url":"./reward/index.html"},{"revision":"142d21bd6fa51bbf3bce63019c197cc7","url":"./service-worker.js"},{"revision":"f3ea8c4a7a52c1202946ef3186e6532d","url":"./tags/butterfly/index.html"},{"revision":"e0ea353102ddafdf21b8bbd744884659","url":"./tags/index.html"},{"revision":"fa9e7eebfaaf03f2b282794c16cb71fc","url":"./tags/photoshop/index.html"},{"revision":"eca5c1f8a7569207cc10798aea1db7ef","url":"./tags/周记/index.html"},{"revision":"9bc0b7f6eb10799fd9a1663efbb9f69d","url":"./tags/年度总结/index.html"},{"revision":"b61770e224f235f56a8707c9450ceb74","url":"./tags/教程/index.html"},{"revision":"ddb4d2a59d92abbc0b98de13f0abf6a4","url":"./tags/校园/index.html"},{"revision":"6d4ee2ca7a3e34e7b23c4e53ae217dd0","url":"./tags/白嫖/index.html"},{"revision":"a2207807f7bb5e593e7abede626f75a5","url":"./workbox-d249b2c8.js"}]);

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();