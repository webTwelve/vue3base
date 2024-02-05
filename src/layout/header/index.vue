<template>
  <el-header height="60px">
    <div class="flex-end header">
      <el-dropdown>
        <img
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie'
const router = useRouter()
const logout = () => {
  localStorage.clear()
  Cookies.remove('token')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.el-header {
  width: 100%;
  border-bottom: 1px solid @defaultLine;
}
.header {
  height: 100%;
  width: 100%;
  .avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    border: none !important;
  }
}
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
</style>
