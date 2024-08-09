<script setup>
import { onBeforeMount, ref, reactive, provide } from "vue";
import { getUserInfoInterface } from "@/api/login";
import { removeItem } from "@/utils/storage";
import { useRouter } from "vue-router";
import Children from "./Children.vue"
import Children2 from "./Children2.vue"
import Children3 from "./Children3.vue"

const router = useRouter();

const childrenData = ref("");
const children2Ref = ref(null);
const numberData = ref(100)
const parentInputValue = ref("")
let userInfo = reactive({
  username:""
});

onBeforeMount(async () => {
  const { username } = await getUserInfoInterface();
  userInfo.username = username;
  console.log(userInfo);
})

const handleLoginOut = () => {
  removeItem("token");
  router.push("/login");
}
const handleNavigateToSlot = ()=>{
  router.push("/slot")
}
const receiveDataFromChildren = (data) => {
  childrenData.value = data;
}
const handleAddCounter = ()=>{
  children2Ref.value.number++;
  console.log(children2Ref.value.name);
  console.log(children2Ref.value.sex);
  
}
provide("numberData",numberData);
</script>

<template>
  <div>
    <header class="header">
      <h1>welcome to home, {{userInfo.username}}</h1>
      <button @click="handleNavigateToSlot">跳转到插槽练习页面</button>
      <button class="login_out" @click="handleLoginOut">退出登录</button>
    </header>
    <h1>home组件</h1>
    <children :message = "userInfo" @sendDataToParent = "receiveDataFromChildren"></children>
    <div class="children_data" v-if="childrenData">这是子组件传递过来的值：<h2>{{childrenData}}</h2></div>
    <children2 ref="children2Ref"></children2>
    <div class="children2">
      <h2>子组件2{{children2Ref}}</h2>
      <button @click="handleAddCounter">递增</button>
    </div>
    <div>这个是操作跨组件间通信例子,全局数据<h2>{{numberData}}</h2></div>
    <div>
      父组件的输入框<input type="text" v-model="parentInputValue">
      <children3 v-model="parentInputValue" v-model:modelName="numberData"></children3>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // text-align: center;
  .login_out {
    margin-right: -30px;
  }

}
.children_data {
  width: 200px;
}
.children2{
    width: 200px;
    height: 200px;
    background-color: skyblue;
    font-size: 12px;
}
</style>
