<template>
    <div id="base">
        <h2>提供可配置式的lable冒号</h2>
        <p>文本模式下，label的left和right对齐方式默认有冒号</p>
        <wti-form :fields="fields"
                  ref="formRight"
                  :data="originData2"
                  :text-model="true"
                  label-position="right"
                  :dynamic-select-option="dynamicSelectOption"/>
        <el-divider/>
        <p>通过textModelColonVisible设置文本模式下是否带冒号</p>
        <wti-form :fields="fields"
                  ref="formRight"
                  :data="originData2"
                  :text-model-colon-visible="false"
                  :text-model="true"
                  label-position="right"
                  :dynamic-select-option="dynamicSelectOption"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ addColonPrimaryConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <p>通过子项配置textModelColonVisible设置指定子表单是否带冒号</p>
        <wti-form :fields="fieldsSingleConfig"
                  ref="formRight"
                  :data="originData2"
                  :text-model="true"
                  label-position="right"
                  :dynamic-select-option="dynamicSelectOption"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ addColonSingleConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'DemoStatus',
        data () {
            return {
                dynamicSelectOption: {
                    // 这是字典接口的 url
                    dictUrl: '/dict',
                    // 异步请求时，请求内容是一个对象或一个数组。
                    // 如果是对象，那么包含一个 key 和一个数组。
                    // 如果是数组，那么只有这个数组。
                    // 数组是所有字典 FormItem 的 parentKey 的集合
                    queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                    parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
                    value: 'code', // 这是下拉框选项的值
                    label: 'label' // 这是下拉框选项的 label
                },
                fields: [
                    {
                        label: '用户信息登记',
                        children: [
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
                            }
                        ]
                    }
                ],
                addColonPrimaryConfig: `
                    <wti-form :fields="fields"
                        ref="formRight"
                        :data="originData2"
                        :add-colon="false"
                        :text-model="true"
                        label-position="right"
                        :dynamic-select-option="dynamicSelectOption"/>
---
fields: [
                    {
                        label: '用户信息登记',
                        children: [
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
                            }
                        ]
                    }
                ]`,
                fieldsSingleConfig: [
                    {
                        label: '用户信息登记',
                        children: [
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
                                textModelColonVisible: false,
                                key: 'gender',
                                label: '性别',
                                type: 'radio'
                            },
                            {
                                // key
                                key: 'testInput',
                                // 小型表单
                                type: 'child-form',
                                // 每个小表单头的文字部分，以及新增按钮的部分
                                headerLabel: '人员信息',
                                // 里面是表单的每一项，写法和外面的没区别
                                textModelColonVisible: false,
                                childrenForm:[
                                    {
                                        key: 'childName',
                                        type: 'input',
                                        label: '子表单用户名称',
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
                                        label: '子表单性别',
                                        type: 'radio'
                                    },
                                ]
                            }
                        ]
                    }
                ],
                addColonSingleConfig: `<wti-form :fields="fieldsSingleConfig"
                  ref="formRight"
                  :data="originData2"
                  :text-model="true"
                  label-position="right"
                  :dynamic-select-option="dynamicSelectOption"/>
---
                fieldsSingleConfig: [
                    {
                        label: '用户信息登记',
                        children: [
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
                                textModelColonVisible: false,
                                key: 'gender',
                                label: '性别',
                                type: 'radio'
                            },
                            {
                                // key
                                key: 'testInput',
                                // 小型表单
                                type: 'child-form',
                                // 每个小表单头的文字部分，以及新增按钮的部分
                                headerLabel: '人员信息',
                                // 里面是表单的每一项，写法和外面的没区别
                                textModelColonVisible: false,
                                childrenForm:[
                                    {
                                        key: 'childName',
                                        type: 'input',
                                        label: '子表单用户名称',
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
                                        label: '子表单性别',
                                        type: 'radio'
                                    },
                                ]
                            }
                        ]
                    }
                ],
`,
                originData2: {}
            };
        },
        methods: {}
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

    #base {
        position: relative;
        width: 100%;

    }


    .collapse {
        position: relative;
        width: 100%;

        .code {
            white-space: pre;
            background: #fafafa;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 10px;
        }
    }
</style>
