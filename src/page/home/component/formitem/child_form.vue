<template>
    <div class="formitem-box">
        <h2>子表单 ChildForm</h2>
        <p>在某些情况下，我们需要在表单内嵌套一个子表单，那么使用他就 ok 了</p>
        <p>子表单元素的使用方法，和普通表单基本毫无区别。这是相对来说，增加了【新增】【删除】【独立于子表单的收起/展开】，并且提交的时候，该属性以数组的形式提交。</p>
    </div>
</template>

<script>
    export default {
        name: 'ChildForm'
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

</style>
