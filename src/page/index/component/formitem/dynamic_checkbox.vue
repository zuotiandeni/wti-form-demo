<template>
    <div class="formitem-box">
        <h2>字典多选框 DynamicCheckbox</h2>
        <p>多选框，很常见的表单组件</p>
        <wti-form ref="formDict"
                  :fields="fields"/>
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
                fields: [
                    {
                        children: [
                            {
                                key: 'dict_code',
                                type: 'dynamic-checkbox',
                                label: '这是一个字典多选框',
                                parentKey: '101',
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
                                valueLink: [
                                    {
                                        value: '10100',
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
                  :fields="fields"/>
---
fields: [
    {
        children: [
            {
                key: 'dict_code',
                type: 'dynamic-checkbox',
                label: '这是一个字典多选框',
                parentKey: '101',
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
                valueLink: [
                    {
                        value: '10100',
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
]`
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
