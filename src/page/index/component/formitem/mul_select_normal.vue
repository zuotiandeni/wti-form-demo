<template>
    <div class="formitem-box">
        <h2>普通多选下拉框 MulSelectNormal</h2>
        <p>一个普通的多选下拉框，下拉框选项来源于 options</p>

        <h3>基本用法</h3>
        <p>默认情况下，只会显示第一个候选项，其他候选项会被收起来并被计数</p>
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

        <h3>展现所有候选项</h3>
        <p>在自定义showTags属性为false时，会将候选项都展现出来，而不是收起来。</p>
        <p>但是若是选项过多，可能会导致内容溢出，请务必注意。</p>
        <wti-form ref="form2"
                  :fields="fields2"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form2')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code2 }}</code></pre>
            </el-collapse-item>
        </el-collapse>


        <h3>自定义文本模式下，多个选项之间的连接符 linkSymbol</h3>
        <p>默认情况下，是顿号【、】，如果有需要，也可以自定义内容。</p>
        <p>
            尝试更换一下连接符吧！
            <el-radio-group v-model="linkSymbol" size="mini">
                <el-radio-button label="、"/>
                <el-radio-button label="，"/>
                <el-radio-button label="； "/>
            </el-radio-group>
        </p>
        <wti-form ref="form3"
                  :data="data3"
                  :text-model="true"
                  :fields="fields3"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form2')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>

                <el-link
                    type="primary"
                    href="https://github.com/qq20004604/wti-form-demo/blob/main/src/page/index/component/formitem/mul_select_normal.vue">
                    Github代码地址
                </el-link>
            </el-collapse-item>
        </el-collapse>
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
                                label: '普通多选下拉框',
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
                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                type: 'mul-select-normal',
                                label: '我是输入框的 label',
                                showTags: false, // 可选项，默认为true，控制多选的展示是否以tags的方式展示
                                span: 6,
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
                                    },
                                    {
                                        value: 'value_e',
                                        label: 'label E'
                                    },
                                    {
                                        value: 'value_f',
                                        label: 'label F'
                                    },
                                    {
                                        value: 'value_g',
                                        label: 'label G'
                                    },
                                    {
                                        value: 'value_h',
                                        label: 'label H'
                                    }
                                ],
                            }
                        ]
                    }
                ],

                code2: `<wti-form ref="form2"
                :fields="fields2"/>
---
fields2: [
    {
        children: [
            {
                key: 'key2',
                type: 'mul-select-normal',
                label: '我是输入框的 label',
                showTags: false, // 可选项，默认为true，控制多选的展示是否以tags的方式展示
                span: 6,
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
                    },
                    {
                        value: 'value_e',
                        label: 'label E'
                    },
                    {
                        value: 'value_f',
                        label: 'label F'
                    },
                    {
                        value: 'value_g',
                        label: 'label G'
                    },
                    {
                        value: 'value_h',
                        label: 'label H'
                    }
                ],
            }
        ]
    }
]`,
                linkSymbol: '、',

                code3: `<wti-form ref="form3"
                :data="data3"
                :text-model="true"
                :fields="fields3"/>
---
`,
                data3: {
                    key3: [ 'value_a', 'value_b', 'value_c', 'value_d' ]
                },
            };
        },
        computed: {
            fields3 () {
                return [
                    {
                        children: [
                            {
                                key: 'key3',
                                type: 'mul-select-normal',
                                label: '我是输入框的 label',
                                linkSymbol: this.linkSymbol,
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
                                    },
                                    {
                                        value: 'value_e',
                                        label: 'label E'
                                    },
                                    {
                                        value: 'value_f',
                                        label: 'label F'
                                    },
                                    {
                                        value: 'value_g',
                                        label: 'label G'
                                    },
                                    {
                                        value: 'value_h',
                                        label: 'label H'
                                    }
                                ],
                            }
                        ]
                    }
                ];
            }
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
