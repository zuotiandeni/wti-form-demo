<template>
    <div class="formitem-box">
        <h2>字典多选下拉框 DynamicSelectNormal</h2>
        <p>多选下拉框，很常见的表单组件</p>
        <wti-form ref="formDict"
                  :fields="dictionariesFields"
                  :data="dicData"
                  label-position="right"
                  :dynamic-select-option="dynamicSelectOption"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('formDict')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ astrictNumConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'Checkbox',
        data () {
            return {
                dicData: {
                    // dict_code: ['10341001', '10341002']
                },
                dynamicSelectOption: {
                    // 这是字典接口的 url。baseURL 指开发和生产环境下，不同的前缀。
                    dictUrl: '/wkbbackend/queryByCategoryCodeList',
                    // 异步请求时，请求内容是一个对象或一个数组。
                    // 如果是对象，那么包含一个 key 和一个数组。
                    // 如果是数组，那么只有这个数组。
                    // 数组是所有字典 FormItem 的 parentKey 的集合
                    queryKey: 'categoryCodeList', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                    parentKey: 'categoryCode', // 这是返回结果的 parentKey。意思是，同一个 parentKey
                    // 归属于同一个下拉框选项
                    value: 'bdictCode', // 这是下拉框选项的值
                    label: 'bdictDesc' // 这是下拉框选项的 label
                },
                dictionariesFields: [
                    {
                        children: [
                            {
                                key: 'dict_code',
                                type: 'dynamic-select-normal',
                                label: '这是一个字典多选下拉框',
                                parentKey: '10341',
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择',
                                        trigger: [
                                            'blur',
                                            'change'
                                        ]
                                    }
                                ],
                                showTags: false, // 可选项，默认为true，控制多选的展示是否以tags的方式展示
                                valueLink: [
                                    {
                                        value: '10341001',
                                        linkList: [
                                            {
                                                linkKey: 'key2',
                                                enableLinkValue: true,
                                                linkValue: '12345'
                                            },
                                            {
                                                linkKey: 'key3',
                                                enableLinkValue: true,
                                                linkValue: [ 'A' ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: '我是一个工具人输入框',
                                span: 8
                            },
                            {
                                key: 'key3',
                                label: '一个多选框',
                                type: 'checkbox',
                                span: 8,
                                options: [
                                    {
                                        value: 'A',
                                        label: 'key3 A'
                                    },
                                    {
                                        value: 'B',
                                        label: 'key3 B'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                astrictNumConfig: `<wti-form ref="formDict"
                  :fields="dictionariesFields"
                  :data="dicData"
                  :dynamic-select-option="dynamicSelectOption"/>
---
dynamicSelectOption: {
                    // 这是字典接口的 url。baseURL 指开发和生产环境下，不同的前缀。
                    dictUrl: '/wkbbackend/queryByCategoryCodeList',
                    // 异步请求时，请求内容是一个对象或一个数组。
                    // 如果是对象，那么包含一个 key 和一个数组。
                    // 如果是数组，那么只有这个数组。
                    // 数组是所有字典 FormItem 的 parentKey 的集合
                    queryKey: 'categoryCodeList', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                    parentKey: 'categoryCode', // 这是返回结果的 parentKey。意思是，同一个 parentKey
                    // 归属于同一个下拉框选项
                    value: 'bdictCode', // 这是下拉框选项的值
                    label: 'bdictDesc' // 这是下拉框选项的 label
                },
---
dictionariesFields: [
                    {
                        children: [
                            {
                                key: 'dict_code',
                                type: 'dynamic-select-normal',
                                label: '这是一个字典多选下拉框',
                                parentKey: '10341',
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择',
                                        trigger: [
                                            'blur',
                                            'change'
                                        ]
                                    }
                                ],
                                showTags: false, // 可选项，默认为true，控制多选的展示是否以tags的方式展示
                                valueLink: [
                                    {
                                        value: '10341001',
                                        linkList: [
                                            {
                                                linkKey: 'key2',
                                                enableLinkValue: true,
                                                linkValue: '12345'
                                            },
                                            {
                                                linkKey: 'key3',
                                                enableLinkValue: true,
                                                linkValue: ['A']
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: '我是一个工具人输入框',
                                span: 8
                            },
                            {
                                key: 'key3',
                                label: '一个多选框',
                                type: 'checkbox',
                                span: 8,
                                options: [
                                    {
                                        value: 'A',
                                        label: 'key3 A'
                                    },
                                    {
                                        value: 'B',
                                        label: 'key3 B'
                                    }
                                ]
                            }
                        ]
                    }
                ],
`
            };
        },
        methods: {
            submit (formName) {
                this.$refs[formName].validate((isPass, data) => {
                    if (isPass) {
                        console.log('这是你刚提交的数据', data);
                    } else {
                        this.$message.error('校验失败！');
                    }
                });
            }
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

    .formitem-box {
        position: relative;
        width: 100%;

        .submit-line {
            margin: 10px 0;

            .tips {
                margin-left: 24px;
                font-size: 10px;
            }
        }


        .collapse {
            position: relative;
            width: 600px;

            .code {
                white-space: pre;
                background: #fafafa;
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 10px;
            }
        }
    }
</style>
