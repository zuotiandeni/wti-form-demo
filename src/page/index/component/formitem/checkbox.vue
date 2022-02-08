<template>
  <div class="formitem-box">
    <h2>多选框 Checkbox</h2>
    <p>多选框，很常见的表单组件</p>

    <h3>基本用法</h3>
    <p>一个简简单单普普通通的多选框</p>
    <wti-form ref="form1"
              :fields="fields1"/>
    <div class="submit-line">
      <el-button type="primary" @click="submit('form1')">提交按钮</el-button>
      <span class="tips">请查看控制台看提交结果</span>
    </div>

    <h3>禁用全部/禁用某个选项</h3>
    <wti-form ref="form2"
              :fields="fields2"/>
    <wti-form ref="form3"
              :fields="fields3"/>

    <h3>开启全选功能</h3>
    <wti-form ref="form2"
              :fields="fields4"/>
    <h3>限制选中的最大和最小数量</h3>
    <p>请注意：如果你设置的min不为1，那你需要提供默认值，否则会导致多选框点击无效</p>
    <p>举个栗子：如果你设置的min为3那你提供的默认值长度至少需要为2位</p>
    <wti-form ref="form5"
              :fields="fields5"/>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data () {
    return {
      fields1: [
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
              ],
              key: 'key1',
              label: '一个单选框',
              type: 'checkbox'
            }
          ]
        }
      ],
      fields2:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                  disabled: true,
                },
              ],
              key: 'key1',
              label: '一个单选框',
              type: 'checkbox'
            }
          ]
        }
      ],
      fields3:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
              ],
              disableDefault: true,
              key: 'key1',
              label: '一个单选框',
              type: 'checkbox'
            }
          ]
        }
      ],
      fields4:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
              ],
              isIndeterminate: true,
              key: 'key1',
              label: '一个单选框',
              type: 'checkbox'
            }
          ]
        }
      ],
      fields5:[
        {
          children: [
            {
              options: [
                {
                  value: 'value_a',
                  label: 'label A'
                },
                {
                  value: 'value_b',
                  label: 'label B',
                },
                {
                  value: 'value_c',
                  label: 'label C',
                },
                {
                  value: 'value_d',
                  label: 'label D',
                },
                {
                  value: 'value_e',
                  label: 'label E',
                },
                {
                  value: 'value_f',
                  label: 'label F',
                },
              ],
              min: 1,
              max: 4,
              key: 'key1',
              label: '一个单选框',
              type: 'checkbox'
            }
          ]
        }
      ]
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
