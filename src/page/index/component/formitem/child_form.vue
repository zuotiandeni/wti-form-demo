<template>
    <div class="formitem-box">
        <h2>子表单 ChildForm</h2>
        <p>在某些情况下，我们需要在表单内嵌套一个子表单，那么使用他就 ok 了</p>
        <p>子表单元素的使用方法，和普通表单基本毫无区别。这是相对来说，增加了【新增】【删除】【独立于子表单的收起/展开】，并且提交的时候，该属性以数组的形式提交。</p>

        <h3>一个标准的子表单组件</h3>
        <wti-form :fields="fields1"
                  ref="form1"
                  :dynamic-select-option="dynamicSelectOption"/>

        <div class="submit-line">
            <el-button type="primary" @click="submit('form1')">提交</el-button>
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

        <h3>一些配置属性</h3>
        <p>headerLabel：每个子表单的标题，然后会跟子表单的序号，例如 headerLabel = '测试'，那么子表单的标题分别为：【测试1】【测试2】</p>
        <p>addBtnLabel：新增按钮（即点击后会新增一个子表单的那个按钮），默认不传，该按钮文本内容是【＋ 子表单的标题】，有需要的话，通过这个可以自定义文字。</p>

        <h3>一个标准的子表单组件</h3>
        <wti-form :fields="fields2"
                  ref="form2"/>

        <div class="submit-line">
            <el-button type="primary" @click="submit('form2')">提交</el-button>
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
    </div>
</template>

