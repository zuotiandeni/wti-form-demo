<template>
    <!--  字典下拉框（指通过数据字典获取选项）  -->
    <div :style="item.style||{}"
         :class="`form-unqiue-${item.key} ${getTextModel ? '' : 'wti-untext-box'} ${item.checkAll ? 'checkbox-height' : ''}`"
         class="form-item-box">
        <!--		<el-select style="width:100%"-->
        <!--				   v-model="val"-->
        <!--				   :disabled="getDisabled"-->
        <!--				   :placeholder="getPlaceholder(item)"-->
        <!--				   v-if="!getTextModel">-->
        <!--			<el-option v-for="option in dynamicDict[item.parentKey]"-->
        <!--					   :key="option[dynamicSelectOption.value]"-->
        <!--					   :label="option[dynamicSelectOption.label]"-->
        <!--					   :value="option[dynamicSelectOption.value]"/>-->
        <!--		</el-select>-->

        <el-checkbox v-if="item.checkAll && !getTextModel" :indeterminate="indeterminate" v-model="checkAll"
                     @change="handleCheckAllChange">全选
        </el-checkbox>
        <el-checkbox-group v-model="val" :disabled="getDisabled"
                           v-bind="bindOptions" v-if="!getTextModel">
            <el-checkbox v-for="option in dynamicDict[item.parentKey]"
                         :key="option[dynamicSelectOption.value]"
                         :label="option[dynamicSelectOption.value]">{{ option[dynamicSelectOption.label] }}
            </el-checkbox>
        </el-checkbox-group>
        <div v-else :style="item.textStyle || {}" class="form-input-text">{{ textModelValue || '-' }}</div>
    </div>
</template>

<script>
import FormMixin from './mixin';

export default {
    name: 'FormDynamicSelect',
    mixins: [FormMixin],
    data () {
        return {
            prependMsg: '',
            appendMsg: '',
            indeterminate: true
        };
    },
    computed: {
        checkAll: {
            get () {
                if (this.dynamicDict[this.item.parentKey].length > 0) {
                    const valueList = this.dynamicDict[this.item.parentKey].map(item => {
                        return item[this.dynamicSelectOption.value];
                    });
                    console.log(this.val);
                    const arr = this.val.filter(item => {
                        return valueList.indexOf(item) !== -1;
                    });
                    let checkedCount = arr.length;
                    this.indeterminate = checkedCount > 0 && checkedCount < this.dynamicDict[this.item.parentKey].length;
                    return checkedCount === this.dynamicDict[this.item.parentKey].length;
                } else {
                    return false;
                }
            },
            set () {}
        },
        // textModelValue () {
        // 	const content = this.dynamicDict[this.item.parentKey] && this.dynamicDict[this.item.parentKey].find((item) => {
        // 		return item[this.dynamicSelectOption.value] === this.val;
        // 	});
        // 	return content && content[this.dynamicSelectOption.label] || '';
        // },
        textModelValue () {
            let content = [];
            this.dynamicDict[this.item.parentKey] && this.dynamicDict[this.item.parentKey].forEach((item) => {
                if (this.val.indexOf(item[this.dynamicSelectOption.value]) >= 0) {
                    content.push(item[this.dynamicSelectOption.label]);
                }
            });
            return content.join('、') || '';
        },

        val: {
            get () {
                return this.value;
            },
            set (v) {
                this.$emit('input', v);
                this._valueLink(v);
                // 只有非子表单的情况下，才会冒泡上去数据变更
                if (this.formItemType !== 'childForm') {
                    this.statusChangeFn.valueUpdateEvent({
                        [this.item.key]: v
                    });
                } else {
                    // 如果是子表单的话，执行内置的变更
                    this.childChangeData.valueUpdateEvent();
                }
            }
        }
    },
    mounted () {},
    methods: {
        handleCheckAllChange (val) {
            if (val) {
                const selectVals = this.dynamicDict[this.item.parentKey].map(item => {
                    return item[this.dynamicSelectOption.value];
                });
                this.val = selectVals;
            } else {
                this.val = [];
            }
            this.indeterminate = false;
        }
    }
};
</script>

<style scoped lang="less">
.form-item-box {
    /deep/ .el-input {
        position: relative;
        width: 100%;
        height: 36px;

        .el-input__inner {
            position: absolute;
            width: 100%;
            height: 36px;
            line-height: 36px;
            padding-right: 10px;
            padding-left: 12px;
        }
    }
}
</style>
