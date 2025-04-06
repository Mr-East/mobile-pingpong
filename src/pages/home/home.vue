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
    <div class="begin_button" @click="handlePopup()">
      <uni-icons type="camera" size="24" color="#fff"></uni-icons>
      <span>开始记录</span>
    </div>

    <uni-popup ref="recordPopup" type="bottom" :safe-area="false">
      <div class="popup-content">
        <div class="tip">
          <span>选择记录方式 </span>
        </div>
        <div class="options">
          <div class="record" @click="toVideo()">
            <uni-icons type="upload" size="20" color="#000"></uni-icons>
            <span>上传视频</span>
          </div>
          <div class="upload" @click="toVideo()">
            <uni-icons type="camera" size="20" color="#000"></uni-icons>
            <span>使用摄像头</span>
          </div>
        </div>
      </div>
    </uni-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const recordPopup = ref<any>(null)

const toVideo = () => {
  uni.navigateTo({
    url: '/pages/video/video',
  })
}
const handlePopup = () => {
  recordPopup.value.open('bottom')
}
</script>

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
  .popup-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 36px 36px 0 0;
    background-color: #fff;
    .tip {
      width: 100%;
      font-size: 24px;
      font-weight: bold;
      color: #6972f0;
      padding-bottom: 24px;
      border-bottom: 1px solid #eeeeee;
    }
    .upload {
      font-size: 20px;
      font-weight: bold;
      line-height: 160%;
    }
    .record {
      font-size: 20px;
      font-weight: bold;
      line-height: 160%;
      margin-bottom: 24px;
    }
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
}
</style>
