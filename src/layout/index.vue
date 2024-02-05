<template>
  <div class="common-layout">
    <el-container>
      <Aside />
      <el-container direction="vertical">
        <Header />
        <Main />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue'
import Main from './main/index.vue'
import Aside from './aside/index.vue'
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.common-layout {
  height: 100%;
}
</style>
