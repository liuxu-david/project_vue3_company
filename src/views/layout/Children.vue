<script setup>
import { inject } from "vue"


defineProps({
  message: String
})
const numberData = inject('numberData');
const emits = defineEmits(['sendDataToParent']);

const emitDataToParent = () => {
  emits('sendDataToParent', 'childrenData')
}
const handleSubNumber = () => {
  numberData.value--;
}
</script>

<template>
  <div class="children">
    <h1>子组件</h1>
    <div>父组件传过来的值为<h3>{{message}}</h3></div>
    <button @click="emitDataToParent">点击发送内容给父组件</button>
    <button @click="handleSubNumber">全局递减A</button>
  </div>
</template>

<style lang="less" scoped>
.children{
    width: 200px;
    height: 200px;
    background-color: skyblue;
    font-size: 12px;
    button{
        width: 160px;
        height: 30px;
    }
}
</style>
