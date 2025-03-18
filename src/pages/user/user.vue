<template>
  <div class="user">
    <div class="profile-wrapper">
      <div class="avatar">
        <image src="@/static/images/user_Avatar.png" mode="scaleToFill" />
      </div>
      <div class="info-wrapper">
        <div class="account">Admin</div>
        <div class="email">hello@designpicko.com</div>
      </div>
      <div class="more"><uni-icons type="forward" size="24" color="#000"></uni-icons></div>
    </div>
    <div class="analysis-wrapper">
      <div class="icon">
        <image src="@/static/images/user_icon.png" mode="scaleToFill" />
      </div>
      <div class="title">查看运动数据分析报告</div>
      <div class="more"><uni-icons type="forward" size="24" color="#fff"></uni-icons></div>
    </div>
    <div class="gapline">General</div>
    <div class="general-container">
      <div class="item">
        <div class="icon">
          <image src="@/static/images/Profile.png" mode="scaleToFill" />
        </div>
        <div class="info">个人信息</div>
      </div>
      <div class="item">
        <div class="icon">
          <image src="@/static/images/Show.png" mode="scaleToFill" />
        </div>
        <div class="info">黑夜模式</div>
      </div>
    </div>
    <div class="gapline">About</div>
    <div class="about-container">
      <div class="item">
        <div class="icon">
          <image src="@/static/images/Paper.png" mode="scaleToFill" />
        </div>
        <div class="info">帮助中心</div>
      </div>
      <div class="item">
        <div class="icon">
          <image src="@/static/images/Logout.png" mode="scaleToFill" />
        </div>
        <div class="info" style="color: #f75555" @click="handleLogout()">登出</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleLogout = () => {
  uni.navigateTo({
    url: '/pages/login/login',
  })
}
</script>

<style lang="scss" scoped>
.user {
  padding: 24px;
  .more {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
  }
  .general-container,
  .about-container {
    padding: 24px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .item {
    height: 29px;
    display: flex;
    align-items: center;
    .icon {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      width: 24px;
    }
    .info {
      width: calc(100% - 24px - 24px);
      color: #212121;
      line-height: 160%;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .gapline {
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #9e9e9e;
    font-weight: bold;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: calc(100% - 60px);
      height: 1px;
      background-color: #eeeeee;
    }
  }
  .profile-wrapper {
    height: 80px;
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    position: relative;

    .avatar {
      width: 80px;
      height: 80px;

      border-radius: 50%;
      background-color: #f5f5f5;
      margin-right: 20px;
    }
    .info-wrapper {
      width: 240px;
      .account {
        line-height: 160%;
        font-size: 20px;
        color: #212121;
        font-weight: bold;
      }
      .email {
        font-size: 14px;
        color: #616161;
      }
    }
  }

  .analysis-wrapper {
    margin-bottom: 28px;
    position: relative;
    padding: 0 16px;
    height: 112px;
    width: 100%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    background-image: linear-gradient(to bottom, #7e92f8, #6972f0);
    .icon {
      height: 80px;
      width: 83px;
      margin-right: 16px;
    }
    .title {
      font-size: 20px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
