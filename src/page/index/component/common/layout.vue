<template>
    <div class="formitem-box">
        <h2>布局配置 Layout</h2>
        <p>整体的布局思路是：</p>
        <p>1. 全局布局设置 + 单个表单元素的布局设置结合</p>
        <p>2. 设立优先级序列，根据优先级判断每个表单元素的宽度，方便复用</p>
        <p>3. 支持特殊布局设置，支持特殊需求下，表单元素换行显示</p>

        <h3>宽度设置</h3>
        <p>表单元素的 span 和 size，都可以设置宽度。</p>
        <p>一整行宽度为 24，同一行的元素加起来宽度如果超过 24，则最后一个元素会被自动放入下一行计算</p>
        <p>如以下示例里，第一、二个元素宽度是 6+12，第三个元素宽度为 18，总和加起来超过 24，于是第三个元素会自动放到第二行。</p>

        <wti-form ref="form1"
                  :fields="fields1"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code1 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>


        <h3>布局优先级</h3>
        <p>采用：组件 span > 表单全局宽度设置 > 组件 size > 默认 12 的设置</p>
        <p>方便复用，也方便特殊化设置。（注意：子表单的宽度必然是 24）</p>
        <p>
            以下面为例，会发现，未设置全局宽度时，各个组件按自己的宽度来。而设置了全局宽度时，全局宽度只会影响设置 size 属性的元素，
            而不会影响设置 span 属性的元素
        </p>
        <p>
            选择全局宽度：
            <el-select v-model="form2Width">
                <el-option label="未设置全局宽度" value=""/>
                <el-option label="6" value="6"/>
                <el-option label="12" value="12"/>
                <el-option label="18" value="18"/>
                <el-option label="24" value="24"/>
            </el-select>
        </p>
        <wti-form ref="form2"
                  :fields="fields2"
                  :form-item-col="form2Width"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code2 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>


        <h3>换行</h3>
        <p>在某些情况下，我们有特殊的需求：</p>
        <p>1、要求每个元素必须位于某一行行首第一个元素（行首元素设置 nextRowFirst 为 true ）；</p>
        <p>2、要求下个元素必须位于某一行第一个元素（行末元素设置 currentRowLast 为 true ）；</p>

        <wti-form ref="form3"
                  :fields="fields3"/>
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
        name: 'Layout',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '我的宽度span 6',
                                span: 6
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: '我的宽度span 12',
                                span: 12
                            },
                            {
                                key: 'key3',
                                type: 'input',
                                label: '我的宽度size 18',
                                size: 18
                            },
                            {
                                key: 'key4',
                                type: 'input',
                                label: '我的宽度size 24',
                                size: 24
                            },
                        ]
                    }
                ],

                code1: `<wti-form  ref="form1"
                :fields="fields1"/>
---
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '我的宽度 6',
                span: 6
            },
            {
                key: 'key2',
                type: 'input',
                label: '我的宽度 12',
                span: 12
            },
            {
                key: 'key3',
                type: 'input',
                label: '我的宽度 18',
                size: 18
            },
            {
                key: 'key4',
                type: 'input',
                label: '我的宽度 24',
                size: 24
            },
        ]
    }
]`,

                form2Width: 12,
                fields2: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: 'span: 6',
                                span: 6
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: 'span: 12',
                                span: 12
                            },
                            {
                                key: 'key3',
                                type: 'input',
                                label: 'size: 18',
                                size: 18
                            },
                            {
                                key: 'key4',
                                type: 'input',
                                label: 'size: 24',
                                size: 24
                            },
                        ]
                    }
                ],

                code2: `<wti-form  ref="form2"
                :fields="fields2"
                :form-item-col="form2Width"/>
---
fields2: [
    {
        children: [
            {
                key: 'key1',
                type: 'input',
                label: 'span: 6',
                span: 6
            },
            {
                key: 'key2',
                type: 'input',
                label: 'span: 12',
                span: 12
            },
            {
                key: 'key3',
                type: 'input',
                label: 'size: 18',
                size: 18
            },
            {
                key: 'key4',
                type: 'input',
                label: 'size: 24',
                size: 24
            },
        ]
    }
]`,


                fields3: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: 'span: 6',
                                span: 6
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: '强制当前元素行首',
                                span: 6,
                                nextRowFirst: true
                            },
                            {
                                key: 'key3',
                                type: 'input',
                                label: '强制下个元素换行',
                                span: 6,
                                currentRowLast: true
                            },
                            {
                                key: 'key4',
                                type: 'input',
                                label: 'span: 6',
                                span: 6
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
                key: 'key1',
                type: 'input',
                label: 'span: 6',
                span: 6
            },
            {
                key: 'key2',
                type: 'input',
                label: '强制当前元素行首',
                span: 6,
                nextRowFirst: true
            },
            {
                key: 'key3',
                type: 'input',
                label: '强制下个元素换行',
                span: 6,
                currentRowLast: true
            },
            {
                key: 'key4',
                type: 'input',
                label: 'span: 6',
                span: 6
            },
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
