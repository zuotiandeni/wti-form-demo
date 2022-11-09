<template>
    <div>
        <el-button @click="getData">获取数据</el-button>
        <SpecialFormTable ref="formTable"
                          :text-mode="false"
                          table-title="法律合规审核"
                          :fields="fields"/>
    </div>
</template>

<script>
    import SpecialFormTable from './special_form_table';

    export default {
        components: {
            SpecialFormTable,
        },
        name: 'Test',
        data () {
            return {
                fields: [
                    {
                        label: '一、资管部门意见',
                        children: [
                            {
                                label: '1.关联交易报备：被认定为关联交易的项目，中信登关联交易报备情况 1.关联交易报备：被认定为关联交易的项目，中信登关联交易报备情况',
                                type: 'input',
                                key: 'a',
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
                                disableDefault: false,
                                // hiddenDefault: true,
                            },
                            {
                                label: '2.项目预登记',
                                type: 'dynamic-radio',
                                key: 'b',
                                parentKey: '10000',
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
                    },

                    {
                        label: '三、法律部门意见',
                        children: [
                            {
                                label: '',
                                type: 'dynamic-radio',
                                parentKey: '10005',
                                key: 'c',
                                hideLabel: true,
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
                    },
                    {
                        label: '四、测试',
                        middleHide: true,
                        children: [
                            {
                                label: '',
                                type: 'dynamic-radio',
                                parentKey: '10006',
                                key: 'd',
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
                                valueLink: [
                                    {
                                        // 下拉框的同一个值，触发的联动，都是 valueLink 里的一个元素
                                        // 这里的 value 就是该下拉框的某个值
                                        value: '10006000',
                                        linkList: [
                                            // 一个下拉框每联动一个表单元素，便在 linkList 添加一个元素
                                            {
                                                // 这里的 linkKey 是被联动元素在表单里的 key
                                                linkKey: 'a',
                                                // 当 enableLinkValue 为 true 时，表示这个配置是联动设置值的。此时 linkValue 才生效
                                                enableLinkValue: true,
                                                linkValue: '12345',
                                            }
                                        ]
                                    },
                                    {
                                        value: '10006001',
                                        linkList: [
                                            {
                                                linkKey: 'b',
                                                // enableLinkDisable 表示是否打开联动禁用
                                                enableLinkDisable: true,
                                                // linkDisable 为 true 表示设置为禁用。false 表示取消禁用
                                                linkDisable: true,
                                            }
                                        ]
                                    },
                                    {
                                        value: '10006002',
                                        linkList: [
                                            {
                                                linkKey: 'b',
                                                enableLinkDisable: true,
                                                linkDisable: false,
                                            }
                                        ]
                                    },
                                    {
                                        value: '10006003',
                                        linkList: [
                                            {
                                                linkKey: 'b',
                                                // enableLinkHidden 表示是否打开联动隐藏/显示
                                                enableLinkHidden: true,
                                                // linkHidden 为 true 表示设置为隐藏。false 表示取消隐藏
                                                // 被隐藏的元素，通过 $ref.form.validate 调用校验方法时，将不会出现在 data 里
                                                linkHidden: true,
                                            }
                                        ]
                                    },
                                    {
                                        value: '10006004',
                                        linkList: [
                                            {
                                                linkKey: 'b',
                                                enableLinkHidden: true,
                                                linkHidden: false,
                                            }
                                        ]
                                    },
                                    {
                                        value: '10006005',
                                        linkList: [
                                            {
                                                linkKey: 'c',
                                                // enableLinkRequired 表示是否打开联动必填
                                                enableLinkRequired: true,
                                                // linkRequired 为 true 表示设置为必填，false 表示取消必填
                                                linkRequired: true
                                            }
                                        ]
                                    },
                                    {
                                        value: '10006006',
                                        linkList: [
                                            {
                                                linkKey: 'c',
                                                enableLinkRequired: true,
                                                linkRequired: false
                                            }
                                        ]
                                    },
                                ],
                            }
                        ]
                    }
                ]
            };
        },
        methods: {
            getData () {
                const res = this.$refs.formTable.getData();
                console.log(res);
            }
        }
    };

</script>

<style scoped lang="less">
    @import '~common/less/config.less';

</style>
