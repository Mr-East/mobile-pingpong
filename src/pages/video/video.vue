<template>
  <div class="video">
    <div class="media-container">
      <video src="" />
    </div>
    <div class="option-container">
      <div class="titles">
        <uni-icons type="gear-filled" color="#6972F0" size="24" />
        <span>设置</span>
      </div>
      <div class="options">
        <div class="option">
          <div class="title">显示球的轨迹</div>
          <switch checked @change="" style="transform: scale(0.7)" />
        </div>
        <div class="option">
          <div class="title">显示人的轨迹</div>
          <switch checked @change="" style="transform: scale(0.7)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.video {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .media-container {
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .option-container {
    background-color: #fff;
    .titles {
      padding: 12px;
      font-size: 20px;
      font-weight: bold;

    }
    .options {
      display: flex;
      flex-direction: column;

      .option {
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
      }
    }
  }
}
</style>
