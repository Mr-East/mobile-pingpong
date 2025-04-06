<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
// 字体图标
@import '@/styles/fonts.scss';

view,
navigator,
input,
scroll-view {
  box-sizing: border-box;
}

button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.uni-easyinput__content {
  background-color: #f7f8fa !important;
  height: 60px;
  font-size: 20px;
}
.uni-easyinput__content-input {
  font-size: 20px !important;
}
.is-input-border {
  border: 1px solid #ebeef5;
  border-radius: 30px !important;
}
.uni-icons {
  vertical-align: middle; // 覆盖组件默认对齐
  line-height: 1; // 清除图标自带行高影响
}
// 两行省略
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
