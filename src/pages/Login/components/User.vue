<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    size="default"
  >
    <el-form-item prop="name" label-width="auto">
      <el-input v-model="ruleForm.name" placeholder="账号">
        <template #suffix>
          <i-ep-user class="v-icon" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password" label-width="auto">
      <el-input v-model="ruleForm.password" type="password" placeholder="密码">
        <template #suffix>
          <i-ep-lock class="v-icon" />
        </template>
      </el-input>
    </el-form-item>
    <div class="tools">
      <el-checkbox v-model="checked" label="自动登录" size="large" />
      <a style="color: #6892fe">忘记密码?</a>
    </div>
    <el-button
      style="width: 100%"
      type="primary"
      @click="submitForm(ruleFormRef)"
      >立即登录</el-button
    >
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import Cookies from 'js-cookie'

const router = useRouter()
interface RuleForm {
  name: string
  password: string
}
const checked = ref(false)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 11, message: '账号长度为3-11位', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    }
  ]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      Cookies.set('token', 'AAAAA')
      router.push('/main')
    } else {
      console.log('error submit1!', fields)
    }
  })
}
</script>

<style lang="less" scoped>
.tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    cursor: pointer;
    margin-top: 2px;
  }
}
</style>
