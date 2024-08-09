<script setup>
import { ref, computed } from 'vue'
import CardSlot from "@/components/CardSlot.vue"

const slotFlag = ref(false)
const soltName = computed(() => slotFlag.value ? 'content' : 'footer');
const handleSolt = () => {
  slotFlag.value = !slotFlag.value
}

</script>
O
<template>
  <div>
    <button @click="handleSolt">动态决定渲染content还是footer</button>
    <CardSlot>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
       <template #[soltName]>
        <h1>动态替换的区域，content文字为红色，footer文字为蓝色</h1>
      </template>
    </CardSlot>
  </div>
</template>

<style scoped>
</style>
