<template>
    <div class="formitem-box">
        <h2>布局配置 Layout</h2>
        <p>整体的布局思路是：</p>
        <p>1. 全局布局设置 + 单个表单元素的布局设置结合</p>
        <p>2. 设立优先级序列，根据优先级判断每个表单元素的宽度，方便复用</p>
        <p>3. 支持特殊布局设置，支持特殊需求下，表单元素换行显示</p>

        <h3>宽度设置</h3>
        <p>表单元素的 span 和 size，都可以设置宽度。</p>
        <p>一整行宽度为 24，同一行的元素加起来宽度如果超过 24，则最后一个元素会被自动放入下一行计算</p>
        <p>如以下示例里，第一、二个元素宽度是 6+12，第三个元素宽度为 18，总和加起来超过 24，于是第三个元素会自动放到第二行。</p>
        <wti-form ref="form1"
                  :fields="fields1"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form1')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code1 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>


        <h3>布局优先级</h3>
        <p>采用：组件 span > 表单全局宽度设置 > 组件 size > 默认 12 的设置</p>
        <p>方便复用，也方便特殊化设置</p>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '我的宽度 6',
                                span: 6
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: '我的宽度 12',
                                span: 12
                            },
                            {
                                key: 'key3',
                                type: 'input',
                                label: '我的宽度 18',
                                span: 18
                            },
                            {
                                key: 'key4',
                                type: 'input',
                                label: '我的宽度 24',
                                span: 24
                            },
                        ]
                    }
                ],

                code1: `<wti-form
            ref="form1"
            :fields="fields1"
            :border-form="false"/>
---
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '我是输入框的 label'
            }
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                type: 'input',
                                label: '必填输入框的label',
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入',
                                        trigger: [
                                            'blur',
                                            'change'
                                        ]
                                    }
                                ],
                            }
                        ]
                    }
                ],

                code2: `<wti-form
            ref="form2"
            :fields="fields2"
            :border-form="false"/>
---
fields2: [
    {
        children: [
            {
                key: 'key2',
                type: 'input',
                label: '必填输入框的label',
                rules: [
                    {
                        required: true,
                        message: '请输入',
                        trigger: [
                            'blur',
                            'change'
                        ]
                    }
                ],
            }
        ]
    }
]`,


                fields3: [
                    {
                        children: [
                            {
                                key: 'key3',
                                type: 'input',
                                label: '最少3个字，最多6个字',
                                rules: [
                                    {
                                        trigger: [
                                            'blur',
                                            'change'
                                        ],
                                        max: 6,
                                        message: '长度应当处于3到6之间',
                                        min: 3
                                    }
                                ],
                            }
                        ]
                    }
                ],

                code3: `<wti-form
            ref="form3"
            :fields="fields3"
            :border-form="false"/>
---
fields3: [
    {
        children: [
            {
                key: 'key3',
                type: 'input',
                label: '最少3个字，最多6个字',
                rules: [
                    {
                        trigger: [
                            'blur',
                            'change'
                        ],
                        max: 6,
                        message: '长度应当处于3到6之间',
                        min: 3
                    }
                ],
            }
        ]
    }
]`,


                fields4: [
                    {
                        children: [
                            {
                                key: 'key4',
                                type: 'input',
                                label: '比如第 x 月这样就可以这么用',
                                prepend: '第',
                                append: '月',
                                placeholder: '请输入月份'
                            }
                        ]
                    }
                ],

                code4: `<wti-form
            ref="form4"
            :fields="fields4"
            :border-form="false"/>
---
fields4: [
    {
        children: [
            {
                key: 'key4',
                type: 'input',
                label: '比如第 x 月这样就可以这么用',
                prepend: '第',
                append: '月',
                placeholder: '请输入月份'
            }
        ]
    }
]`,


                fields5: [
                    {
                        children: [
                            {
                                key: 'key5',
                                type: 'input',
                                label: '给个默认值吧',
                                defaultValue: '1234'
                            }
                        ]
                    }
                ],

                code5: `<wti-form
            ref="form5"
            :fields="fields5"
            :border-form="false"/>
---
fields5: [
    {
        children: [
            {
                key: 'key5',
                type: 'input',
                label: '给个默认值吧',
                defaultValue: '1234'
            }
        ]
    }
]`,
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
