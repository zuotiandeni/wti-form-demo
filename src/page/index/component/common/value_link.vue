<template>
    <div class="formitem-box">
        <h2>数值联动 ValueLink</h2>
        <p>数值联动分为：常规联动、自定义表单联动</p>

        <h3>常规数值联动</h3>
        <p>常规数值联动指表单元素自带配置的联动。</p>
        <p>【输入搜索下拉框】支持 autoCompleteKeys 属性。</p>
        <p>效果是当选择某一项时，可以将该项其他属性的值同样回填的表单元素里</p>
        <p>（具体可以参考文档里【输入搜索下拉框】的【自动带入】一节）</p>
        <p>————————</p>
        <p>【普通下拉框】【字典下拉框】【单选框】支持 valueLink 属性。</p>
        <p>效果是当选择某一项时，联动设置其他元素【设置值】【禁用/取消禁用】【隐藏/取消隐藏】【必填/取消必填】</p>
        <p>（具体参考文档里【表单元素通用属性】的【表单联动】一节）</p>

        <el-divider/>

        <h3>自定义表单联动</h3>
        <p>虽然以上联动，已经能满足大部分需求了。但总有一些特殊场景无法解决</p>
        <p>1. 希望表单外某个输入框/文本块，他的值和表单某个输入框的值保持同步；</p>
        <p>2. 希望表单里某个元素的值符合某个条件时，对表单里或者表单外做些什么；</p>
        <p>总而言之，产品经理总能给你提出一些奇奇怪怪的需求。这个时候难道我就满足不了他们了么？</p>
        <p>当然不可能！</p>

        <h3>值的获取</h3>
        <p>对于这种特殊情况，我做了一个特殊处理：</p>
        <p>所有表单元素（除子表单元素）的值触发更新后，他都会执行冒泡一个事件 this.$emit("updateValue", params) </p>
        <p>这个 params 的 key 是变动元素的 key，value 是数值变动后的 value</p>
        <p>通过监听这样的事件，我们可以获取到值的实时更新信息</p>

        <wti-form ref="form1"
                  :fields="fields1"
                  @updateValue="updateEvent"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code1 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>值的设置</h3>
        <p>除了获取值以外，还支持对表单的值、以及表单元素的状态进行操作。对此，提供了以下几个 API 来实现</p>
        <p>设置元素的值：this.$refs.form.updateFormData({key1: value1, key2: value2})</p>
        <p>设置元素禁用：this.$refs.form.setElementDisable(key, beDisable)</p>
        <p>设置元素禁用：this.$refs.form.setElementHidden(key, beDisable)</p>
        <p>设置元素必填：this.$refs.form.setElementRequired(key, beRequired)</p>

        <wti-form ref="form2"
                  :fields="fields2"/>
        <el-button @click="setValue">设置输入框的值为 1234</el-button>
        <el-button @click="setDisable">设置输入框禁用/非禁用</el-button>
        <el-button @click="setHidden">设置输入框隐藏/非隐藏</el-button>
        <el-button @click="setRequired">设置输入框必填/非必填</el-button>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code2 }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'ValueLink',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '值的更新，会触发 $message 事件',
                                span: 6
                            },
                        ]
                    }
                ],

                code1: `<wti-form  ref="form1"
                :fields="fields1"
                @updateValue="updateEvent"/>
---
fields1: [
    {
        children: [
            fields1: [
                {
                    children: [
                        {
                            key: 'key1',
                            type: 'input',
                            label: '值的更新，会触发 $message 事件',
                            span: 6
                        },
                    ]
                }
            ]
        ]
    }
]
---
updateEvent (data) {
    const key = Object.keys(data)[0];
    this.$message.info(\`key:【\${key}】, 更新了，值为：【\${data[key]}】\`);
},`,


                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                type: 'input',
                                label: '工具人输入框',
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
                disable: false,
                hide: false,
                required: false
            };
        },
        methods: {
            updateEvent (data) {
                const key = Object.keys(data)[0];
                this.$message.info(`key:【${key}】, 更新了，值为：【${data[key]}】`);
            },

            setValue () {
                this.$refs.form2.updateFormData({key2: '1234'});
            },
            setDisable () {
                this.disable = !this.disable;
                this.$refs.form2.setElementDisable('key2', this.disable);
            },
            setHidden () {
                this.hide = !this.hide;
                this.$refs.form2.setElementHidden('key2', this.hide);
            },
            setRequired () {
                this.required = !this.required;
                this.$refs.form2.setElementRequired('key2', this.required);
            },
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
