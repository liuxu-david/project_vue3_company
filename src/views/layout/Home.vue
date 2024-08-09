<script setup>
import { onBeforeMount, ref, reactive } from "vue";
import { getUserInfoInterface } from "@/api/login";
import { removeItem } from "@/utils/storage";
import { useRouter } from "vue-router";
import Children from "./Children.vue"

const router = useRouter();

const childrenData = ref("");
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
const receiveDataFromChildren = (data) => {
  childrenData.value = data;
}
</script>

<template>
  <div>
    <header class="header">
      <h1>welcome to home, {{userInfo.username}}</h1>
      <button class="login_out" @click="handleLoginOut">退出登录</button>
    </header>
    <h1>home组件</h1>
    <children :message = "userInfo" @sendDataToParent = "receiveDataFromChildren"></children>
    <div class="children_data" v-if="childrenData">这是子组件传递过来的值：<h2>{{childrenData}}</h2></div>
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
</style>
