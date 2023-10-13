<template>
    <!-- 输入搜索选择框 -->
    <div :style="item.style||{}"
         :class="`form-unqiue-${item.key} ${getTextModel ? '' : 'wti-untext-box'}`"
         class="form-item-box">
        <el-select
            style="width:100%"
            v-bind="bindOptions"
            v-if="!getTextModel"
            v-model.trim="val"
            :placeholder="getPlaceholder(item)"
            @blur="e => onBlur(item, e)"
            @focus="e => onFocus(item, e)"
            filterable
            remote
            :clearable="getClearableStatus(true)"
            :remote-method="remoteMethod"
            @change="handleSelectChange"
            :loading="loading">
            <!--    以选项的 label 作为 value 的值（两者取值一致）        -->
            <el-option
                v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value"/>
        </el-select>
        <div v-else :class="exposeSpecificClass(parentKey,childFormIndex,item.key)" :style="item.textStyle||{}" class="form-input-text">{{ val || '-' }}</div>
    </div>
</template>

<script>
import FormMixin from './mixin';

export default {
    name: 'FormRemoteSelect',
    mixins: [ FormMixin ],
    data (){
        return {
            loading: false,
            options: [],
        };
    },
    methods: {
        remoteMethod (queryString) {
            if (queryString !== '') {
                this.loading = true;
                // 1、如果定义了自定义的方法，那么则执行自定义的方法
                if (this.item.remoteMethod) {
                    // 1.1、在自定义方法中，应该将this.loading改为false，并且对options进行赋值操作
                    this.item.remoteMethod(queryString, this);
                    return;
                }
                const payload = {
                    [this.item.searchKey]: queryString
                };
                if (this.item.otherSearchKeys && this.item.otherSearchKeys.length > 0) {
                    this.item.otherSearchKeys.forEach(obj => {
                        payload[obj.key] = obj.value;
                    });
                }
                // 2、否则执行的应该是默认的方法
                this.getSpecialAxios().post(this.item.searchUrl, payload).then(res => {
                    // 兼容性处理
                    let data;
                    if (res.request && res.headers) {
                        data = res.data;
                    } else {
                        data = res;
                    }
                    if (data.code === 200) {
                        if (data.data) {
                            this.options = data.data.map(item => {
                                if (this.item.mainShowKey) {
                                    return {
                                        label: item[this.item.mainShowKey],
                                        value: item[this.item.mainShowKey],
                                        item
                                    };
                                } else {
                                    return {
                                        label: item[this.item.remoteSelectLinkKeys[0]],
                                        value: item[this.item.remoteSelectLinkKeys[0]],
                                        item
                                    };
                                }
                            });
                            this.loading = false;
                        } else {
                            this.options = [];
                            this.loading = false;
                        }
                    } else {
                        this.options = [];
                        this.loading = false;
                        this.$message.error(data.msg || '无匹配数据');
                    }
                }).catch(() => {
                    this.options = [];
                    this.$message.error('服务器错误');
                    this.loading = false;
                });
            } else {
                this.options = [];
            }
        },
        // 选中后的处理方法
        handleSelectChange (selectedValue) {
            const selectedItem = this.options.filter(item=>{
                return item.value === selectedValue;
            });
            if (selectedItem.length <= 0) {
                return;
            }
            const payload = {};
            // 将需要更新的数据的值，添加到 payload 里
            if (this.item.remoteSelectLinkKeys && this.item.remoteSelectLinkKeys.length > 0) {
                this.item.remoteSelectLinkKeys.forEach(key => {
                    payload[key] = selectedItem[0].item[key];
                });
            }
            // 再调用方法，推到 wti_form 这个组件中
            this.statusChangeFn.updateFormData(payload);
            
            // 业务层自定义的
            if (this.item.onSelect) {
                this.item.onSelect(selectedItem[0], this.randomId);
            }
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
            vertical-align: top;
            height: 36px;
            line-height: 36px;
        }
    }
}
</style>
