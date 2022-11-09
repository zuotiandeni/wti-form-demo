<template>
    <div class="formitem-box">
        <h2>身份证日期输入框 IDCardDate</h2>
        <p>这里是指身份证的有效日期输入框</p>

        <h3>基本用法</h3>
        <p>有效期的值，默认最早只能选今天，而长期的值，默认取 9999-12-31</p>
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

        <h3>必填</h3>
        <p>你可以直接点击提交按钮试试。其他例子同这种写法，所以其他表单组件里就不写了。</p>
        <wti-form ref="form2"
                  :fields="fields2"
                  :border-form="false"/>
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

        <el-divider/>

        <h3>有初始值</h3>
        <p>
            初始值分别为长期，和2022-02-22
            <el-button type="primary" size="mini" @click="setValue3">手动赋值</el-button>
        </p>
        <wti-form ref="form3"
                  :fields="fields3"
                  :data="data3"
                  :border-form="false"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form3')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code3 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>文本模式</h3>
        <p>
            这里的按钮，可以查看在不同值下的文本模式值
            <el-button type="primary" size="mini" @click="setValue4('')">空值</el-button>
            <el-button type="primary" size="mini" @click="setValue4('9999-12-31')">长期</el-button>
            <el-button type="primary" size="mini" @click="setValue4('2022-12-22')">2022-12-22</el-button>
        </p>
        <wti-form ref="form4"
                  :data="data4"
                  :fields="fields4"
                  :text-model="true"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form4')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code4 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>自定义当身份证为长期时，其返回给服务器的值</h3>
        <p>
            这2个按钮，设置不同的自定义值
            <el-button type="primary" size="mini" @click="setValue5('0000-00-00')">0000-00-00</el-button>
            <el-button type="primary" size="mini" @click="setValue5('long')">long</el-button>
        </p>
        <wti-form ref="form5"
                  :fields="fields5"
                  :data="data5"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form5')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code5 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>
    </div>
</template>

<script>
    export default {
        name: 'IDCardDate',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'id-card-date',
                                label: '我是 label'
                            }
                        ]
                    }
                ],

                code1: `<wti-form
            ref="form1"
            :fields="fields1"/>
---
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'id-card-date',
                label: '我是 label'
            }
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                type: 'id-card-date',
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
                type: 'id-card-date',
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
                                type: 'id-card-date',
                                label: '默认值为长期'
                            },
                            {
                                key: 'key4',
                                type: 'id-card-date',
                                label: '默认值为2022-02-22'
                            },
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
                type: 'id-card-date',
                label: '默认值为长期'
            },
            {
                key: 'key4',
                type: 'id-card-date',
                label: '默认值为2022-02-22'
            },
        ]
    }
]`,
                data3: {
                    key3: '9999-12-31',
                    key4: '2022-02-22'
                },

                fields4: [
                    {
                        children: [
                            {
                                key: 'key5',
                                type: 'id-card-date',
                                label: '只读模式'
                            },
                        ]
                    }
                ],

                code4: `<wti-form ref="form4"
  :data="data4"
  :fields="fields4"
  :text-model="true"/>
---
fields4: [
    {
        children: [
            {
                key: 'key5',
                type: 'id-card-date',
                label: '只读模式'
            },
        ]
    }
]`,
                data4: {
                    key5: '2022-01-01'
                },

                fields5: [
                    {
                        children: [
                            {
                                key: 'key6',
                                type: 'id-card-date',
                                label: '只读模式',
                                longTypeValue: '',
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
                key: 'key6',
                type: 'id-card-date',
                label: '只读模式',
                longTypeValue: '',
            }
        ]
    }
]`,
                data5: {
                    key6: '9999-12-31'
                }
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
            },
            setValue3 () {
                this.data3 = {
                    key3: '9999-12-31',
                    key4: '2022-02-22'
                };
            },
            setValue4 (v) {
                this.data4 = {
                    key5: v
                };
            },
            setValue5 (v) {
                this.fields5[0].children[0].longTypeValue = v;
                this.data5 = {
                    key6: v
                };
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
