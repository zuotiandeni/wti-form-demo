<template>
    <div id="base">
        <h2>文本模式下表单内容高亮</h2>
        <p>通过配置highLightList，自动匹配要添加高亮类名的元素</p>
        <p>元素匹配成功后，会自动添加类名wti-form-high-light-class</p>
        <wti-form :fields="fields"
                  ref="form"
                  :data="formData"
                  :high-light-list="highLightList"
                  :text-model="true"
                  label-position="right"/>
        <el-divider/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ highLightListConfig }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'FormHighlight',
        data () {
            return {
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
                            },
                            {
                                key: 'childFormDTO',
                                type: 'child-form', // 小型表单
                                headerLabel: '子表单', // 每个小表单头的文字部分，以及新增按钮的部分
                                childrenForm: [
                                    {
                                        key: 'name',
                                        type: 'input',
                                        label: '子项用户名称'
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
                                        label: '子项性别',
                                        type: 'radio'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                formData: {
                    name: '法外狂徒--张三儿',
                    gender: 'male',
                    childFormDTO: [
                        {
                            name: '法外狂徒--李四儿',
                            gender: 'male'
                        },
                        {
                            name: '法外狂徒--赵四儿',
                            gender: 'male'
                        }
                    ]
                },
                highLightList: [
                    {
                        parentFormKey: '', // 如果是父表单，parentFormKey为空，子表单是真实的父key
                        childFormIndex: -1, // 如果是父表单，这里为-1（判断不会走这一条）。如果是子表单，这里代表的是该子表单的下标
                        highLightKey: 'name' // 要高亮元素的key（是父表单，则是其父表单的key。子表单，则是其子表单对应那一项的key）
                    },
                    {
                        parentFormKey: 'childFormDTO',
                        childFormIndex: 0,
                        highLightKey: 'name'
                    },
                    {
                        parentFormKey: 'childFormDTO',
                        childFormIndex: 1,
                        highLightKey: 'gender'
                    }
                ],
                highLightListConfig: `
                <wti-form :fields="fields"
                    ref="form"
                    :data="formData"
                    :high-light-list="highLightList"
                    :text-model="true"
                    label-position="right"/>
                --------------------------
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
                            },
                            {
                                key: 'childFormDTO',
                                type: 'child-form', // 小型表单
                                headerLabel: '子表单', // 每个小表单头的文字部分，以及新增按钮的部分
                                childrenForm: [
                                    {
                                        key: 'name',
                                        type: 'input',
                                        label: '子项用户名称'
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
                                        label: '子项性别',
                                        type: 'radio'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                highLightList: [
                    {
                        parentFormKey: '', // 如果是父表单，parentFormKey为空，子表单是真实的父key
                        childFormIndex: -1, // 如果是父表单，这里为-1（判断不会走这一条）。如果是子表单，这里代表的是该子表单的下标
                        highLightKey: 'name' // 要高亮元素的key（是父表单，则是其父表单的key。子表单，则是其子表单对应那一项的key）
                    },
                    {
                        parentFormKey: 'childFormDTO',
                        childFormIndex: 0,
                        highLightKey: 'name'
                    },
                    {
                        parentFormKey: 'childFormDTO',
                        childFormIndex: 1,
                        highLightKey: 'gender'
                    }
                ],
                `
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

    /deep/ .wti-form-high-light-class {
        background: #fef4f3;
        color: #EE473A;
    }
</style>
