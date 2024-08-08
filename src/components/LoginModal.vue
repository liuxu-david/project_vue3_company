<script setup>
import { ref, reactive } from "vue";
import { handleLoginInterface } from "@/api/login.js";
import { setItem } from "@/utils/storage.js";
import { useRouter } from "vue-router";

const router = useRouter();
const isForcused = reactive({
  usernameFocused: false,
  codenameFocused: false,
  passwordFocused: false,
  authcodeFocused: false,
});
const loginData = reactive({
  username: "",
  codename: "",
  password: "",
  authcode: "",
});

const handleFocus = (flagKey) => {
  isForcused[flagKey] = true;
};
const handleBlur = (dataKey, flagKey) => {
  if (loginData[dataKey] === "") {
    isForcused[flagKey] = false;
  }
};

const handleLogin = async () => {
  const result = await handleLoginInterface(loginData);
  console.log(result);
  if (Reflect.ownKeys(result).length !== 0) {
    setItem("token", result.token);
    router.push("/home");
  }
};
</script>

<template>
  <div class="login-modal">
    <div class="border">
      <div class="border_right"></div>
    </div>
    <div class="close"></div>
    <div class="form">
      <div class="title">
        <h2>登录</h2>
        首次使用者? <span>点此开始使用</span>
      </div>
      <div class="list">
        <div
          class="tip_text"
          :class="{ tip_text_active: isForcused.usernameFocused }"
        >
          IGTB平台编号/登录名称
        </div>
        <input
          type="text"
          v-model="loginData.username"
          @focus="handleFocus('usernameFocused')"
          @blur="handleBlur('username', 'usernameFocused')"
        />
      </div>
      <div class="list">
        <div
          class="tip_text"
          :class="{ tip_text_active: isForcused.codenameFocused }"
        >
          使用者代号
        </div>
        <input
          type="text"
          v-model="loginData.codename"
          @focus="handleFocus('codenameFocused')"
          @blur="handleBlur('codename', 'codenameFocused')"
        />
      </div>
      <div class="list">
        <div
          class="tip_text"
          :class="{ tip_text_active: isForcused.passwordFocused }"
        >
          密码
        </div>
        <input
          type="password"
          v-model="loginData.password"
          @focus="handleFocus('passwordFocused')"
          @blur="handleBlur('password', 'passwordFocused')"
        />
      </div>
      <div class="list">
        <div
          class="tip_text"
          :class="{ tip_text_active: isForcused.authcodeFocused }"
        >
          验证码
        </div>
        <input
          type="text"
          v-model="loginData.authcode"
          @focus="handleFocus('authcodeFocused')"
          @blur="handleBlur('authcode', 'authcodeFocused')"
        />
      </div>
      <div class="login_button">
        <span class="btn" @click="handleLogin">基本登录</span>
        <span class="btn">双重认证登录</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-modal {
  width: 500px;
  height: 480px;
  background-color: black;

  .border {
    height: 4px;
    background-color: rgb(181, 26, 37);
    .border_right {
      width: 100px;
      height: 4px;
      background-color: rgb(124, 135, 142);
    }
  }
  .form {
    color: white;
    padding: 0 10px;
    .title {
      text-align: left;
      margin: 50px 10px 20px 0px;
      h2 {
        margin-bottom: 5px;
      }
      span {
        font-weight: 700;
      }
    }
    .list {
      height: 50px;
      position: relative;
      margin-bottom: 20px;
      input {
        position: absolute;
        bottom: 0;
        left: 0;
        border: none;
        width: 100%;
        background-color: transparent;
        outline: none;
        border-bottom: 1px solid white;
        color: white;
        box-sizing: border-box;
      }
      .tip_text {
        position: absolute;
        top: 15px;
        left: 0;
        text-align: left;
      }
      .tip_text_active {
        top: 0;
        font-size: 12px;
        font-weight: 700;
      }
    }
    .login_button {
      text-align: right;
      margin-top: 30px;
      :first-child {
        margin-right: 20px;
      }

      .btn {
        height: 40px;
        border: 1px solid white;
        padding: 12px 40px;
        border-radius: 5px;
        cursor: pointer;
      }
      .btn:hover {
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
