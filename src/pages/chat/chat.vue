<template>
  <div class="chat">
    <div class="chat-container">
      <div v-for="(item, index) in messageList" :key="index">
        <div v-if="item.type === 'user'" class="user-message-wrapper">
          <div class="user-message">{{ item.msg }}</div>
        </div>
        <div v-if="item.type === 'ai'" class="ai-message-wrapper">
          <div class="ai-message">{{ item.msg }}</div>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="chatbox">
      <uni-easyinput
        v-model="userMessage.msg"
        type="text"
        placeholder="请输入内容"
        @confirm="sendMsg()"
      />
      <button class="send-btn" @click="sendMsg()">
        <image class="icon" src="@/static/images/Send.png" mode="scaleToFill" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const userMessage = ref({
  type: 'user',
  msg: '',
})
const messageList = ref<any>([])
const sendMsg = () => {
  messageList.value.push(userMessage.value)
  messageList.value.push({
    type: 'ai',
    msg: '正在思考中...',
  })
  userMessage.value = {
    type: 'user',
    msg: '',
  }
}
</script>

<style lang="scss">
.chat {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.chatbox {
  display: flex;
  padding: 16px;
  border-top: 1px solid #f5f5f5;
  .send-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, #7e92f8, #6972f0);
    .icon {
      height: 28px;
      width: 28px;
    }
  }
}
.chat-container {
  flex: 1;
  padding: 24px;
  overflow-y: auto;

  .user-message-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .ai-message-wrapper {
    display: flex;
    justify-content: flex-start;
  }

  .user-message {
    max-width: 60%;
    margin-bottom: 24px;
    background-color: #201d67;
    padding: 10px;
    border-radius: 20px 20px 0 20px;
    color: #fff;
  }
  .ai-message {
    max-width: 60%;
    margin-bottom: 24px;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 20px 20px 20px 0;
    color: #212121;
  }
}
</style>
