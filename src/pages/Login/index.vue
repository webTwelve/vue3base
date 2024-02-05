<template>
  <div class="login-container">
    <div class="left-wrap"></div>
    <div class="right-wrap shadow">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="账号密码登录" name="User"> <User /></el-tab-pane>
        <el-tab-pane label="手机号登录" name="Phone"><Phone /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import User from './components/User.vue'
import Phone from './components/Phone.vue'
const activeName = ref('User')
const handleClick = () => {}
</script>

<style lang="less" scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  background: url('@/assets/images/login-bg.jpg');
  background-size: 100% 100%;
}
.left-wrap {
  height: 100%;
  width: 60vw;
}
.right-wrap {
  height: 400px;
  width: 360px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
</style>