<script>
export default {
    name: 'ChildForm',
    data () {
        return {
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
            fields1: [
                {
                    label: '用户信息登记',
                    children: [
                        {
                            key: 'tool',
                            type: 'input',
                            label: '工具人输入框，占个位，也可以不占位'
                        },
                        {
                            // key
                            key: 'testInput',
                            // 小型表单
                            type: 'child-form',
                            // 每个小表单头的文字部分，以及新增按钮的部分
                            headerLabel: '人员信息',
                            // 里面是表单的每一项，写法和外面的没区别
                            childrenForm: [
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
                                        }
                                    ],
                                    key: 'gender',
                                    label: '性别',
                                    type: 'radio'
                                },
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
                                    key: 'checkbox',
                                    label: '一个多选框',
                                    type: 'checkbox'
                                },
                                {
                                    key: 'dict_checkbox',
                                    type: 'dynamic-checkbox',
                                    label: '这是一个字典多选框',
                                    parentKey: '10341',
                                    checkAll: true,
                                    valueLink: [
                                        {
                                            value: '10341001',
                                            linkList: [
                                                {
                                                    linkKey: 'inputLink',
                                                    enableLinkValue: true,
                                                    linkValue: '12345'
                                                },
                                                {
                                                    linkKey: 'checkboxLink',
                                                    enableLinkValue: true,
                                                    linkValue: ['A']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    key: 'inputLink',
                                    type: 'input',
                                    label: '我是一个工具人输入框'
                                },
                                {
                                    key: 'checkboxLink',
                                    label: '一个多选框',
                                    type: 'checkbox',
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
                                        }
                                    ],
                                    key: 'job',
                                    label: '职业',
                                    placeholder: '请选择',
                                    type: 'normal-select'
                                },
                                {
                                    key: 'money',
                                    type: 'money-input',
                                    label: '定金',
                                    append: '元'
                                },
                                {
                                    autoCompleteKeys: [],
                                    searchUrl: '/autocomplete',
                                    searchKey: 'search',
                                    mainShowKey: 'search',
                                    key: 'code',
                                    label: '输入搜索',
                                    placeholder: '请输入',
                                    type: 'auto-complete-input'
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
                                    type: 'hour-minute-input'
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
                                    label: '存款利率'
                                },
                                {
                                    key: 'area',
                                    type: 'mul-linkage',
                                    label: '三级联动下拉框',
                                    linkLevel: 3,
                                    firstParentKey: '100'
                                },
                                {
                                    key: 'address',
                                    type: 'textarea',
                                    label: '详细地址',
                                    span: 24
                                }
                            ]
                        }
                    ]
                }
            ],

            code1: `fields1: [
                {
                    label: '用户信息登记',
                    children: [
                        {
                            key: 'tool',
                            type: 'input',
                            label: '工具人输入框，占个位，也可以不占位'
                        },
                        {
                            // key
                            key: 'testInput',
                            // 小型表单
                            type: 'child-form',
                            // 每个小表单头的文字部分，以及新增按钮的部分
                            headerLabel: '人员信息',
                            // 里面是表单的每一项，写法和外面的没区别
                            childrenForm: [
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
                                        }
                                    ],
                                    key: 'gender',
                                    label: '性别',
                                    type: 'radio'
                                },
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
                                    key: 'checkbox',
                                    label: '一个多选框',
                                    type: 'checkbox'
                                },
                                {
                                    key: 'dict_checkbox',
                                    type: 'dynamic-checkbox',
                                    label: '这是一个字典多选框',
                                    parentKey: '10341',
                                    checkAll: true,
                                    valueLink: [
                                        {
                                            value: '10341001',
                                            linkList: [
                                                {
                                                    linkKey: 'inputLink',
                                                    enableLinkValue: true,
                                                    linkValue: '12345'
                                                },
                                                {
                                                    linkKey: 'checkboxLink',
                                                    enableLinkValue: true,
                                                    linkValue: ['A']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    key: 'inputLink',
                                    type: 'input',
                                    label: '我是一个工具人输入框'
                                },
                                {
                                    key: 'checkboxLink',
                                    label: '一个多选框',
                                    type: 'checkbox',
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
                                        }
                                    ],
                                    key: 'job',
                                    label: '职业',
                                    placeholder: '请选择',
                                    type: 'normal-select'
                                },
                                {
                                    key: 'money',
                                    type: 'money-input',
                                    label: '定金',
                                    append: '元'
                                },
                                {
                                    autoCompleteKeys: [],
                                    searchUrl: '/autocomplete',
                                    searchKey: 'search',
                                    mainShowKey: 'search',
                                    key: 'code',
                                    label: '输入搜索',
                                    placeholder: '请输入',
                                    type: 'auto-complete-input'
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
                                    type: 'hour-minute-input'
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
                                    label: '存款利率'
                                },
                                {
                                    key: 'area',
                                    type: 'mul-linkage',
                                    label: '三级联动下拉框',
                                    linkLevel: 3,
                                    firstParentKey: '100'
                                },
                                {
                                    key: 'address',
                                    type: 'textarea',
                                    label: '详细地址',
                                    span: 24
                                }
                            ]
                        }
                    ]
                }
            ],`,

            fields2: [
                {
                    label: '用户信息登记',
                    children: [
                        {
                            // key
                            key: 'testInput',
                            // 小型表单
                            type: 'child-form',
                            // 每个小表单头的文字部分，以及新增按钮的部分
                            headerLabel: '人员信息',
                            addBtnLabel: '新增一个子表单',
                            // 里面是表单的每一项，写法和外面的没区别
                            childrenForm: [
                                {
                                    key: 'name',
                                    type: 'input',
                                    label: '用户名称'
                                }
                            ]
                        }
                    ]
                }
            ],

            code2: `fields2: [
    {
        label: '用户信息登记',
        children: [
            {
                // key
                key: 'testInput',
                // 小型表单
                type: 'child-form',
                // 每个小表单头的文字部分，以及新增按钮的部分
                headerLabel: '人员信息',
                addBtnLabel: '新增一个子表单',
                // 里面是表单的每一项，写法和外面的没区别
                childrenForm: [
                    {
                        key: 'name',
                        type: 'input',
                        label: '用户名称',
                    },
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

</style>
