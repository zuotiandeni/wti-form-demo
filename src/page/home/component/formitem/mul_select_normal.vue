<template>
    <div class="formitem-box">
        <h2>普通多选下拉框 MulSelectNormal</h2>
        <p>一个普通的多选下拉框，下拉框选项来源于 options</p>

        <h3>基本用法</h3>
        <!--        <p>这是最基本的用法，一个输入框 + 一个 label + 一个提交按钮。提交结果请查看控制台。为了区分代码，加了 border</p>-->
        <!--        <wti-form ref="form1"-->
        <!--                  :fields="fields1"/>-->
        <!--        <div class="submit-line">-->
        <!--            <el-button type="primary" @click="submit('form1')">提交按钮</el-button>-->
        <!--            <span class="tips">请查看控制台看提交结果</span>-->
        <!--        </div>-->
        <!--        <el-collapse class="collapse">-->
        <!--            <el-collapse-item>-->
        <!--                <template slot="title">-->
        <!--                    <b>点击查看代码</b>-->
        <!--                </template>-->
        <!--                <pre v-highlightjs><code class="javascript">{{ code1 }}</code></pre>-->
        <!--            </el-collapse-item>-->
        <!--        </el-collapse>-->

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
                                type: 'input',
                                label: '我是输入框的 label'
                            }
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
