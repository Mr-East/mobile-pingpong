<template>
  <div class="register">
    <div class="welcome">Hello there 👋</div>
    <div class="tips">请输入你的邮箱和密码来创建账号</div>
    <template>
      <view class="">
        <uni-forms :modelValue="formData" :rules="rules" validateTrigger="blur">
          <uni-forms-item name="email">
            <div class="label">邮箱</div>
            <uni-easyinput
              class="input"
              suffix-icon="email"
              type="text"
              v-model="formData.email"
              placeholder="请输入邮箱"
            />
          </uni-forms-item>
          <uni-forms-item name="password">
            <div class="label">密码</div>
            <uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
          </uni-forms-item>
        </uni-forms>
        <div class="tologin">
          <span>已有账号？</span>
          <span style="color: #201d67; font-weight: bold" @click="toLogin()">前往登录</span>
        </div>
        <button class="submit" @click="handleRegister()">注册账号</button>
      </view>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  email: '',
  password: '',
})
const rules = {
  // 对name字段进行必填验证
  email: {
    // name 字段的校验规则
    rules: [
      // 校验 name 不能为空
      {
        required: true,
        errorMessage: '请填写邮箱',
      },
    ],

    validateTrigger: 'blur',
  },
  password: {
  
    rules: [
   
      {
        required: true,
        errorMessage: '密码不为空',
      },
    ],

    validateTrigger: 'blur',
  },
}
const handleRegister = () => {
  uni.navigateTo({
    url: '/pages/loginForm/loginForm',
  })
}
const toLogin = () => {
  uni.navigateTo({
    url: '/pages/loginForm/loginForm',
  })
}
</script>

<style lang="scss" scoped>
.register {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .tologin {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    line-height: 160%;
  }
  .welcome {
    font-size: 32px;
    line-height: 160%;
    margin-bottom: 16px;
    font-weight: bold;
    color: #212121;
  }
  .tips {
    color: #212121;
    font-size: 18px;
    line-height: 160%;
    margin-bottom: 24px;
  }

  .label {
    line-height: 160%;
    font-size: 16px;
    color: #212121;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .submit {
    background-image: linear-gradient(to bottom, #7e92f8, #6972f0);
    border-radius: 25px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
  }
}
</style>
