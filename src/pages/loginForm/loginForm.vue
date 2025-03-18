<template>
  <div class="register">
    <div class="welcome">Welcome back 👋</div>
    <div class="tips">请输入你的邮箱和密码进行登录</div>
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
          <span style="color: #201d67; font-weight: bold" @click="toReSetPassword()"
            >忘记密码？</span
          >
          <div>
            <span>没有账号？</span>
            <span style="color: #201d67; font-weight: bold" @click="toRegister()">前往注册</span>
          </div>
        </div>
        <button class="submit" @click="handleLogin()">登录</button>
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
    // name 字段的校验规则
    rules: [
      // 校验 name 不能为空
      {
        required: true,
        errorMessage: '密码不为空',
      },
    ],

    validateTrigger: 'blur',
  },
}
const toReSetPassword = () => {}
const handleLogin = () => {
  uni.showLoading({
    title: '登录中...',
  })
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({
      title: '登录成功',
      icon: 'success',
    })
    uni.switchTab({
      url: '/pages/home/home',
    })
  }, 1000)
}
const toRegister = () => {
  uni.navigateTo({
    url: '/pages/register/register',
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
    flex-direction: column;
    align-items: center;
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
