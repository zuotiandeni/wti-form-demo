<template>
	<!-- 普通输入框 -->
	<div :style="item.style||{}"
		 :class="`form-unqiue-${item.key} ${getTextModel ? '' : 'wti-untext-box'}`"
		 class="form-input-box form-item-box">
		<el-checkbox v-if="item.checkAll && !getTextModel" :indeterminate="indeterminate" v-model="checkAll"
					 @change="handleCheckAllChange">全选
		</el-checkbox>
		<el-checkbox-group @change="handleCheckedCitiesChange" v-model="val" :disabled="getDisabled"
						   v-bind="bindOptions" v-if="!getTextModel">
			<el-checkbox :border="item.checkboxBorder || opt.checkboxBorder" v-if="!item.isCheckboxButton"
						 v-for="opt in item.options" :key="opt.value" :disabled="opt.disabled"
						 :label="opt.value">{{ opt.label }}
			</el-checkbox>

			<el-checkbox-button v-if="item.isCheckboxButton" v-for="opt in item.options" :key="opt.value"
								:disabled="opt.disabled"
								:label="opt.value">{{ opt.label }}
			</el-checkbox-button>
		</el-checkbox-group>
		<div v-else :style="item.textStyle||{}" class="form-input-text">{{ textModelValue || '-' }}</div>
	</div>
</template>

<script>
import FormMixin from './mixin';

export default {
	name: 'FormRadio',
	mixins: [FormMixin],
	data () {
		return {
			prependMsg: '',
			appendMsg: '',
			checkAll: false,
			indeterminate: true
		};
	},
	computed: {
		textModelValue () {
			// const content = this.item.options &&
			const content = this.item.options.map((item) => {
				if (this.val.indexOf(item.value) >= 0) {
					return item.label;
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
	mounted () {
		// 用于勾选全选按钮
		if(this.item.checkAll){
			const valueList = this.item.options.map(item=>{
				return item.value;
			})
			const arr = this.val.filter(item=>{
				return valueList.indexOf(item) !== -1;
			});
			this.handleCheckedCitiesChange(arr);
		}
	},
	methods: {
		handleCheckAllChange (val) {
			// this.checkedCities = val ? this.item.options : [];
			// this.val = val ? this.item.options : [];
			if (val) {
				const selectVals = this.item.options.map(item => {
					return item.value;
				});
				this.val = selectVals;
			} else {
				this.val = [];
			}
			this.indeterminate = false;
		},
		handleCheckedCitiesChange (value) {
			let checkedCount = value.length;
			this.checkAll = checkedCount === this.item.options.length;
			this.indeterminate = checkedCount > 0 && checkedCount < this.item.options.length;
		}
	}
};
</script>

<style scoped lang="less">


.form-input-box /deep/ .el-input-group__prepend, .single-input .form-input-box /deep/ .el-input-group__append {
	padding: 0 10px;
}
</style>
