<template>
    <div class="formitem-box">
        <h2>Axios 配置</h2>
        <p>表单内组件自带 axios 配置，但因为通过 npm 安装的组件，并不会共享工程本身的 axios 配置。</p>
        <p>为了方便管理异步请求，因此添加额外配置进行管理</p>

        <h3>baseURL</h3>
        <p>为了方便本地代理转发、线上转发，我们通常会对 axios 配置 baseURL。但由于本组件是通过 npm 引入的，因此默认情况下不会共享全局 axios 的配置</p>
        <p>为了方便使用，因此，将 baseURL 抽出来，通过 props 传入组件，或者在初始化组件的时候进行配置。</p>
        <p>具体配置方法参考如下（示例：初始化时和 <code>dynamicSelectOption</code> 一起配置）：</p>

        <pre v-highlightjs><code class="javascript">{{ code1 }}</code></pre>

        <p>补充：如果使用的 baseURL 在不同环境下取值不一样，那么也可以单独配置 baseURL 的值，然后在这里引用配置好的 baseURL 变量。</p>

        <pre v-highlightjs><code class="javascript">{{ code2 }}</code></pre>

        <h3>axios 其他配置：</h3>
        <p>在实际使用中，我们还能还会对 axios 做一些定制化的操作，但同样，因为独立配置的原因，并不会应用全局配置。</p>
        <p>因此，提供一个 props 属性 <code>axiosOptions</code>，该属性会在生成组件内 axios 示例的时候生效。</p>
        <p>注意，他的优先级比 baseURL 的配置还高，例如如下写法，真实的 baseURL 是 <code>/abc</code>，而不是 <code>/api</code></p>
        <pre v-highlightjs><code class="javascript">{{ code3 }}</code></pre>
    </div>
</template>

<script>
    export default {
        name: 'ChildForm',
        data () {
            return {
                code1: `const props = {
    // 基础 url，一般是指 axios 用的 baseURL
    // 由于组件并不能默认使用 axios 的 baseURL，所以如果有需要，这里要特殊设置
    baseURL: {
        type: String,
        default: '/api',
    },
    dynamicSelectOption: {
        // ... 略
    }
};
Vue.use(WtiForm, props);`,

                code2: `// config/env.js
const isProd = process.env.NODE_ENV !== 'development';

if (!isProd) { // 开发环境
    baseURL = '/api';
} else { // 生产环境
    baseURL = '/wtiformdemo';
}

export {
    baseURL
};

// main.js
import {baseURL} from '@/config/env.js';
const props = {
    // 基础 url，一般是指 axios 用的 baseURL
    // 由于组件并不能默认使用 axios 的 baseURL，所以如果有需要，这里要特殊设置
    baseURL: {
        type: String,
        default: baseURL,
    },
    dynamicSelectOption: {
        // ... 略
    }
};
Vue.use(WtiForm, props);`,

                code3: `baseURL: {
    type: String,
    default: '/api',
},
axiosOptions: {
    type: Object,
    default: () => ({
        baseURL: '/abc'
    })
},`
            };
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

</style>
