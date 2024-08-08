<script setup>
import { ref } from "vue"
import LoginModal from "@/components/LoginModal.vue"

const loginModalFlag = ref(false)

const showLoginModal = () => {
   console.log('showLoginModal');
   loginModalFlag.value = !loginModalFlag.value;
}
</script>

<template>
  <div class="login_content">
    <button @click="showLoginModal">登录</button>
    <Transition name="fade">
          <div class="shadow" v-if="loginModalFlag" @click="showLoginModal"></div>
    </Transition>
    <div class="loginData" v-if="loginModalFlag">
        <LoginModal></LoginModal> 
    </div>
  </div>
</template>

<style lang="less" scoped>
.login_content{
  position: fixed;  
  top: 0;  
  left: 0;  
  width: 100%;  
  height: 100%;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.loginData{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
.shadow {  
  position: fixed;  
  top: 0;  
  left: 0;  
  width: 100%;  
  height: 100%;  
  z-index: 99; 
  background-color: rgba(0, 0, 0,.3); 
}  
.fade-enter-active, .fade-leave-active {  
  transition: opacity 2s;  
}  
.fade-enter-from, .fade-leave-to {  
   opacity: 0;
} 
</style>
