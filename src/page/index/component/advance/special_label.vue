<template>
    <div>
        <h2>定义特殊的label</h2>
        <p>用一段HTML片段作为label，以应对特殊的label需求</p>
        <p>注：此处实现使用了v-html，其不会识别非原生标签，请特别注意</p>

        <h3>基本用法</h3>
<!--        label-position="top"-->
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
    </div>
</template>

<script>
    export default {
        name: 'SpecialLabel',
        data (){
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                label: '随意写',
                                htmlLabel: '<span style="color:red">自定义红色字体label</span>',
                                placeholder: '请输入',
                                type: 'date-input',
                                isText: true
                            },
                            {
                                key: 'key2',
                                label: '随意写',
                                htmlLabel: '<el-tooltip class="item" effect="dark" content="一段相对复杂的HTML -- 提示文字" placement="top-start">' +
                                    '<span>使用了el-tooltip（无效）<span/>' +
                                    '</el-tooltip>',
                                placeholder: '请输入',
                                type: 'input',
                            },
                            {
                                key: 'key2',
                                label: '随意写',
                                htmlLabel: '<span class="customize-label-style">\n' +
                                    '            自定义tooltip效果\n' +
                                    '            <span class="icon-info-wrap">\n' +
                                    '                <i class="el-icon-info"></i>\n' +
                                    '                <span class="tip-content-wrap">\n' +
                                    '                      <span class="tip-content">这是自己定义的tooltip</span>\n' +
                                    '                      <span class="triangle-style"></span>\n' +
                                    '                </span>\n' +
                                    '            </span>\n' +
                                    '\n' +
                                    '        </span>\n',
                                placeholder: '请输入',
                                type: 'input',
                            },
                            {
                                key: 'test',
                                type: 'child-form',
                                headerLabel: '人员信息',
                                childrenForm: [
                                    {
                                        key: 'name',
                                        type: 'input',
                                        label: '用户名称',
                                        htmlLabel: '<span style="color:red">用户名称</span>',
                                    },
                                ]
                            }
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
                        key: 'key1',
                        label: '随意写',
                        htmlLabel: '<span style="color:red">自定义红色字体label</span>',
                        placeholder: '请输入',
                        type: 'date-input',
                        isText: true
                    },
                    {
                        key: 'key2',
                        label: '随意写',
                        htmlLabel: '<el-tooltip class="item" effect="dark" content="一段相对复杂的HTML -- 提示文字" placement="top-start">' +
                            '<span>使用了el-tooltip（无效）<span/>' +
                            '</el-tooltip>',
                        placeholder: '请输入',
                        type: 'input',
                    },
                    {
                        key: 'key2',
                        label: '随意写',
                        htmlLabel: '<span class="customize-label-style">\\n' +
                            '            自定义tooltip效果\\n' +
                            '            <span class="icon-info-wrap">\\n' +
                            '                <i class="el-icon-info"></i>\\n' +
                            '                <span class="tip-content-wrap">\\n' +
                            '                      <span class="tip-content">这是自己定义的tooltip</span>\\n' +
                            '                      <span class="triangle-style"></span>\\n' +
                            '                </span>\\n' +
                            '            </span>\\n' +
                            '\\n' +
                            '        </span>\\n',
                        placeholder: '请输入',
                        type: 'input',
                    },
                    {
                        key: 'test',
                        type: 'child-form',
                        headerLabel: '人员信息',
                        childrenForm: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '用户名称',
                                htmlLabel: '<span style="color:red">用户名称</span>',
                            },
                        ]
                    }
                ]
            }
        ],
---
<style lang="less">
.customize-label-style {
    .icon-info-wrap {
        position: relative;
        .el-icon-info {
            color: #FEA62D;
            transform: scale(1.2);
        }
        &:hover .tip-content-wrap{
            display: block;
        }
        .tip-content-wrap {
            display: none;
            .tip-content {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                padding: .5rem 1rem;
                min-width: 10rem;
                text-align: left;
                text-align-last: left;
                transform: translateX(-50%);
                font-family: PingFangSC-Regular;
                font-size: .9rem;
                color: #FFFFFF;
                line-height: 1rem;
                font-weight: 400;
                background: rgba(0,0,0,0.75);
                box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.15);
                border-radius: 2px;
            }
            .triangle-style{
                position: absolute;
                bottom: 1rem;
                left: 50%;
                transform: translateX(-50%);
                border: .5rem solid transparent;
                border-top-color: rgba(0, 0, 0, 0.75);
            }
        }
    }
}
</style>
`
            };
        }
    };
</script>

<style lang="less">
.customize-label-style {
    .icon-info-wrap {
        position: relative;
        .el-icon-info {
            color: #FEA62D;
            transform: scale(1.2);
        }
        &:hover .tip-content-wrap{
            display: block;
        }
        .tip-content-wrap {
            display: none;
            .tip-content {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                padding: .5rem 1rem;
                min-width: 10rem;
                text-align: left;
                text-align-last: left;
                transform: translateX(-50%);
                font-family: PingFangSC-Regular;
                font-size: .9rem;
                color: #FFFFFF;
                line-height: 1rem;
                font-weight: 400;
                background: rgba(0,0,0,0.75);
                box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.15);
                border-radius: 2px;
            }
            .triangle-style{
                position: absolute;
                bottom: 1rem;
                left: 50%;
                transform: translateX(-50%);
                border: .5rem solid transparent;
                border-top-color: rgba(0, 0, 0, 0.75);
            }
        }
    }
}
</style>
