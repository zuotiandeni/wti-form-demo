<template>
    <div class="formitem-box">
        <h2>多选框 Checkbox</h2>
        <p>多选框，很常见的表单组件</p>

        <h3>最基本的checkbox</h3>
        <p>一个简简单单普普通通的多选框</p>
        <wti-form ref="form"
                  :fields="fields"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ ordinaryConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <h3>checkbox联动</h3>
        <p>设置multiSelectGanged: true</p>
        <wti-form ref="form0"
                  :fields="fields0"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form0')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ linkageConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <!--        <h3>自定义校验规则</h3>-->
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
        <!--                <pre v-highlightjs><code class="javascript">{{ checkoutRule }}</code></pre>-->
        <!--            </el-collapse-item>-->
        <!--        </el-collapse>-->

        <h3>禁用全部/禁用某个选项</h3>
        <p>单个选项禁用时，需要在对应的option配置default:true</p>
        <p>全部选项禁用时，需要在key的统计配置disableDefault: true,</p>
        <wti-form ref="form2"
                  :fields="fields2"/>
        <wti-form ref="form3"
                  :fields="fields3"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ forbiddenConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <h3>全选功能</h3>
        <p>在key的同级配置checkAll: true</p>
        <wti-form ref="form2"
                  :data="formdata"
                  :fields="fields4"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form2')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ checkAllConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <h3>限制选中的最大和最小数量</h3>
        <p>设置min、max属性</p>
        <wti-form ref="form5"
                  :fields="fields5"/>
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
            // const checkCheckBox = (rule, value, callback) => {
            //     if (value.length === 0) {
            //         return callback(new Error('请选择'));
            //     }
            //     if (value.length < 3) {
            //         return callback(new Error('请至少选择3项'));
            //     }
            //     callback();
            // };
            return {
                formdata: {
                    key1: [ 'value_a', 'value_b' ]
                },
                fields: [
                    {
                        children: [
                            {
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                    {
                                        value: 'value_b',
                                        label: 'label B'
                                    }
                                ],
                                key: 'key1',
                                label: '一个多选框',
                                type: 'checkbox'
                            }
                        ]
                    }
                ],
                ordinaryConfig: `<wti-form ref="form"
              :fields="fields"/>
---
fields: [
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
              ],
              key: 'key1',
              label: '一个多选框',
              type: 'checkbox'
            },
          ]
        }
      ]`,
                fields0: [
                    {
                        children: [
                            {
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                    {
                                        value: 'value_b',
                                        label: 'label B'
                                    }
                                ],
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
                                        value: 'value_a',
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
                                ],
                                key: 'key1',
                                label: '一个多选框',
                                type: 'checkbox',
                                span: 8
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
                linkageConfig: `<wti-form ref="form0"
              :fields="fields0"/>
---
fields0: [
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
              ],
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
                  value: 'value_a',
                  linkList: [
                    {
                      linkKey: 'key2',
                      enableLinkValue: true,
                      linkValue: '12345',
                    },
                    {
                      linkKey: 'key3',
                      enableLinkValue: true,
                      linkValue: ['A'],
                    }
                  ]
                },
              ],
              key: 'key1',
              label: '一个多选框',
              type: 'checkbox',
              span: 8
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
                  label: 'key3 B',
                },
              ]
            }
          ]
        }
      ]`,
                fields2: [
                    {
                        children: [
                            {
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                    {
                                        value: 'value_b',
                                        label: 'label B',
                                        disabled: true
                                    }
                                ],
                                key: 'key1',
                                label: '一个多选框',
                                type: 'checkbox'
                            }
                        ]
                    }
                ],
                fields3: [
                    {
                        children: [
                            {
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                    {
                                        value: 'value_b',
                                        label: 'label B'
                                    }
                                ],
                                disableDefault: true,
                                key: 'key1',
                                label: '一个多选框',
                                type: 'checkbox'
                            }
                        ]
                    }
                ],
                forbiddenConfig: `<wti-form ref="form2"
              :fields="fields2"/>
            <wti-form ref="form3"
              :fields="fields3"/>
---
fields2:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                  disabled: true,
                },
              ],
              key: 'key1',
              label: '一个多选框',
              type: 'checkbox'
            }
          ]
        }
      ],
      fields3:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
              ],
              disableDefault: true,
              key: 'key1',
              label: '一个多选框',
              type: 'checkbox'
            }
          ]
        }
      ]`,
                fields4: [
                    {
                        children: [
                            {
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                    {
                                        value: 'value_b',
                                        label: 'label B'
                                    }
                                ],
                                checkAll: true,
                                key: 'key1',
                                label: '一个多选框',
                                type: 'checkbox'
                            }
                        ]
                    }
                ],
                checkAllConfig: `<wti-form ref="form2"
              :fields="fields4"/>
---
fields4:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
              ],
              checkAll: true,
              key: 'key1',
              label: '一个多选框',
              type: 'checkbox'
            }
          ]
        }
      ]`,
                fields5: [
                    {
                        children: [
                            {
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
                                    }
                                ],
                                min: 1,
                                max: 4,
                                key: 'key1',
                                label: '一个多选框',
                                type: 'checkbox'
                            }
                        ]
                    }
                ],
                astrictNumConfig: `<wti-form ref="form5"
              :fields="fields5"/>
---
fields5:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
                {
                  value: 'value_c',
                  label: 'label C',
                },
                {
                  value: 'value_d',
                  label: 'label D',
                },
                {
                  value: 'value_e',
                  label: 'label E',
                },
                {
                  value: 'value_f',
                  label: 'label F',
                },
              ],
              min: 1,
              max: 4,
              key: 'key1',
              label: '一个多选框',
              type: 'checkbox',
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
