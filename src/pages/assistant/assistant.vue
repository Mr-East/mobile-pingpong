<template>
  <div class="assistant">
    <div class="assistant-container">
      <div v-for="item in assistantData" :key="item.title" class="card-wrapper" @click="toChat()"> 
        <Card :title="item.title" :desc="item.desc" :icon="item.icon"></Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Card from './components/card.vue'
const assistantData = ref([
  {
    title: '乒乓训练规划',
    desc: '结合以往训练数据，给出合理的训练规划',
    icon: 'assistant_plan.png',
  },
  {
    title: '乒乓训练分析',
    desc: '分析近期训练数据，给出训练建议和分析',
    icon: 'assistant_analysis.png',
  },
  {
    title: '饮食评估',
    desc: '分析近期训练数据，给出饮食建议和分析',
    icon: 'assistant_analysis.png',
  },
])
const toChat = () => {
  uni.navigateTo({
    url: '/pages/chat/chat',
  })
}
</script>

<style lang="scss" scoped>
.assistant {
  width: 100vw;
  padding: 24px;
}
.assistant-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
  .card-wrapper {
    flex: 1 1 calc(50% - 6px);
  }
}
</style>
