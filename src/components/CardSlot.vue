<script setup>

</script>

<template>
  <div class="card_slot">
    <div class="header">
        <slot name="header">头部插槽</slot>
    </div>
    <div class="content" v-if="$slots.content">
        <slot name="content">内容插槽</slot>
    </div>
    <div class="footer" v-if="$slots.footer">
        <slot name="footer">底部插槽</slot>
    </div>
  </div>
</template>

<style scoped>
.content{
    color: red;

}
.footer{
    color: blue;
}
</style>
