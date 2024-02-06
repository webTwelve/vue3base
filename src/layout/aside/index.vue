<template>
  <div>
    <el-menu
      :default-active="menuActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="logo flex-center">
        <img src="@/assets/vue.svg" alt="" />
      </div>
      <el-menu-item
        :index="item.url"
        v-for="item in menu"
        :key="item.url"
        @click="jump(item)"
      >
        <i class="iconfont" :class="item.icon"></i>
        <template #title>{{ item.title }}</template>
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
import { menu } from './data'
import type { IMenu } from './data'
const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)
const menuActive = ref(route.path)

const changeCollapse = (collapse: boolean) => {
  isCollapse.value = collapse
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const jump = (item: IMenu) => {
  router.push(item.url)
}
</script>

<style lang="less" scoped>
.iconfont {
  margin-right: 10px;
  font-size: 22px;
}
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
