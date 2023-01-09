<template>
    <div class="formitem-box">
        <h2>字典多选下拉框 DynamicSelectMultiple</h2>
        <h3>字典多选下拉框</h3>
        <p>和普通字典下拉框相比，增加了多选功能</p>
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

        <el-divider/>

        <h3>选项联动</h3>
        <p>多选字典下拉框，在选中的时候，也是可以联动其他字段的。</p>
        <p>但是请务必记得，这个联动是单向的，也就是说，在取消选中时，并不会恢复到联动之前的值。如果有此类需求，请务必自行去写。</p>
        <wti-form ref="form3"
                  :fields="fields3"
                  label-position="right"
                  :dynamic-select-option="dynamicSelectOption"/>
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

        <h3>兼容性处理</h3>
        <p>老版本类型是 dynamic-select-normal，目前也是兼容的，但不建议使用该字段作为 type 类型</p>
    </div>
</template>

<script>
    export default {
        name: 'Checkbox',
        data () {
            return {
                dynamicSelectOption: {
                    // 这是字典接口的 url
                    dictUrl: '/dict/DynamicSelectNormal',
                    // 异步请求时，请求内容是一个对象或一个数组。
                    // 如果是对象，那么包含一个 key 和一个数组。
                    // 如果是数组，那么只有这个数组。
                    // 数组是所有字典 FormItem 的 parentKey 的集合
                    queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                    parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
                    value: 'code', // 这是下拉框选项的值
                    label: 'label' // 这是下拉框选项的 label
                },
                fields1: [
                    {
                        children: [
                            {
                                key: 'dict_code',
                                type: 'dynamic-select-multiple',
                                label: '这是一个字典多选下拉框',
                                parentKey: '100',
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
                            },
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
                key: 'dict_code',
                type: 'dynamic-select-multiple',
                label: '这是一个字典多选下拉框',
                parentKey: '100',
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
            },
        ]
    }
]`,
                fields2: [
                    {
                        children: [
                            {
                                key: 'dict_code',
                                type: 'dynamic-select-multiple',
                                label: '这是一个字典多选下拉框',
                                parentKey: '100',
                                span: 5,
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
                key: 'dict_code',
                type: 'dynamic-select-multiple',
                label: '这是一个字典多选下拉框',
                parentKey: '100',
                span: 5,
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
            }
        ]
    }
],
`,
                fields3: [
                    {
                        children: [
                            {
                                key: 'dict_code',
                                type: 'dynamic-select-multiple',
                                label: '这是一个字典多选下拉框',
                                parentKey: '100',
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
                                        value: '101',
                                        linkList: [
                                            {
                                                linkKey: 'key2',
                                                enableLinkValue: true,
                                                linkValue: '12345'
                                            },
                                        ]
                                    },
                                    {
                                        value: '102',
                                        linkList: [
                                            {
                                                linkKey: 'key3',
                                                enableLinkValue: true,
                                                linkValue: [ 'A' ]
                                            }
                                        ]
                                    },
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
                code3: `<wti-form ref="form3"
  :fields="fields3"
  label-position="right"
  :dynamic-select-option="dynamicSelectOption"/>
---
dynamicSelectOption: {
    // 这是字典接口的 url
    dictUrl: '/dict/DynamicSelectNormal',
    // 异步请求时，请求内容是一个对象或一个数组。
    // 如果是对象，那么包含一个 key 和一个数组。
    // 如果是数组，那么只有这个数组。
    // 数组是所有字典 FormItem 的 parentKey 的集合
    queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
    parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
    value: 'code', // 这是下拉框选项的值
    label: 'label' // 这是下拉框选项的 label
},
---
fields3: [
    {
        children: [
            {
                key: 'dict_code',
                type: 'dynamic-select-multiple',
                label: '这是一个字典多选下拉框',
                parentKey: '100',
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
                        value: '101',
                        linkList: [
                            {
                                linkKey: 'key2',
                                enableLinkValue: true,
                                linkValue: '12345'
                            },
                        ]
                    },
                    {
                        value: '102',
                        linkList: [
                            {
                                linkKey: 'key3',
                                enableLinkValue: true,
                                linkValue: [ 'A' ]
                            }
                        ]
                    },
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
