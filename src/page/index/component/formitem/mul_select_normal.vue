<template>
    <div class="formitem-box">
        <h2>普通多选下拉框 MulSelectNormal</h2>
        <p>一个普通的多选下拉框，下拉框选项来源于 options</p>

        <h3>基本用法</h3>
        <p>候选项会被收起来</p>
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
    </div>
</template>

<script>
    export default {
        name: 'MulSelectNormal',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'mul-select-normal',
                                label: '我是输入框的 label',
                                showTags: false, // 可选项，默认为true，控制多选的展示是否以tags的方式展示
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                    {
                                        value: 'value_b',
                                        label: 'label B'
                                    },
                                    {
                                        value: 'value_c',
                                        label: 'label C'
                                    },
                                    {
                                        value: 'value_d',
                                        label: 'label D'
                                    }
                                ],
                            }
                        ]
                    }
                ],

                code1: `<wti-form ref="form1"
                :fields="fields1"/>
---
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'mul-select-normal',
                label: '我是输入框的 label',
                showTags: false, // 可选项，默认为true，控制多选的展示是否以tags的方式展示
                options: [
                    {
                        value: 'value_a',
                        label: 'label A'
                    },
                    {
                        value: 'value_b',
                        label: 'label B'
                    },
                    {
                        value: 'value_c',
                        label: 'label C'
                    },
                    {
                        value: 'value_d',
                        label: 'label D'
                    }
                ],
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
