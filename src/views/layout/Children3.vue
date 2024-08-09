<script setup>

const model = defineModel();
const model2 = defineModel('modelName');
const handleSubNumber = () => {
  model2.value--;
}

</script>

<template>
  <div class="children3">
    子组件的输入框<input type="text" v-model="model">
    另一个数据：{{model2}}
    <button @click="handleSubNumber">同步递减父组件按钮</button>
  </div>
</template>

<style lang="less" scoped>
.children3{
    width: 200px;
    height: 200px;
    background-color: yellow;
    font-size: 12px;
}
</style>
