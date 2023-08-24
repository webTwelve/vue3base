<template>
  <div>
    <h1>菜单</h1>
  </div>
</template>

<script setup lang="ts">
import { GetCourse } from '@/api/login/index'
const _GetCourse = async () => {
  let res = await GetCourse({
    page_index: 1,
    page_size: 10
  })
  console.log(res.data.list)
}
_GetCourse()
</script>

<style lang="less" scoped></style>
