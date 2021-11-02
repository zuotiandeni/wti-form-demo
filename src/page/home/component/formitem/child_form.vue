<template>
    <div class="formitem-box">
        <h2>子表单 ChildForm</h2>
        <p>在某些情况下，我们需要在表单内嵌套一个子表单，那么使用他就 ok 了</p>
        <p>子表单元素的使用方法，和普通表单基本毫无区别。这是相对来说，增加了【新增】【删除】【独立于子表单的收起/展开】，并且提交的时候，该属性以数组的形式提交。</p>

        <h3>一个标准的子表单组件</h3>
        <wti-form :fields="fields"
                  ref="form1"
                  :all-disabled="loading1"
                  :dynamic-select-option="dynamicSelectOption"/>

        <div class="submit-line">
            <el-button type="primary" @click="submitForm1">提交</el-button>
            <span class="tips">（下个表单将反显本表单的数据）</span>
        </div>
        <el-divider/>
    </div>
</template>

<script>
    export default {
        name: 'ChildForm',
        data () {
            return {
                fields: [
                    {
                        label: '用户信息登记',
                        children: [
                            {
                                key: 'tool',
                                type: 'input',
                                label: '工具人输入框，占个位，也可以不占位',
                            },
                            {
                                // key
                                key: 'testInput',
                                // 小型表单
                                type: 'child-form',
                                // 每个小表单头的文字部分，以及新增按钮的部分
                                headerLabel: '面签人员信息',
                                // 里面是表单的每一项，写法和外面的没区别
                                childrenForm: [
                                    {
                                        key: 'name',
                                        type: 'input',
                                        label: '用户名称',
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
                                            },
                                        ],
                                        key: 'gender',
                                        label: '性别',
                                        type: 'radio'
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
                                            },
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
                                        type: 'auto-complete-input',
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
                                        type: 'hour-minute-input',
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
                                        label: '存款利率',
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
                                    },
                                ]
                            },
                        ]
                    }
                ],
            };
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

</style>
