<template>
  <div>
    <el-menu
      default-active="3"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="logo flex-center">
        <img src="@/assets/vue.svg" alt="" />
      </div>
      <el-menu-item index="1">
        <i-ep-notification class="v-icon" />
        <template #title>工作台</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i-ep-iceCreamRound class="v-icon" />
        <template #title>活动管理</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i-ep-user class="v-icon" />
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i-ep-setting class="v-icon" />
        <template #title>系统设置</template>
      </el-menu-item>
      <div class="flex-center check-wrap">
        <i-ep-expand
          class="v-icon"
          v-if="isCollapse"
          @click="changeCollapse(false)"
        />
        <i-ep-fold class="v-icon" v-else @click="changeCollapse(true)" />
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
const isCollapse = ref(false)
const changeCollapse = (collapse: boolean) => {
  isCollapse.value = collapse
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.logo {
  width: 100%;
  height: 60px;
}
.el-menu-vertical-demo {
  position: relative;
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.check-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
}
.v-icon {
  cursor: pointer;
  margin-right: 4px;
}
</style>
