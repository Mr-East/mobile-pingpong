<template>
  <div class="home">
    <image class="home-logo" src="@/static/images/home_logo.png" mode="scaleToFill" />
    <div class="welcome-title">
      <span>欢迎来到 SpinScope</span><br />
      <span>👋</span>
    </div>
    <div class="tip">
      <span>点击开始记录，选择上传视频或者拍摄视频</span>
      <br />
      <span>进行乒乓球运动记录分析</span>
    </div>
    <div class="begin_button">
      <uni-icons type="camera" size="24" color="#fff"></uni-icons>
      <span>开始记录</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-logo {
    height: 150px;
    width: 138px;
  }
  .welcome-title {
    line-height: 160%;
    font-size: 32px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
  }

  .tip {
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 18px;
    color: #616161;
    text-align: center;
    line-height: 160%;
  }
}

.begin_button {
  display: flex;
  align-items: center; // 垂直居中
  justify-content: center;
  height: 50px;
  width: 90%;
  gap: 8px;

  background-image: linear-gradient(to bottom, #7e92f8, #6972f0);
  border-radius: 25px;
  color: #fff;
  margin-bottom: 25px;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  uni-icons {
    vertical-align: middle; // 覆盖组件默认对齐
    line-height: 1; // 清除图标自带行高影响
  }
}
</style>
