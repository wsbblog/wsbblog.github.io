let newYearTimer = null;
var newYear = () => {
    clearTimeout(newYearTimer);
    if (!document.querySelector('#newYear')) return;
    // 新年时间戳 and 星期对象
    let newYear = new Date('2023-01-22 00:00:00').getTime() / 1000,
        week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

    time();

    // 补零函数
    function nol(h) { return h > 9 ? h : '0' + h; };

    function time() {
        // 现在 时间对象
        let now = new Date();

        // 右下角 今天
        document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

        // 现在与新年相差秒数
        let second = newYear - Math.round(now.getTime() / 1000);

        // 小于0则表示已经过年
        if (second < 0) {
            document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
            document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</p>';
        } else {
            // 大于0则还未过年
            document.querySelector('#newYear .title').innerHTML = '距离2023年春节：'

            // 大于一天倒计时
            if (second > 86400) {
                let d = nol(parseInt(second / 86000));
                second %= 86000
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${d}天${h}时${m}分${s}秒</span></spa0on>`;
                // 计时
                newYearTimer = setTimeout(time, 1000);
            }
        }
    }

    // 元宝飘落
    jQuery(document).ready(function($) {
        $('#newYear').wpSuperSnow({
            flakes: ['https://preview.cloud.189.cn/image/imageAction?param=26B7ABBA5C23D336F25F52546A4E4CA63E03D5A4C4FD2E68B6C86DE0847E9B3E68B45B916D7BD0268A195A85ACBE38CE1678F6F8C154343E04C8CE1C972139FA3370281A8EDFD212188C563B5645F5C564B390C1E4B1AE122BDD84BD83374D477590B69E442B6F7ADD6EE38EE890515449144912', 'https://preview.cloud.189.cn/image/imageAction?param=AD908B6BD418FD91218406573771B21AE9E48F402C67E6F8FE8D67347249400838C0D609A19EAB768073CC5154A0557EF6695ACC0EEC0FE2B1F5365F2B1D0ED228F03E30C3FC826D5B12419A2BAFC0F2EBC08494B81FD5E3E4AA3667E4B43654A604AC96703CF2FFAC1267C518E42E85CF6C60A9', 'https://preview.cloud.189.cn/image/imageAction?param=508F94DCF7439562501D6C6F4FEDBD99DAD4500D72474CBAAEBD8D0F1689FC4D1638365EA92BEF279C7804926DF563912F9B446D9E2CCF2E661872F518495DAEB71512D694E053EA49EBE6F012A8451EDF599930DB842C5E55E540085696D31BFFC685BB7A031B1D27ABE55DDF3C745062F9630E', 'https://preview.cloud.189.cn/image/imageAction?param=AF908B0FB449C95D359AF62DE6D3D27178B2A7E97BCC17D4F64C1F45E75B81F94099BC3D18F5DCC77888D8162DA83698EE8B1CA440E235D1B7CF3F8F997289E6919BCEA042F003780CECB6ED41DADA67E2F42035B6F76D6D91F8F00A186E84DE2772773CC8789892CDEAEB8204BA4ADFA7D61B11'],
            totalFlakes: '100',
            zIndex: '999999',
            maxSize: '30',
            maxDuration: '20',
            useFlakeTrans: false
        });
    });
}
newYear();