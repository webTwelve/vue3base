<template>
  <div>
    <h1>工作台</h1>
    <ElButton type="primary" @click="copy('123')">按钮</ElButton>
    <ElButton type="primary" @click="debouceCc">按钮</ElButton>
    <ElButton type="primary" @click="debouceCc">按钮</ElButton>
    <ElInput v-model="val" @input="debouceDd" />
  </div>
</template>

<script setup lang="ts">
import { useCopy, useDebouceFn } from '@/hooks'
const val = ref(1)
const cc = () => {
  console.log('===')
}
const handelInput = () => {
  console.log(val.value)
}
const debouceCc = useDebouceFn(cc)
const debouceDd = useDebouceFn(handelInput)
const [copy] = useCopy()
</script>

<style lang="less" scoped></style>
