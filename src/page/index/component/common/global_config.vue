<template>
    <div>
        <h2>全局通用配置</h2>
        <p>全局性配置，特指一些会影响大量表单组件的配置。通常都在 globalConfig 这个对象里通过 key-value 进行配置</p>
        <p>而全局性配置，通常还可以在配置表单项时，也可以进行个性化配置。并且表单组件本身会默认有一个配置</p>
        <p>假设三个都存在并且可能不同时，那么某一个表单组件其具体使用哪个配置的优先逻辑是：【表单项个性化配置】>【全局性配置】>【表单组件默认配置】</p>


        <h3>配置方法</h3>
        <p>通常可以有两种方法来配置。</p>
        <p>第一种是在引入 WtiForm 组件的时候，通过 Vue.use(WtiForm, props) 中的 props 属性来配置，props属性是一个对象。参考代码如下：</p>
        <pre v-highlightjs><code class="javascript">{{ demoCode1 }}</code></pre>
        <p>第二种是在使用 WtiForm 组件的时候，在 Vue 的 template 里使用。示例代码如下</p>
        <pre v-highlightjs><code class="javascript">{{ demoCode2 }}</code></pre>
        <p>更详细的示例可以参考下面第一个例子</p>

        <h3>输入框可清除 clearable</h3>
        <p>
            当全局配置了 globalConfig.clearable 属性为 true 时，默认输入框、下拉框等表单组件，在有值的情况下，末尾会出现一个 <i class="el-icon-circle-close"></i>
            符号，点击后可以清除内容
        </p>
        <wti-form :fields="fields1"
                  ref="form1"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code1 }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'GlobalConfig',
        data () {
            return {
                demoCode1: `const props = {
// 全局属性配置
globalConfig: {
    type: Object,
    default: () => {
        return {
            clearable: false
        };
    }
},
Vue.use(WtiForm, props)`,
                demoCode2: `<wti-form :fields="fields1"
                  :global-config="props"
                  ref="form1"/>`,

                fields1: [
                    {
                        label: '用户信息登记',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '普通输入框'
                            },
                            {
                                options: [
                                    {
                                        value: '自由职业者',
                                        label: '自由职业者'
                                    },
                                    {
                                        value: '体制内',
                                        label: '体制内'
                                    },
                                    {
                                        value: '打工人',
                                        label: '打工人'
                                    },
                                    {
                                        value: '其他',
                                        label: '其他'
                                    },
                                ],
                                key: 'job',
                                label: '普通下拉框',
                                placeholder: '请选择',
                                type: 'normal-select',
                            },
                            {
                                key: 'money',
                                type: 'money-input',
                                label: '金钱输入框',
                                append: '元',
                            },
                            {
                                autoCompleteKeys: [],
                                searchUrl: '/autocomplete',
                                searchKey: 'search',
                                mainShowKey: 'search',
                                key: 'code',
                                label: '输入搜索下拉框',
                                placeholder: '请输入',
                                type: 'auto-complete-input',
                            },
                            {
                                key: 'reg_date',
                                label: '日期输入框',
                                placeholder: '请输入',
                                type: 'date-input'
                            },
                            {
                                key: 'timearea',
                                label: '日期范围输入框',
                                placeholder: '请输入',
                                type: 'date-range-input'
                            },
                            {
                                key: 'notice_time',
                                label: '时分输入框',
                                type: 'hour-minute-input',
                            },
                            {
                                key: 'normal_number',
                                type: 'normal-number',
                                label: '普通数字输入框',
                            },
                            {
                                key: 'number_limit',
                                type: 'number-input',
                                label: '千分位数字输入框',
                                append: '元'
                            },
                            {
                                key: 'dict_code',
                                type: 'dynamic-select',
                                label: '字典下拉框',
                                parentKey: '101',
                            },
                            {
                                key: 'dict_code',
                                type: 'dynamic-select-multiple',
                                label: '字典多选下拉框',
                                parentKey: '100'
                            },
                            {
                                key: 'rate',
                                type: 'rate-input',
                                label: '存款利率',
                            },
                            {
                                key: 'area',
                                type: 'mul-linkage',
                                label: '三级联动下拉框，',
                                linkLevel: 3,
                                firstParentKey: '100'
                            },
                            {
                                key: 'address',
                                type: 'textarea',
                                label: '详细地址',
                                span: 24
                            },
                            {
                                key: 'IDCard',
                                type: 'id-card-date',
                                label: '我是 label',
                            },
                            {
                                // key
                                key: 'testInput',
                                // 小型表单
                                type: 'child-form',
                                // 是否允许删除单个子表单，默认 true（允许）（未完成）
                                deleteEnable: true,
                                // 是否允许新增单个子表单，默认 true（允许）（未完成）
                                addEnable: true,
                                // 每个小表单头的文字部分，以及新增按钮的部分
                                headerLabel: '人员信息',
                                // 里面是表单的每一项，写法和外面的没区别
                                childrenForm: [
                                    {
                                        key: 'dict_code',
                                        type: 'dynamic-select',
                                        label: '这是一个字典下拉框（想不出来用处了）',
                                        parentKey: '101'
                                    },
                                ]
                            },
                        ]
                    }
                ],

                code1: `<wti-form :fields="fields1"
                  ref="form1"/>
---
fields1: [
    {
        label: '用户信息登记',
        children: [
            {
                key: 'name',
                type: 'input',
                label: '用户名称'
            },
            {
                options: [
                    {
                        value: 'male',
                        label: '男'
                    },
                    {
                        value: 'female',
                        label: '女'
                    },
                ],
                key: 'gender',
                label: '性别',
                type: 'radio'
            },
            {
                options: [
                    {
                        value: '自由职业者',
                        label: '自由职业者'
                    },
                    {
                        value: '体制内',
                        label: '体制内'
                    },
                    {
                        value: '打工人',
                        label: '打工人'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    },
                ],
                key: 'job',
                label: '职业',
                placeholder: '请选择',
                type: 'normal-select'
            },
            {
                key: 'money',
                type: 'money-input',
                label: '定金(通过表单配置属性控制不可清空)',
                append: '元',
                clearable: false,
            },
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
            {
                key: 'reg_date',
                label: '注册时间',
                placeholder: '请输入',
                type: 'date-input'
            },
            {
                key: 'timearea',
                label: '有效范围',
                placeholder: '请输入',
                type: 'date-range-input'
            },
            {
                key: 'notice_time',
                label: '每日短信通知时刻',
                type: 'hour-minute-input',
            },
            {
                key: 'number_limit',
                type: 'number-input',
                label: '数量限制',
                append: '个'
            },
            {
                key: 'dict_code',
                type: 'dynamic-select',
                label: '这是一个字典下拉框（想不出来用处了）',
                parentKey: '101'
            },
            {
                key: 'rate',
                type: 'rate-input',
                label: '存款利率',
            },
            {
                key: 'area',
                type: 'mul-linkage',
                label: '三级联动下拉框，',
                linkLevel: 3,
                firstParentKey: '100'
            },
            {
                key: 'address',
                type: 'textarea',
                label: '详细地址',
                span: 24
            },
            {
                key: 'IDCard',
                type: 'id-card-date',
                label: '我是 label',
            },
            {
                // key
                key: 'testInput',
                // 小型表单
                type: 'child-form',
                // 是否允许删除单个子表单，默认 true（允许）（未完成）
                deleteEnable: true,
                // 是否允许新增单个子表单，默认 true（允许）（未完成）
                addEnable: true,
                // 每个小表单头的文字部分，以及新增按钮的部分
                headerLabel: '人员信息',
                // 里面是表单的每一项，写法和外面的没区别
                childrenForm: [
                    {
                        key: 'dict_code',
                        type: 'dynamic-select',
                        label: '这是一个字典下拉框（想不出来用处了）',
                        parentKey: '101'
                    },
                ]
            },
        ]
    }
],
——————————
// 引入 Vue
import Vue from 'vue';

// 引入 Element UI 的两个
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入本组件
import WtiForm from 'wti-form';
import {baseURL} from '@/config/env.js';

// 把 Element UI 和 本组件挂载上去
Vue.use(Element);
// 这里是配置字典请求接口。如果没有字典接口的话，Vue.use 的时候可以不传第二个参数
const props = {
    baseURL: {
        type: String,
        default: baseURL,
    },
    // 下拉框属性【清除】的控制
    globalConfig: {
        type: Object,
        default: () => {
            return {
                clearable: true
            };
        }
    },
    dynamicSelectOption: {
        type: Object,
        default: () => ({
            // 这是字典接口的 url
            dictUrl: '/dict',
            // 异步请求时，请求内容是一个对象或一个数组。
            // 如果是对象，那么包含一个 key 和一个数组。
            // 如果是数组，那么只有这个数组。
            // 数组是所有字典 FormItem 的 parentKey 的集合
            queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
            parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
            value: 'code', // 这是下拉框选项的值
            label: 'label' // 这是下拉框选项的 label
        })
    }
};
Vue.use(WtiForm, props);`,
            };
        },
    };
</script>

<style scoped>

</style>
