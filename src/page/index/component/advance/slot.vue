<template>
    <div class="formitem-box">
        <h2>插槽 Slot</h2>
        <p>虽然我们已经有标准化的表单组件了，但偶尔，产品经理还是会提出一些奇怪的需求导致我们无法满足。例如，加个上传图片的按钮</p>
        <p>在这种情况下，我们只能整出来我们的终极方案——【插槽】。</p>
        <p>注意：插槽的值、联动等，将不被表单组件管理，表单组件只给插槽提供一个位置空间。</p>
        <p>插槽分为三种：</p>
        <p>1、栅格插槽：跟栅格布局同步的组件，他使用正常的 label、span 等属性，只是原本是表单组件的地方，使用了自定义的内容；</p>
        <p>2、独立插槽：假如需要使用表格，那么就是独立插槽立功的时间了。他独立占一整行，高度自适应插槽内容本身高度，不使用 label 等东西，内容和值也由你自己管理。</p>
        <p>3、子组件插槽：即前两种在子组件里的版本。但目前尚不支持，如果有需要支持的人，请联系开发者提出需求。</p>
<!--        <p>-->
<!--            本页源码地址：<a-->
<!--            href="https://github.com/qq20004604/wti-form-demo/blob/main/src/page/home/component/advance/slot.vue">https://github.com/qq20004604/wti-form-demo/blob/main/src/page/home/component/advance/slot.vue</a>-->
<!--        </p>-->

        <h3>栅格插槽</h3>
        <p>栅格插槽是最普通的插槽，主要是实现一些不支持的表单组件样式。例如，你想使用滑块组件。</p>
        <p>
            考虑到有些小可爱会想自定义 label 内容，例如想添加一个 required 的小红点，因此支持自定义 label。
            <span style="color:red;">需要注意的是，使用自定义 label 的时候，支持 html 语法，因此要注意安全</span>
        </p>
        <p>具体可使用的属性有：class、style、label、htmlLabel</p>
        <p>当然，无论你使用哪种，其规则和数值，都需要你自己管理</p>

        <wti-form :fields="fields1"
                  ref="form1">
            <template #a>
                <el-button>插槽按钮</el-button>
            </template>
            <template #b>
                <el-link type="primary">插槽链接</el-link>
            </template>
            <template #c>
                <el-switch
                    v-model="value1"
                    active-text="按月付费"
                    inactive-text="按年付费"/>
            </template>
        </wti-form>
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

        <h3>独立插槽</h3>
        <p>独立插槽相对于栅格插槽来说，属于独立占一整行，并不能像栅格插槽那样，和其他组件混在一起。因此适合做例如 table 等复杂组件</p>
        <p>在下面示例里，将一个 table 表格插入到表单组件中</p>
        <p>注意，这里表单无论样式还是数据，都由父组件，而非表单组件，来管理</p>

        <wti-form :fields="fields2"
                  ref="form2">
            <template #mytable>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                    <el-table-column prop="date"
                                     label="日期"
                                     width="180"/>
                    <el-table-column prop="name"
                                     label="姓名"
                                     width="180"/>
                    <el-table-column prop="address"
                                     label="地址"/>
                </el-table>
            </template>
        </wti-form>
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

        <h3>子表单插槽</h3>
        <p>暂不支持。如果你很需要，请联系开发者。</p>
    </div>
</template>

<script>

    export default {
        name: 'Slot',
        data () {
            return {
                fields1: [
                    {
                        label: '用户基本信息',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '工具人输入框'
                            },
                            {
                                type: 'slot',
                                name: 'a',
                                label: '普通插槽组件'
                            },
                            {
                                type: 'slot',
                                name: 'b',
                                htmlLabel: '<span style="color:red">自定义红色字体label</span>'
                            },
                            {
                                type: 'slot',
                                name: 'c',
                                span: 24,
                                label: '这个滑块组件的宽度，是 span=24'
                            },
                        ]
                    },
                ],

                value1: '1',

                code1: `<wti-form :fields="fields1"
                ref="form1">
    <template #a>
        <el-button>插槽按钮</el-button>
    </template>
    <template #b>
        <el-link type="primary">插槽链接</el-link>
    </template>
    <template #c>
        <el-switch
            v-model="value1"
            active-text="按月付费"
            inactive-text="按年付费"/>
    </template>
</wti-form>
——————————
fields1: [
    {
        label: '用户基本信息',
        children: [
            {
                key: 'name',
                type: 'input',
                label: '姓名'
            },
            {
                type: 'slot',
                name: 'a',
                label: '普通插槽组件'
            },
            {
                type: 'slot',
                name: 'b',
                customizeLabel: '<span style="color:red">自定义红色字体label</span>'
            },
            {
                type: 'slot',
                name: 'c',
                span: 24,
                label: '这个滑块组件的宽度，是 span=24'
            },
        ]
    },
],

value1: '1',`,

                fields2: [
                    {
                        label: '用户基本信息',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '工具人输入框一号'
                            },
                            {
                                type: 'slot-single',
                                name: 'mytable',
                            },
                            {
                                key: 'name',
                                type: 'input',
                                label: '工具人输入框二号'
                            },
                        ]
                    },
                ],

                tableData: [ {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                } ],

                code2: `<wti-form :fields="fields2"
                  ref="form2">
    <template #mytable>
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column prop="date"
                             label="日期"
                             width="180"/>
            <el-table-column prop="name"
                             label="姓名"
                             width="180"/>
            <el-table-column prop="address"
                             label="地址"/>
        </el-table>
    </template>
</wti-form>
——————————
fields2: [
    {
        label: '用户基本信息',
        children: [
            {
                key: 'name',
                type: 'input',
                label: '工具人输入框一号'
            },
            {
                type: 'slot-single',
                name: 'mytable',
            },
            {
                key: 'name',
                type: 'input',
                label: '工具人输入框二号'
            },
        ]
    },
],

tableData: [ {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
}, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
}, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
} ],`
            };
        },
        methods: {
            tableRowClassName ({rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
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

        .el-table /deep/ .warning-row {
            background: oldlace;
        }

        .el-table /deep/ .success-row {
            background: #f0f9eb;
        }
    }
</style>
