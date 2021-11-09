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

        <el-divider/>

        <h3>axios 其他配置</h3>
        <p>在实际使用中，我们还能还会对 axios 做一些定制化的操作，但同样，因为独立配置的原因，并不会应用全局配置。</p>
        <p>因此，提供一个 props 属性 <code>axiosOptions</code>，该属性会在生成组件内 axios 示例的时候生效。</p>
        <p>注意，他的优先级比 baseURL 的配置还高，例如如下写法，真实的 baseURL 是 <code>/abc</code>，而不是 <code>/api</code></p>
        <pre v-highlightjs><code class="javascript">{{ code3 }}</code></pre>

        <el-divider/>

        <h3>token 设置</h3>
        <p>token 一般被设置到请求头里。设置 token 有两种办法：</p>
        <p>第一种是在生成 axios 实例的时候，配到 headers 里，优点是配置简单，缺点是生成实例是在 Wti-Form 挂载的时候生成的，因此你必须更早的拿到 token 才行</p>
        <p>第二种是给 axios 配置请求拦截器。具体来说，组件提供了 axiosCallback 这个属性，组件里的 2 个 axios 实例，作为参数传入，然后就可以进行二次配置了。</p>
        <p>这里提供两个示例：第一个是在 headers 里手动写是一个 token 值。第二个是通过请求拦截器动态获取 token 并写到 header 里</p>

        <wti-form ref="form"
                  :axios-options="axiosOptions"
                  :axios-callback="axiosCallback"
                  :fields="fields"/>
        <div class="submit-line">
            <span>请输入动态 token：</span>
            <el-input v-model="token" style="width:200px"/>
            <span class="tips">请执行输入搜索后，在 network 的请求头查看结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code4 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <p>
            注：axiosCallback(axios, specialAxios) 的参数有 2 个，第一个是标准 axios 实例。第二个参数当 enableBaseURLForOthers 为 false
            的时候，将是只会在【输入搜索下拉框】【多级联动下拉框】等使用一个特殊的 axios 实例
        </p>
        <p>默认情况下，只需要对第一个参数进行操作即可（即如示例代码）</p>
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
},`,
                fields: [
                    {
                        label: '工具',
                        children: [
                            {
                                autoCompleteKeys: [],
                                searchUrl: '/autocomplete',
                                searchKey: 'search',
                                mainShowKey: 'search',
                                key: 'code',
                                label: '输入搜索',
                                placeholder: '请输入',
                                type: 'auto-complete-input',
                            },
                        ]
                    }
                ],
                axiosOptions: {
                    headers: {
                        tokenA: 'tokenA'
                    }
                },
                token: 'aaa',

                code4: `<wti-form ref="form"
                :axios-options="axiosOptions"
                :axios-callback="axiosCallback"
                :fields="fields"/>
——————————
fields: [
    {
        label: '工具',
        children: [
            {
                autoCompleteKeys: [],
                searchUrl: '/autocomplete',
                searchKey: 'search',
                mainShowKey: 'search',
                key: 'code',
                label: '输入搜索',
                placeholder: '请输入',
                type: 'auto-complete-input',
            },
        ]
    }
],
axiosOptions: {
    headers: {
        tokenA: 'tokenA'
    }
},
token: 'aaa',
——————————
methods: {
    axiosCallback (axios) {
        axios.interceptors.request.use(config => {
            config.headers.tokenB = this.token;
            return config;
        });
    }
}`
            };
        },
        methods: {
            axiosCallback (axios) {
                axios.interceptors.request.use(config => {
                    config.headers.tokenB = this.token;
                    return config;
                });
            }
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

</style>
