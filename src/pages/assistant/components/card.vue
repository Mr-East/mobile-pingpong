<template>
  <div class="card" >
    <div class="icon">
      <image class="img" src="@/static/images/assistant_analysis.png" mode="scaleToFill" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsImages } from '@/utils/img'
const getImgUrl = (url: string | undefined) => {
  return '@/static/images/' + url
}
defineProps({
  title: String,
  desc: String,
  icon: String,
})
</script>

<style scoped lang="scss">
.card {
  
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 16px;
  .icon {
    height: 64px;
    width: 64px;
    border: 1px solid #e0e7f2;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      height: 40px;
      width: 40px;
    }
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #212121;
    line-height: 160%;
  }
  .desc {
    color: #616161;
    font-size: 14px;
    line-height: 160%;
  }
}
</style>
