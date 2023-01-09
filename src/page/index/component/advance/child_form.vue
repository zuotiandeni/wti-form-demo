<template>
    <div class="formitem-box">
        <h2>子表单 ChildForm</h2>
        <p>在某些情况下，我们需要在表单内嵌套一个子表单，那么使用他就 ok 了</p>
        <p>子表单元素的使用方法，和普通表单基本毫无区别。这是相对来说，增加了【新增】【删除】【独立于子表单的收起/展开】。</p>
        <p>而提交的时候，子表单的值的key，是子表单的key，而子表单数据的值，是一个数组。而数组的每一项，是按顺序来的其中一个子表单的所有数据。（可以在示例里，点击提交并查看控制台数据来查看效果）</p>

        <h3>一个标准的子表单组件</h3>
        <wti-form :fields="fields1"
                  ref="form1"/>

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

        <h3>监听子表单数据变化</h3>
        <p>默认情况下，我们可以通过 @updateValue(formData, childItemData, childFormIndex) 事件监听主表单，以及子表单的数据变化。</p>
        <p>在修改表单内容时，组件会反馈三个值给于用户：</p>
        <p>1、formData：主表单对应变化的key:value</p>
        <p>2、childItemData：子表单具体发生变化的项对应的key:value</p>
        <p>3、childFormIndex：子表单的下标，标识是第几个子表单</p>
        <p>注：如果是主表单元素内容改变，childItemData及childFormIndex值为undefined</p>
        <wti-form :fields="fields3"
                  ref="form3"
                  @updateValue="updateValue"/>

        <div class="submit-line">
            <el-button type="primary" @click="submit('form1')">提交</el-button>
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
    </div>
</template>

<script>
    export default {
        name: 'ChildForm',
        data () {
            return {
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
                                        label: '这是一个字典下拉框',
                                        parentKey: '101'
                                    },
                                    {
                                        key: 'dict_select_normal',
                                        type: 'dynamic-select-normal',
                                        label: '这是一个字典多选下拉框',
                                        parentKey: '100'
                                    },
                                    {
                                        key: 'dict_checkbox',
                                        type: 'dynamic-checkbox',
                                        label: '这是一个字典多选框，带联动效果',
                                        parentKey: '100',
                                        checkAll: true,
                                        valueLink: [
                                            {
                                                value: '101',
                                                linkList: [
                                                    {
                                                        linkKey: 'inputLink',
                                                        enableLinkValue: true,
                                                        linkValue: '12345'
                                                    }
                                                ]
                                            },
                                            {
                                                value: '102',
                                                linkList: [
                                                    {
                                                        linkKey: 'inputLink',
                                                        enableLinkValue: true,
                                                        linkValue: ''
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        key: 'inputLink',
                                        type: 'input',
                                        label: '我是一个工具人输入框，将被字典多选框联动'
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

                code1: `<wti-form :fields="fields1"
  ref="form1"/>
---
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
                        label: '这是一个字典下拉框',
                        parentKey: '101'
                    },
                    {
                        key: 'dict_select_normal',
                        type: 'dynamic-select-normal',
                        label: '这是一个字典多选下拉框',
                        parentKey: '100'
                    },
                    {
                        key: 'dict_checkbox',
                        type: 'dynamic-checkbox',
                        label: '这是一个字典多选框，带联动效果',
                        parentKey: '100',
                        checkAll: true,
                        valueLink: [
                            {
                                value: '101',
                                linkList: [
                                    {
                                        linkKey: 'inputLink',
                                        enableLinkValue: true,
                                        linkValue: '12345'
                                    }
                                ]
                            },
                            {
                                value: '102',
                                linkList: [
                                    {
                                        linkKey: 'inputLink',
                                        enableLinkValue: true,
                                        linkValue: ''
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        key: 'inputLink',
                        type: 'input',
                        label: '我是一个工具人输入框，将被字典多选框联动'
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
]`,

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

                code2: `<wti-form :fields="fields2"
    ref="form2"/>
---
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
]`,

                fields3: [
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
                                        label: '数量限制(number-input)（只会在blur后触发事件）',
                                        append: '个'
                                    },
                                    {
                                        key: 'dict_code',
                                        type: 'dynamic-select',
                                        label: '这是一个字典下拉框',
                                        parentKey: '101'
                                    },
                                    {
                                        key: 'dict_select_normal',
                                        type: 'dynamic-select-normal',
                                        label: '这是一个字典多选下拉框（每次选择都会触发事件）',
                                        parentKey: '100'
                                    },
                                    {
                                        key: 'dict_checkbox',
                                        type: 'dynamic-checkbox',
                                        label: '这是一个字典多选框，带联动效果（被联动的项的值变化，不会触发事件）',
                                        parentKey: '100',
                                        checkAll: true,
                                        valueLink: [
                                            {
                                                value: '101',
                                                linkList: [
                                                    {
                                                        linkKey: 'inputLink',
                                                        enableLinkValue: true,
                                                        linkValue: '12345'
                                                    }
                                                ]
                                            },
                                            {
                                                value: '102',
                                                linkList: [
                                                    {
                                                        linkKey: 'inputLink',
                                                        enableLinkValue: true,
                                                        linkValue: ''
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        key: 'inputLink',
                                        type: 'input',
                                        label: '我是一个工具人输入框，将被字典多选框联动'
                                    },
                                    {
                                        key: 'rate',
                                        type: 'rate-input',
                                        label: '存款利率（只会在blur后触发事件）'
                                    },
                                    {
                                        key: 'area',
                                        type: 'mul-linkage',
                                        label: '三级联动下拉框（不会触发事件）',
                                        linkLevel: 3,
                                        firstParentKey: '100'
                                    },
                                    {
                                        key: 'idCard',
                                        type: 'id-card-date',
                                        label: '我是 label',
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

                code3: `<wti-form :fields="fields1"
    ref="form3"
    @updateValue="updateValue"/>
---
fields3: [
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
                        label: '这是一个字典下拉框',
                        parentKey: '101'
                    },
                    {
                        key: 'dict_select_normal',
                        type: 'dynamic-select-normal',
                        label: '这是一个字典多选下拉框',
                        parentKey: '100'
                    },
                    {
                        key: 'dict_checkbox',
                        type: 'dynamic-checkbox',
                        label: '这是一个字典多选框，带联动效果',
                        parentKey: '100',
                        checkAll: true,
                        valueLink: [
                            {
                                value: '101',
                                linkList: [
                                    {
                                        linkKey: 'inputLink',
                                        enableLinkValue: true,
                                        linkValue: '12345'
                                    }
                                ]
                            },
                            {
                                value: '102',
                                linkList: [
                                    {
                                        linkKey: 'inputLink',
                                        enableLinkValue: true,
                                        linkValue: ''
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        key: 'inputLink',
                        type: 'input',
                        label: '我是一个工具人输入框，将被字典多选框联动'
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
                        key: 'idCard',
                        type: 'id-card-date',
                        label: '身份证有效期输入框',
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
            },
            updateValue (formData, childItemData, childFormIndex) {
                console.log('表单数据', formData, '子表单数据', childItemData, '第几个子表单（第一个为0）', childFormIndex);
            },
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

</style>
