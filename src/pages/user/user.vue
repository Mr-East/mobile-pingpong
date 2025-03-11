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
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.user {
  padding: 24px;
  .more {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
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
