<script setup>
import { ref,reactive,inject } from "vue";


const info = reactive({
  name: "张三",
  age: 18,
});
const sex = ref("男");
const number = ref(0);
const numberData = inject('numberData');
defineExpose({
  ...info,
  sex,
  number,
})

const handleSubNumber = () => {
  numberData.value--;
}

</script>

<template>
  <div>
    {{number}}
    <button @click="handleSubNumber">全局递减B</button>
  </div>
</template>

<style lang="less" scoped>
</style>
