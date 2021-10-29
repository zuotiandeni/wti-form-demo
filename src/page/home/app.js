/**
 * Created by 王冬 on 2019-09-05.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 * 1、作为示例提供参考
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import CommonUtils from '@/common/js/pre_setting.js';
import router from './router';
// import './theme_wti.less';

// 浏览器的title（就是显示在tag标签的本页面名字）
const TITLE = 'WtiForm说明文档';

CommonUtils.setTitle(TITLE);
CommonUtils.init();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});


function getExplore () {
    const Sys = {};
    const ua = navigator.userAgent.toLowerCase();
    let s;

    // eslint-disable-next-line
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
            (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                    (s = ua.match(/(?:opera|opr).([\d.]+)/)) ? Sys.opera = s[1] :
                        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                            (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    // 根据关系进行判断
    if (Sys.ie) {
        return ('IE: ' + Sys.ie);
    }
    if (Sys.edge) {
        return ('EDGE: ' + Sys.edge);
    }
    if (Sys.firefox) {
        return ('Firefox: ' + Sys.firefox);
    }
    if (Sys.chrome) {
        return ('Chrome: ' + Sys.chrome);
    }
    if (Sys.opera) {
        return ('Opera: ' + Sys.opera);
    }
    if (Sys.safari) {
        return ('Safari: ' + Sys.safari);
    }
    return 'Unkonwn';
}

const getEnv = () => {
    let env;
    if ([ 'localhost', '127.0.0.1' ].indexOf(window.location.hostname) > -1) {
        env = 'local';
    } else {
        env = window.location.hostname.slice(0, 10);
    }
    return env;
};

function sendUV () {
    const agent = getExplore();
    const img = document.createElement('img');
    const uuid = 'uuid';
    const env = getEnv();
    img.src = `http://data.lovelovewall.com/api/useragent?uuid=${uuid}&agent=${agent}&status=visit&env=${env}`;
}

sendUV();
