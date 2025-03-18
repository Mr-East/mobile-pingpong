<template>

    <div class="login">
      <image src="~@/static/images/login_bg.png" class="login-bg" />
      <div class="title">欢迎来到SpinScope 👋</div>
      <div class="login-button" @click="handleLogin()">登录</div>
      <div class="register-button" @click="handleRegister()">注册</div>
    </div>
 
</template>

<script lang="ts" setup>
const handleLogin = () => {
  uni.navigateTo({ url: '/pages/loginForm/loginForm' })
}
const handleRegister = () => {
  uni.navigateTo({ url: '/pages/register/register' })
}
</script>

<style lang="scss">

  
.login {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px;
  .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .login-button,
  .register-button {
    height: 50px;
    width: 90%;
    text-align: center;
    line-height: 50px;
  }
  .login-button {
    background-image: linear-gradient(to bottom, #7e92f8, #6972f0);
    border-radius: 25px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 25px;
  }
  .register-button {
    background-color: #fff;
    border-radius: 25px;
    color: #6972f0;
    font-weight: bold;
  }
  .login-bg {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
}
</style>
